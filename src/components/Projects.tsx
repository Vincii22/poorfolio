"use client";
import { useState } from "react";
import Slider from "react-slick";
// You'll need to install react-icons if you haven't already: npm install react-icons
import { FaGithub } from "react-icons/fa"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Types ---
type Project = {
    title: string;
    desc: string;
    fullDesc: string; // New: Full description for the modal
    link: string;     // New: Project link for the icon
    tech: string[];
};

// --- Modal Component ---
const ProjectModal = ({ project, onClose }: { project: Project | null, onClose: () => void }) => {
    if (!project) return null;

    return (
        // Modal Backdrop
        <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose} 
        >
            {/* Modal Content */}
            <div 
                className="bg-[#0b0e18] border-4 border-cyan-400/50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-[0_0_80px_rgba(0,255,255,0.3)]"
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-bold text-cyan-400">{project.title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
                    >
                        &times;
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-3 py-1 border border-cyan-400/30 rounded-md text-cyan-400"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Full Description */}
                <p className="text-gray-300 whitespace-pre-wrap mb-6">{project.fullDesc}</p>

                {/* Project Link */}
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                    <FaGithub className="mr-2 text-xl" />
                    View Repository
                </a>
            </div>
        </div>
    );
};

// --- Projects Component ---
export default function Projects() {
    const [category, setCategory] = useState<"data" | "backend">("data"); 
    // New State for Modal
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // --- Updated Project Data with fullDesc and link ---
    const dataProjects: Project[] = [
      {
        title: "ETL Pipeline with PostgreSQL & Docker",
        desc: "Developed a robust ETL pipeline using Python and Dockerized PostgreSQL.",
        fullDesc: "This project involved designing and building a fully automated Extract, Transform, Load (ETL) pipeline. Python scripts handled data extraction and transformation logic, while Docker was used to containerize the PostgreSQL database and the Python environment for guaranteed portability and reproducibility. Key features included error logging, incremental loading, and performance optimization for large datasets.",
        link: "https://github.com/project-link-1", 
        tech: ["Python", "PostgreSQL", "Docker"],
      },
      {
        title: "ETL Pipeline with PostgreSQL & Docker",
        desc: "Developed a robust ETL pipeline using Python and Dockerized PostgreSQL.",
        fullDesc: "A duplicate project demonstrating consistency in architecture. The focus here was refining the data quality checks and setting up a continuous integration/continuous deployment (CI/CD) workflow for the data transformation logic.",
        link: "https://github.com/project-link-2", 
        tech: ["Python", "PostgreSQL", "Docker"],
      },
      {
        title: "Data Orchestration with Airflow & dbt",
        desc: "Automated complex data transformations using Apache Airflow and dbt.",
        fullDesc: "Implemented a Directed Acyclic Graph (DAG) using Apache Airflow to schedule and monitor complex data workflows. Dbt (data build tool) was integrated to manage SQL-based transformations, enabling version control, testing, and documentation of the data models directly within the warehouse.",
        link: "https://github.com/project-link-3", 
        tech: ["Airflow", "dbt", "Python"],
      },
      {
        title: "Cloud Data Pipeline with Snowflake & AWS",
        desc: "Built scalable data ingestion on AWS integrated with Snowflake.",
        fullDesc: "Architected a serverless data pipeline leveraging AWS services (S3 for storage, Lambda for event-driven processing, and SQS for queuing) to ingest streaming and batch data into a Snowflake data warehouse. The design prioritized scalability, low latency, and cost efficiency in the cloud environment.",
        link: "https://github.com/project-link-4", 
        tech: ["Snowflake", "AWS", "Lambda"],
      },
    ];

    const backendProjects: Project[] = [
      {
        title: "RESTful API with Node.js & Express",
        desc: "Built secure REST APIs with authentication, rate limiting, and error handling.",
        fullDesc: "Developed a high-performance RESTful API using Node.js and the Express framework. Features included JSON Web Token (JWT) based authentication, granular role-based access control, a comprehensive request rate-limiting middleware, and centralized error handling for production readiness.",
        link: "https://github.com/project-link-5", 
        tech: ["Node.js", "Express", "JWT"],
      },
      {
        title: "RESTful API with Node.js & Express",
        desc: "Built secure REST APIs with authentication, rate limiting, and error handling.",
        fullDesc: "A second iteration focusing on integrating external services and utilizing caching mechanisms (like Redis) to reduce database load and improve API response times under high concurrency.",
        link: "https://github.com/project-link-6", 
        tech: ["Node.js", "Express", "JWT"],
      },
      {
        title: "Microservice Architecture with Docker & Nginx",
        desc: "Designed modular backend systems deployed via containerized services.",
        fullDesc: "Refactored a monolithic application into several decoupled microservices. Docker was used for containerization, and Docker Compose managed the multi-container deployment. Nginx served as a reverse proxy for load balancing and routing requests to the appropriate services, ensuring high availability and resilience.",
        link: "https://github.com/project-link-7", 
        tech: ["Docker", "Nginx", "Redis"],
      },
      {
        title: "Fullstack Integration with MySQL",
        desc: "Created backend services powering an admin dashboard for record management.",
        fullDesc: "Developed the full backend stack for an internal admin dashboard. Used MySQL for the primary database, Express.js for the API layer, and Sequelize as the ORM (Object-Relational Mapper) to manage database interactions, focusing on CRUD (Create, Read, Update, Delete) operations with efficient queries.",
        link: "https://github.com/project-link-8", 
        tech: ["MySQL", "Express", "Sequelize"],
      },
    ];

    const projects = category === "data" ? dataProjects : backendProjects;

    // Slider settings (Original design preserved)
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1 },
        },
      ],
    };

    return (
      <section
        id="projects"
        className="relative w-full min-h-screen flex flex-col items-center justify-center px-16 text-gray-300 bg-[#050816] overflow-hidden"
      >
        {/* MODAL IS HERE */}
        <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
        
        {/* Glowing section border (Unchanged) */}
        <div className="absolute inset-0 border border-cyan-400/30 shadow-[0_0_80px_rgba(0,255,255,0.15)] pointer-events-none"></div>

        {/* Title + Toggle (Unchanged) */}
        <div className="relative z-10 flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            DATASET: Projects
          </h2>

          <div className="flex space-x-4 bg-[#0b0e18] border border-cyan-400/30 rounded-full p-2">
            <button
              onClick={() => setCategory("data")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                category === "data"
                  ? "bg-cyan-400 text-black"
                  : "text-cyan-400 hover:bg-cyan-400/10"
              }`}
            >
              Data Engineering
            </button>
            <button
              onClick={() => setCategory("backend")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                category === "backend"
                  ? "bg-cyan-400 text-black"
                  : "text-cyan-400 hover:bg-cyan-400/10"
              }`}
            >
              Backend Development
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full max-w-6xl relative z-10">
          <Slider {...settings}>
            {projects.map((p, i) => (
              <div 
                  key={i} 
                  className="px-4"
              >
                <div
                  onClick={() => setSelectedProject(p)} // 👈 MODAL OPENER
                  className="group relative border-4 border-cyan-400/30 rounded-2xl p-8 bg-[#0b0e18] hover:bg-[#0e1324] 
                             hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.1)] cursor-pointer min-h-[400px]"
                >
                  {/* Glowing hover overlay (Unchanged) */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-cyan-400/10 transition duration-500"></div>

                  {/* Project Preview & Link/Icon */}
                  <div className="relative z-10 mb-6 h-40 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-lg flex items-center justify-center text-cyan-400 text-sm font-mono">
                    Preview
                    {/* GITHUB LINK/ICON */}
                    <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking the link
                        className="absolute top-3 right-3 text-2xl hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                        <FaGithub />
                    </a>
                  </div>

                  {/* Project content (Unchanged) */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

                    {/* Tech stack tags (Unchanged) */}
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 border border-cyan-400/30 rounded-md text-cyan-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
 }
