using PortfolioAPI.Models;
using PortfolioAPI.Repositories;

namespace PortfolioAPI.Services
{
    public class ProjectService
    {
        private readonly ProjectRepository _repository;

        // Constructor to initialize the repository
        public ProjectService()
        {
            _repository = new ProjectRepository();
        }

        // Get all projects
        public List<Project> GetAllProjects()
        {
            return _repository.GetAllProjects();
        }

        // Get a project by ID
        public Project? GetProjectById(string id) // Nullable return type
        {
            return _repository.GetProjectById(id);
        }

        // Create a new project
        public void CreateProject(Project newProject)
        {
            _repository.CreateProject(newProject);
        }

        // Update an existing project
        public void UpdateProject(string id, Project updatedProject)
        {
            _repository.UpdateProject(id, updatedProject);
        }

        // Delete a project
        public void DeleteProject(string id)
        {
            _repository.DeleteProject(id);
        }
    }
}
