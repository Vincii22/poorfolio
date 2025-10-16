"use client";

import {
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaNodeJs,
  FaLaravel,
  FaReact,
} from "react-icons/fa";
import {
  SiApacheairflow,
  SiDbt,
  SiMysql,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

// --- Skills for the Carousel ---
const carouselSkills = [
  { name: "Python", icon: <FaPython className="text-4xl text-cyan-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-4xl text-cyan-400" /> },
  { name: "Airflow", icon: <SiApacheairflow className="text-4xl text-cyan-400" /> },
  { name: "AWS", icon: <FaAws className="text-4xl text-cyan-400" /> },
  { name: "Docker", icon: <FaDocker className="text-4xl text-cyan-400" /> },
  { name: "dbt", icon: <SiDbt className="text-4xl text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-cyan-400" /> },
  { name: "Express", icon: <SiExpress className="text-4xl text-cyan-400" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-4xl text-cyan-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-4xl text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-4xl text-cyan-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-4xl text-cyan-400" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-4xl text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-4xl text-cyan-400" /> },
];

// --- Skills for the Indicator ---
const indicatorSkills = [
  { name: "ExpressJS", icon: <SiExpress />, proficiency: 85 },
  { name: "Laravel", icon: <FaLaravel />, proficiency: 100 },
  { name: "PHP", icon: <span className="font-bold">php</span>, proficiency: 100 },
  { name: "Python", icon: <FaPython />, proficiency: 90 },
  { name: "FastAPI", icon: <SiFastapi />, proficiency: 80 },
  { name: "Javascript", icon: <SiJavascript />, proficiency: 90 },
  { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 100 },
  { name: "MySQL", icon: <SiMysql />, proficiency: 100 },
  { name: "ReactJS", icon: <FaReact />, proficiency: 75 },
  { name: "NextJS", icon: <SiNextdotjs />, proficiency: 75 },
  { name: "Tailwind", icon: <SiTailwindcss />, proficiency: 85 },
];

export default function Experience() {
  // Carousel logic (retained)
  const visibleItemCount = 5;
  const cloneCount = visibleItemCount - 1;
  const loopedSkills = [...carouselSkills, ...carouselSkills.slice(0, cloneCount)];
  const totalSteps = carouselSkills.length;
  const itemWidthPercentage = 50 / visibleItemCount;
  const totalContainerWidthPercentage = loopedSkills.length * itemWidthPercentage;
  const animationTranslateDistance = totalSteps * itemWidthPercentage;

  // ⭐️ New: Define the interface for SkillBar props
  interface SkillBarProps {
    name: string;
    // 'icon' is a React element (like FaPython or a <span>)
    icon: React.ReactNode; 
    proficiency: number;
  }

  // Component for an individual skill bar
  // ⭐️ Fixed: Apply the interface to the component's props
  const SkillBar = ({ name, icon, proficiency }: SkillBarProps) => (
    <div className="mb-4">
      <div className="flex justify-between items-center text-gray-300 mb-1">
        <span className="flex items-center gap-2 text-lg font-medium">
          <span className="text-cyan-400 text-xl">{icon}</span>
          {name}
        </span>
        <span className="text-sm font-light text-cyan-300">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div
          className="bg-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex items-center px-24 text-gray-300 bg-[#050816] overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        {/* Skills section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Skills</h3>
          <p className="text-gray-400 mb-8">
            Experienced in building and automating scalable data systems.
            Skilled in backend development, data workflows, and cloud platforms.
          </p>

          {/* 1. Smooth infinite carousel */}
          <div className="relative w-full overflow-hidden border border-cyan-400/20 rounded-2xl bg-[#0a0d21]/40 shadow-[0_0_25px_rgba(0,255,255,0.05)] mb-12">
            <div className="flex animate-scroll">
              {loopedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  style={{ width: `${itemWidthPercentage}%` }}
                  className="flex flex-col items-center justify-center shrink-0 py-6 text-center"
                >
                  {skill.icon}
                  <span className="text-sm text-gray-300 mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* 2. New Skills Indicator Section */}
          <div className="mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20">
              {indicatorSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Smooth scroll keyframes */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-${animationTranslateDistance}%);
              }
            }
            .animate-scroll {
              width: ${totalContainerWidthPercentage}%;
              animation: scroll 20s linear infinite;
            }
          `}</style>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-full bg-cyan-400/20" />

        {/* Trace History */}
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