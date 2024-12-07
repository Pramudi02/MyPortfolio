using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Services;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly ProjectService _projectService;

        public ProjectController(ProjectService projectService)
        {
            _projectService = projectService;
        }

        // Get all projects
        [HttpGet]
        public IActionResult GetProjects()
        {
            var projects = _projectService.GetAllProjects();
            return Ok(projects);
        }

        // Get a project by ID
        [HttpGet("{id}")]
        public IActionResult GetProjectById(string id)
        {
            var project = _projectService.GetProjectById(id);
            if (project == null)
                return NotFound();

            return Ok(project);
        }

        // Add a new project
        [HttpPost]
        public IActionResult CreateProject(Project newProject)
        {
            _projectService.CreateProject(newProject);
            return CreatedAtAction(nameof(GetProjectById), new { id = newProject.Id }, newProject);
        }

        // Update a project
        [HttpPut("{id}")]
        public IActionResult UpdateProject(string id, Project updatedProject)
        {
            var existingProject = _projectService.GetProjectById(id);
            if (existingProject == null)
                return NotFound();

            _projectService.UpdateProject(id, updatedProject);
            return NoContent();
        }

        // Delete a project
        [HttpDelete("{id}")]
        public IActionResult DeleteProject(string id)
        {
            var project = _projectService.GetProjectById(id);
            if (project == null)
                return NotFound();

            _projectService.DeleteProject(id);
            return NoContent();
        }
    }
}
