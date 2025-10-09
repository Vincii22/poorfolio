"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const [category, setCategory] = useState("data"); // "data" | "backend"

  const dataProjects = [
    {
      title: "ETL Pipeline with PostgreSQL & Docker",
      desc: "Developed a robust ETL pipeline using Python and Dockerized PostgreSQL.",
      tech: ["Python", "PostgreSQL", "Docker"],
    },
    {
      title: "ETL Pipeline with PostgreSQL & Docker",
      desc: "Developed a robust ETL pipeline using Python and Dockerized PostgreSQL.",
      tech: ["Python", "PostgreSQL", "Docker"],
    },
    {
      title: "Data Orchestration with Airflow & dbt",
      desc: "Automated complex data transformations using Apache Airflow and dbt.",
      tech: ["Airflow", "dbt", "Python"],
    },
    {
      title: "Cloud Data Pipeline with Snowflake & AWS",
      desc: "Built scalable data ingestion on AWS integrated with Snowflake.",
      tech: ["Snowflake", "AWS", "Lambda"],
    },
  ];

  const backendProjects = [
    {
      title: "RESTful API with Node.js & Express",
      desc: "Built secure REST APIs with authentication, rate limiting, and error handling.",
      tech: ["Node.js", "Express", "JWT"],
    },
    {
      title: "RESTful API with Node.js & Express",
      desc: "Built secure REST APIs with authentication, rate limiting, and error handling.",
      tech: ["Node.js", "Express", "JWT"],
    },
    {
      title: "Microservice Architecture with Docker & Nginx",
      desc: "Designed modular backend systems deployed via containerized services.",
      tech: ["Docker", "Nginx", "Redis"],
    },
    {
      title: "Fullstack Integration with MySQL",
      desc: "Created backend services powering an admin dashboard for record management.",
      tech: ["MySQL", "Express", "Sequelize"],
    },
  ];

  const projects = category === "data" ? dataProjects : backendProjects;

  // Slider settings
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
      {/* Glowing section border */}
      <div className="absolute inset-0 border border-cyan-400/30 shadow-[0_0_80px_rgba(0,255,255,0.15)] pointer-events-none"></div>

      {/* Title + Toggle */}
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
            <div key={i} className="px-4">
              <div
                className="group relative border-4 border-cyan-400/30 rounded-2xl p-8 bg-[#0b0e18] hover:bg-[#0e1324] 
                           hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
              >
                {/* Glowing hover overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-cyan-400/10 transition duration-500"></div>

                {/* Project Preview */}
                <div className="relative z-10 mb-6 h-40 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-lg flex items-center justify-center text-cyan-400 text-sm font-mono">
                  Preview
                </div>

                {/* Project content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

                  {/* Tech stack tags */}
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
