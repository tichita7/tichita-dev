const experiences = [
  {
    role: "Research Analyst I",

    company: "CopperPod IP",

    duration: "Jul 2024 — Feb 2026",

    points: [
      "Integrated biometric systems with the Zoho People platform using API-driven workflows and SQL-based integrations.",

      "Performed technical documentation, code review, and research paper analysis for technology-focused solutions.",

      "Worked on patent research, technical invention analysis, and prior-art research for intellectual property litigation workflows.",

      "Prepared claim charts and contributed to damage calculation analysis for patent infringement cases.",
    ],
  },

  {
    role: "Machine Learning Engineer",

    company: "Paonta Valley LLP",

    duration: "Jan 2023 — Jul 2023",

    points: [
      "Developed and implemented RASA-based chatbot workflows for recruitment automation.",

      "Designed recruiter-facing web interfaces using HTML5, CSS3, and JavaScript (ES6).",

      "Contributed to technical documentation and process optimization for streamlined recruitment operations.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-4 py-20 sm:px-6 sm:py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs tracking-widest text-green-500 uppercase sm:text-sm">
          Experience
        </p>

        <h2 className="mb-8 font-['Baguede'] text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl">
          Professional Experience
        </h2>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-6 transition duration-500 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.08)] sm:p-8 md:p-10"
            >
              <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-green-200 to-emerald-500 opacity-80"></div>

              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl">{exp.role}</h3>

                  <p className="font-medium tracking-wide text-violet-400">
                    {exp.company}
                  </p>
                </div>

                <p className="text-sm tracking-wide text-gray-500 uppercase sm:text-base">
                  {exp.duration}
                </p>
              </div>

              <ul className="space-y-4 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 text-violet-400">▹</span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
