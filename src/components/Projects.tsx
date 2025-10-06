const projects = [
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex items-center px-24 text-gray-300 bg-[#050816] overflow-hidden"
    >
      {/* Glowing section border */}
      <div className="absolute inset-0 border border-cyan-400/30 shadow-[0_0_80px_rgba(0,255,255,0.15)] pointer-events-none"></div>

      {/* <h2 className="text-3xl font-bold text-cyan-400 mb-16 text-center">
        // (DATASET: Projects)
      </h2> */}

      <div className="grid md:grid-cols-3 gap-10 relative z-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative border-4 border-cyan-400/30 rounded-2xl p-6 bg-[#0b0e18] hover:bg-[#0e1324] 
                       hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          >
            {/* Glowing hover overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-cyan-400/10 transition duration-500"></div>

            {/* Project preview (placeholder) */}
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
        ))}
      </div>
    </section>
  );
}
