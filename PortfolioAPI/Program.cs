using Microsoft.Extensions.Options;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<DatabaseSettings>(
    builder.Configuration.GetSection("ConnectionStrings"));

builder.Services.AddSingleton<ProjectService>();

// Add OpenAPI support
builder.Services.AddOpenApi();

builder.Services.AddControllers(); // Enable controllers

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Register API controllers
app.MapControllers();

app.Run();
