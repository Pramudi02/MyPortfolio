using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Repositories;
using PortfolioAPI.Models;  // This line is necessary to reference the Project class

namespace PortfolioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly ProjectRepository _projectRepo;

        public ProjectsController(ProjectRepository projectRepo)
        {
            _projectRepo = projectRepo;
        }

        [HttpGet]
        public ActionResult<List<Project>> GetProjects()
        {
            var projects = _projectRepo.GetAllProjects();
            return Ok(projects);
        }
    }
}
