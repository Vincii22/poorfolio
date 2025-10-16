import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center px-24 text-gray-300 bg-[#050816] overflow-hidden"
    >
      {/* Glowing Cyan Border Around Section */}
      <div className="absolute inset-0 rounded-none border border-cyan-400/30 shadow-[0_0_80px_rgba(0,255,255,0.25)] pointer-events-none"></div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-20 w-full">
        {/* ---------- 1️⃣ Profile Image ---------- */}
        <div className="flex justify-center md:justify-start w-full md:w-1/5">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={300}
              height={380}
              className="rounded-lg w-[300px] h-[380px] object-cover shadow-[0_0_60px_rgba(0,255,255,0.4)] border-4 border-cyan-400/70"
              priority
            />
            <div className="absolute inset-0 rounded-lg animate-pulse bg-cyan-400/10 blur-md"></div>
          </div>
        </div>

        {/* ---------- 2️⃣ User Info ---------- */}
        <div className="flex-1 space-y-6 md:px-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-cyan-400">
              Arvin Milan
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Backend Developer • Aspiring Data Engineer • Philippines
            </p>
            <p className="text-gray-400 text-sm italic mt-2">
              “Bridging systems and data through clean, scalable code.”
            </p>
          </div>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I specialize in building scalable backend systems using technologies like Node.js, Express, Laravel, FastAPI (Python), PostgreSQL, and MySQL. I enjoy creating robust APIs, optimizing performance, and designing architecture that scales efficiently.
          </p>

          {/* Links */}
          <div className="space-y-3 text-sm md:text-base">
            <p className="flex items-center gap-3">
              <FaLinkedin className="text-cyan-400 text-xl" />
              <a
                href="https://www.linkedin.com/in/arvin-milan-86b739372/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
              >
                linkedin.com/in/arvinmilan
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaGithub className="text-cyan-400 text-xl" />
              <a
                href="https://github.com/Vincii22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
              >
                github.com/arvinmilan
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span className="text-gray-300">arvinmilan1522@gmail.com</span>
            </p>
          </div>
        </div>

        {/* ---------- 3️⃣ About Me ---------- */}
        <div className="md:w-1/3 md:pl-10 md:border-l border-cyan-400/20">
          <h4 className="text-cyan-400 font-semibold text-xl">About Me</h4>
          <p className="text-base text-gray-300 leading-relaxed mt-10">
            I&rsquo;m a backend developer who thrives on solving complex problems and building systems that just work. From designing RESTful APIs to maintaining clean database schemas and deploying microservices, I focus on reliability and maintainability.
          </p>
          
          <p className="text-base text-gray-300 leading-relaxed mt-6">
           Alongside backend development, I&rsquo;m also passionate about data engineering — working with tools like Apache Airflow, dbt, and AWS to automate workflows and enable intelligent, data-driven systems. I see both domains as essential parts of building reliable modern software.
          </p>

          <p className="text-sm text-gray-400 mt-4">
            Outside of work and studying, you&rsquo;ll find me playing guitar, diving into strategy games, enjoying a good drink, and then — often — jumping right back into code. I believe a clear mind and good balance fuel creativity and strong development.
          </p>
        </div>
      </div>
    </section>
  );
}
