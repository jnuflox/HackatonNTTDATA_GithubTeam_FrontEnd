const supabase = require('../config/supabase');
const azureOpenAIService = require('./azureOpenAI.service');

class ProjectService {
  // Transform database fields (snake_case) to frontend fields (camelCase)
  transformProject(project) {
    if (!project) return null;
    
    return {
      ...project,
      code: project.project_code || project.code,
      startDate: project.start_date || project.startDate,
      endDate: project.end_date || project.endDate,
      plannedProgress: project.planned_progress || project.plannedProgress || 0,
      actualProgress: project.actual_progress || project.actualProgress || 0,
      leader: project.leader || 'No asignado',
      aiRiskLevel: project.ai_risk_level || project.aiRiskLevel,
      managementSystem: project.management_system || project.managementSystem,
      managementPath: project.management_path || project.managementPath
    };
  }

  async getAllProjects(filters = {}) {
    let query = supabase
      .from('projects')
      .select('*, tasks(*)')
      .order('created_at', { ascending: false });

    if (filters.code) {
      query = query.ilike('project_code', `%${filters.code}%`);
    }

    if (filters.status) {
      query = query.eq('status', filters.status);
    }

    if (filters.startDate) {
      query = query.gte('end_date', filters.startDate);
    }

    if (filters.endDate) {
      query = query.lte('start_date', filters.endDate);
    }

    if (filters.riskLevel) {
      query = query.eq('ai_risk_level', filters.riskLevel);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Error fetching projects: ${error.message}`);
    }

    // Transform all projects
    const transformedData = (data || []).map(project => this.transformProject(project));
    return transformedData;
  }

  async getProjectById(projectId) {
    const { data: project, error } = await supabase
      .from('projects')
      .select('*, tasks(*), project_history(*), documents(*)')
      .eq('id', projectId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        throw new Error('Project not found');
      }
      throw new Error(`Error fetching project: ${error.message}`);
    }

    if (project.project_history) {
      project.project_history.sort((a, b) => new Date(b.change_date) - new Date(a.change_date));
    }

    // Transform project with tasks
    const transformedProject = this.transformProject(project);
    
    // Transform tasks if they exist
    if (transformedProject.tasks && Array.isArray(transformedProject.tasks)) {
      transformedProject.tasks = transformedProject.tasks.map(task => ({
        ...task,
        taskCode: task.task_code || task.taskCode,
        taskName: task.task_name || task.taskName,
        startDate: task.start_date || task.startDate,
        endDate: task.end_date || task.endDate,
        plannedProgress: task.planned_progress || task.plannedProgress || 0,
        actualProgress: task.actual_progress || task.actualProgress || 0,
        aiRiskLevel: task.ai_risk_level || task.aiRiskLevel,
        aiValidationStatus: task.ai_validation_status || task.aiValidationStatus,
        aiRiskReasons: task.ai_risk_reasons || task.aiRiskReasons || []
      }));
    }

    return transformedProject;
  }

  async createProject(projectData) {
    const projectCode = await this.generateProjectCode();

    const newProject = {
      project_code: projectCode,
      name: projectData.name,
      description: projectData.description,
      status: projectData.status || 'planning',
      priority: projectData.priority || 'medium',
      start_date: projectData.start_date || null,
      end_date: projectData.end_date || null,
      budget: projectData.budget || null,
      ai_insights: null
    };

    const { data: project, error } = await supabase
      .from('projects')
      .insert([newProject])
      .select()
      .single();

    if (error) {
      throw new Error(`Error creating project: ${error.message}`);
    }

    try {
      const aiAnalysis = await azureOpenAIService.analyzeProject(project);
      
      const { error: updateError } = await supabase
        .from('projects')
        .update({ ai_insights: aiAnalysis })
        .eq('id', project.id);

      if (!updateError) {
        project.ai_insights = aiAnalysis;
      }
    } catch (aiError) {
      console.error('AI Analysis error:', aiError);
    }

    return project;
  }

  async updateProject(projectId, updates) {
    const { data: project, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', projectId)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        throw new Error('Project not found');
      }
      throw new Error(`Error updating project: ${error.message}`);
    }

    return project;
  }

  async deleteProject(projectId) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', projectId);

    if (error) {
      throw new Error(`Error deleting project: ${error.message}`);
    }

    return { message: 'Project deleted successfully' };
  }

  async getProjectAIAnalysis(projectId) {
    const project = await this.getProjectById(projectId);
    
    if (project.ai_insights) {
      return project.ai_insights;
    }

    const aiAnalysis = await azureOpenAIService.analyzeProject(project);
    
    await supabase
      .from('projects')
      .update({ ai_insights: aiAnalysis })
      .eq('id', projectId);

    return aiAnalysis;
  }

  async getProjectHistory(projectId) {
    const { data: history, error } = await supabase
      .from('project_history')
      .select('*')
      .eq('project_id', projectId)
      .order('change_date', { ascending: false });

    if (error) {
      throw new Error(`Error fetching project history: ${error.message}`);
    }

    return history || [];
  }

  async addHistoryEntry(projectId, historyData) {
    const newEntry = {
      project_id: parseInt(projectId),
      change_type: historyData.change_type,
      field_changed: historyData.field_changed,
      old_value: historyData.old_value,
      new_value: historyData.new_value,
      changed_by: historyData.changed_by,
      change_date: new Date().toISOString()
    };

    const { data: entry, error } = await supabase
      .from('project_history')
      .insert([newEntry])
      .select()
      .single();

    if (error) {
      throw new Error(`Error adding history entry: ${error.message}`);
    }

    return entry;
  }

  async getDashboardStats() {
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*, tasks(*)');

    if (projectsError) {
      throw new Error(`Error fetching dashboard stats: ${projectsError.message}`);
    }

    const totalProjects = projects.length;
    const projectsByStatus = projects.reduce((acc, p) => {
      acc[p.status] = (acc[p.status] || 0) + 1;
      return acc;
    }, {});

    const projectsByPriority = projects.reduce((acc, p) => {
      acc[p.priority] = (acc[p.priority] || 0) + 1;
      return acc;
    }, {});

    const allTasks = projects.flatMap(p => p.tasks || []);
    const totalTasks = allTasks.length;
    const tasksByStatus = allTasks.reduce((acc, t) => {
      acc[t.status] = (acc[t.status] || 0) + 1;
      return acc;
    }, {});

    const completedTasks = allTasks.filter(t => t.status === 'completed').length;
    const completionRate = totalTasks > 0 ? (completedTasks / totalTasks * 100).toFixed(2) : 0;

    const totalBudget = projects.reduce((sum, p) => sum + (parseFloat(p.budget) || 0), 0);
    const avgBudget = totalProjects > 0 ? totalBudget / totalProjects : 0;

    const projectsByRisk = projects.reduce((acc, p) => {
      const risk = p.ai_risk_level || 'unknown';
      acc[risk] = (acc[risk] || 0) + 1;
      return acc;
    }, {});

    return {
      overview: {
        totalProjects,
        totalTasks,
        completionRate: parseFloat(completionRate),
        totalBudget: parseFloat(totalBudget.toFixed(2)),
        avgBudget: parseFloat(avgBudget.toFixed(2))
      },
      projects: {
        byStatus: projectsByStatus,
        byPriority: projectsByPriority,
        byRisk: projectsByRisk
      },
      tasks: {
        total: totalTasks,
        byStatus: tasksByStatus,
        completed: completedTasks
      }
    };
  }

  async generateProjectCode() {
    const year = new Date().getFullYear();
    
    const { count, error } = await supabase
      .from('projects')
      .select('id', { count: 'exact', head: true })
      .ilike('project_code', `PROJ-${year}-%`);

    if (error) {
      console.error('Error counting projects:', error);
    }

    const nextNumber = (count || 0) + 1;
    return `PROJ-${year}-${String(nextNumber).padStart(3, '0')}`;
  }

  calculateProgress(project) {
    if (!project.tasks || project.tasks.length === 0) {
      return 0;
    }

    const completedTasks = project.tasks.filter(t => t.status === 'completed').length;
    return (completedTasks / project.tasks.length * 100).toFixed(2);
  }
}

module.exports = new ProjectService();
