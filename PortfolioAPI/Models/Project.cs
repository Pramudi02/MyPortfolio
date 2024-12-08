using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
public class Project
{
    [BsonId]
    public ObjectId Id { get; set; }

    public string Title { get; set; }
    public string Description { get; set; }
    public List<string> Technologies { get; set; }
    public string Link { get; set; }
    public string Image { get; set; }

    // Constructor to initialize the properties
    public Project(string title, string description, List<string> technologies, string link, string image)
    {
        Title = title;
        Description = description;
        Technologies = technologies ?? new List<string>(); // Initialize with empty list if null
        Link = link;
        Image = image;
    }
}
