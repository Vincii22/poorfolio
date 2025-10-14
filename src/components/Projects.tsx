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
    title: "Modern ELT Pipeline for Movie Analytics",
    desc: "Automated data ingestion and transformation using Airbyte, Airflow, and dbt.",
    fullDesc:
      "Built a modern ELT pipeline leveraging Docker, Airflow, Airbyte, dbt, and PostgreSQL to automate data ingestion, transformation, and orchestration for a scalable movie analytics platform.",
    link: "https://github.com/project-link-1", // Update as needed
    tech: ["Docker", "Airflow", "Airbyte", "dbt", "PostgreSQL"],
  },
  {
    title: "End-to-End Retail ETL Pipeline",
    desc: "Automated retail sales data processing with PySpark and PostgreSQL.",
    fullDesc:
      "Designed and automated a full data pipeline to clean, enrich, and load retail sales data, eliminating manual processing.",
    link: "https://github.com/project-link-2", // Update as needed
    tech: ["PySpark", "PostgreSQL"],
  },
  {
    title: "Healthcare Cost Analysis ETL Pipeline",
    desc: "Scalable CSV ingestion with Airflow, dbt, and Pandas.",
    fullDesc:
      "Automated a complete batch ETL pipeline (Airflow, dbt, Pandas) for CSV ingestion and transformation, enabling scalable warehouse modeling for healthcare cost analysis.",
    link: "https://github.com/project-link-3", // Update as needed
    tech: ["Airflow", "dbt", "Pandas"],
  },
  {
    title: "Real-Time User Activity Analytics Pipeline",
    desc: "Sub-minute analytics using Kafka, Spark Streaming, and FastAPI.",
    fullDesc:
      "Built a real-time user activity pipeline with Kafka, Spark Streaming, and FastAPI to deliver windowed analytics with sub-minute latency via REST APIs.",
    link: "https://github.com/project-link-4", // Update as needed
    tech: ["Kafka", "Spark Streaming", "FastAPI"],
  },
  {
    title: "Real-Time Ride Demand Analytics Pipeline",
    desc: "Low-latency surge detection using Spark Structured Streaming.",
    fullDesc:
      "Built a real-time ride demand tracking pipeline using Kafka, Spark Structured Streaming, and FastAPI to deliver location-based surge detection and demand analytics with low-latency REST APIs.",
    link: "https://github.com/project-link-5", // Update as needed
    tech: ["Kafka", "Spark Structured Streaming", "FastAPI"],
  },
];


const backendProjects: Project[] = [
  {
    title: "Library Management System with RFID Scanning",
    desc: "Digitized library workflows with RFID-based book tracking.",
    fullDesc:
      "Developed a backend system for managing book inventories, borrowing, and returns using RFID scanning technology. Built with PHP and MySQL, the system provides secure login, real-time inventory updates, and streamlined user interaction through a responsive frontend.",
    link: "https://github.com/project-link-1", // Replace with actual link
    tech: ["PHP", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Document Tracking and Workflow System",
    desc: "Streamlined document flow using PHP and MySQL backend logic.",
    fullDesc:
      "Implemented a workflow system to track the movement and approval status of official documents within an organization. Designed with PHP and MySQL, the system supports user roles, activity logs, and secure file handling.",
    link: "https://github.com/project-link-2", // Replace with actual link
    tech: ["PHP", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Evaluation and Grading Management System",
    desc: "Automated grading with Laravel and modern frontend stack.",
    fullDesc:
      "Created a backend system for academic institutions to manage student evaluations, grade inputs, and reports. Built with Laravel and TailwindCSS, it supports dynamic input validation, user authentication, and PDF grade sheet generation.",
    link: "https://github.com/project-link-3", // Replace with actual link
    tech: ["Laravel", "PHP", "HTML", "CSS", "Tailwind", "JavaScript", "MySQL"],
  },
  {
    title: "Automated Organization Management System with Barcode Scanning",
    desc: "Enabled barcode-based organization tracking and automation.",
    fullDesc:
      "Developed an internal platform for managing organizations, members, and events using barcode scanners. The backend, built with Laravel and MySQL, processes member check-ins, tracks event participation, and provides detailed analytics via a modern frontend.",
    link: "https://github.com/project-link-4", // Replace with actual link
    tech: ["Laravel", "Tailwind", "JavaScript", "MySQL"],
  },
  {
    title: "Filipino Sign Language Website with Machine Learning Integration",
    desc: "Built an accessible platform powered by machine learning.",
    fullDesc:
      "Designed a learning platform that teaches Filipino Sign Language, integrating machine learning for gesture recognition. Laravel powers the backend, while the frontend offers an interactive and inclusive experience for users.",
    link: "https://github.com/project-link-5", // Replace with actual link
    tech: ["Laravel", "HTML", "CSS", "JavaScript", "MySQL", "Machine Learning"],
  },
  {
    title: "Virtual Learning Environment for Individuals with Dyslexia",
    desc: "Inclusive platform leveraging AI for learning support.",
    fullDesc:
      "Created a virtual learning environment specifically tailored for individuals with dyslexia. The system uses Laravel for backend operations and integrates TensorFlow and Python-based models to offer personalized learning aids and improved content accessibility.",
    link: "https://github.com/project-link-6", // Replace with actual link
    tech: ["Laravel", "JavaScript", "HTML", "CSS", "TensorFlow", "Python", "MySQL"],
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
