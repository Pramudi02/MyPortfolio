using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PortfolioAPI.Models;

namespace PortfolioAPI.Services
{
    public class ProjectService
    {
        // In-memory storage for demonstration purposes
        private static readonly List<Project> _projects = new List<Project>();

        // Get all projects
        public List<Project> GetAllProjects()
        {
            return _projects;
        }

        // Get a project by ID
        public Project? GetProjectById(string id) // Make return type nullable
        {
            return _projects.FirstOrDefault(p => p.Id == id);
        }

        // Create a new project
        public void CreateProject(Project newProject)
        {
            _projects.Add(newProject);
        }

        // Update an existing project
        public void UpdateProject(string id, Project updatedProject)
        {
            var existingProject = _projects.FirstOrDefault(p => p.Id == id);
            if (existingProject != null)
            {
                existingProject.Name = updatedProject.Name;
                existingProject.Description = updatedProject.Description;
                // Add other properties as needed
            }
        }

        // Delete a project
        public void DeleteProject(string id)
        {
            var project = _projects.FirstOrDefault(p => p.Id == id);
            if (project != null)
            {
                _projects.Remove(project);
            }
        }
    }
}
