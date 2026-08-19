const skillGroups = [
  {
    title: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "C++",
      "Python",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
      "Vite",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Data Pipelines",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "LLM Integration",
      "LLaMA",
      "Groq API",
      "Prompt Engineering",
      "AI Workflows",
      "Claude",
      "Cursor",
      "GitHub Copilot",
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "GitHub",
      "Firebase",
      "Linux",
      "Vercel",
      "Render",
      "VS Code",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 py-20 sm:px-6 sm:py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs tracking-widest text-green-500 uppercase sm:text-sm">
          Skills
        </p>

        <h2 className="mb-12 font-['Baguede'] text-3xl font-bold sm:text-4xl md:text-5xl">
          Tools & Technologies
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm tracking-widest text-violet-400 uppercase">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-2xl border border-white/10 bg-zinc-900 px-3 py-2 transition hover:border-green-500/50 sm:px-5 sm:py-3"
                  >
                    <p className="text-sm font-medium sm:text-base">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
