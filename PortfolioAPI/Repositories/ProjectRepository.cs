using MongoDB.Driver;
using PortfolioAPI.Models;
using MongoDB.Bson; 

namespace PortfolioAPI.Repositories
{
    public class ProjectRepository
    {
        private readonly IMongoCollection<Project> _projects;

        // Constructor to initialize the MongoDB collection
        public ProjectRepository()
        {
            var client = new MongoClient("mongodb://localhost:27017"); // Adjust the MongoDB connection string if necessary
            var database = client.GetDatabase("portfolio"); // Database name
            _projects = database.GetCollection<Project>("projects"); // Collection name
        }

        // Get all projects
        public List<Project> GetAllProjects()
        {
            return _projects.Find(project => true).ToList(); // Retrieves all projects
        }

        // Get a project by ID
        public Project GetProjectById(string id)
        {
            var objectId = new ObjectId(id);  // Convert the string to ObjectId
            return _projects.Find(project => project.Id == objectId).FirstOrDefault(); // Retrieves a project by its ObjectId
        }

        // Create a new project
        public void CreateProject(Project newProject)
        {
            _projects.InsertOne(newProject); // Inserts a new project into the database
        }

        // Update an existing project
        public void UpdateProject(string id, Project updatedProject)
        {
            var objectId = new ObjectId(id);  // Convert the string to ObjectId
            var filter = Builders<Project>.Filter.Eq(p => p.Id, objectId); // Use ObjectId in the filter
            _projects.ReplaceOne(filter, updatedProject); // Replace the project with the updated one
        }

        // Delete a project
        public void DeleteProject(string id)
        {
            var objectId = new ObjectId(id);  // Convert the string to ObjectId
            var filter = Builders<Project>.Filter.Eq(p => p.Id, objectId); // Use ObjectId in the filter
            _projects.DeleteOne(filter); // Delete the project
        }
    }
}
