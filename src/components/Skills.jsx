const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "FastAPI",
  "Python",
  "REST APIs",
  "Groq API",
  "LLM Integration",
  "Node.js",
  "System Design",
  "C++",
  "DSA",
  "Git",
  "Responsive Design",
  "Framer Motion",
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

        <h2 className="mb-8 font-['Baguede'] text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl">
          Tools & Technologies
        </h2>

        <div className="flex flex-wrap gap-3 sm:gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-zinc-900 px-3 py-2 transition hover:border-green-500/50 sm:px-5 sm:py-3"
            >
              <p className="text-s sm:text-m font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
