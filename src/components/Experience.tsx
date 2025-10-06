// src/components/Experience.jsx
import { FaPython, FaAws, FaDocker, FaDatabase } from "react-icons/fa";
import { SiApacheairflow, SiDbt } from "react-icons/si";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex items-center px-24 text-gray-300 bg-[#050816] overflow-hidden"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* <h2 className="text-3xl font-bold text-cyan-400 mb-16 text-center">Skills & Experience</h2> */}

      <div className="flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        {/* Left: Skills & Experience */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Skills</h3>
          <p className="text-gray-400 mb-8">
            Experienced in building and automating scalable data systems. 
            Skilled in backend development, data workflows, and cloud platforms.
          </p>

          {/* Skills container */}
          <div className="p-6 border border-cyan-400/20 rounded-2xl bg-[#0a0d21]/40 shadow-[0_0_25px_rgba(0,255,255,0.05)] hover:shadow-[0_0_35px_rgba(0,255,255,0.1)] transition">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
              <div className="flex flex-col items-center">
                <FaPython className="text-4xl text-cyan-400 mb-2" />
                <span className="text-sm text-gray-300">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDatabase className="text-4xl text-cyan-400 mb-2" />
                <span className="text-sm text-gray-300">SQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiApacheairflow className="text-4xl text-cyan-400 mb-2" />
                <span className="text-sm text-gray-300">Airflow</span>
              </div>
              <div className="flex flex-col items-center">
                <FaAws className="text-4xl text-cyan-400 mb-2" />
                <span className="text-sm text-gray-300">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker className="text-4xl text-cyan-400 mb-2" />
                <span className="text-sm text-gray-300">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDbt className="text-4xl text-cyan-400 mb-2" />
                <span className="text-sm text-gray-300">dbt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="hidden md:block w-px h-full bg-cyan-400/20" />

        {/* Right: Trace History */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Trace History</h3>

          <div className="space-y-8 border-l border-cyan-400/20 pl-6">
            <div>
              <h4 className="text-lg font-medium text-cyan-200">Freelance Backend Developer</h4>
              <p className="text-sm text-gray-400">2020 – Present</p>
              <p className="text-gray-400 mt-2">
                Designed and maintained backend APIs, optimized SQL queries, and integrated
                cloud-based pipelines for data flow automation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-cyan-200">Capstone Project Mentor</h4>
              <p className="text-sm text-gray-400">2022 – 2023</p>
              <p className="text-gray-400 mt-2">
                Guided students in developing real-world systems using Laravel, MySQL, and
                Docker, emphasizing scalability and best practices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-cyan-200">Data Engineering Enthusiast</h4>
              <p className="text-sm text-gray-400">2024 – Present</p>
              <p className="text-gray-400 mt-2">
                Building modern ELT pipelines with Airflow, dbt, and AWS to support
                analytics-driven decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
