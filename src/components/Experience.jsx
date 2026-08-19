const experiences = [
  {
    role: "Research Analyst - I (Software & Automation)",

    company: "CopperPod IP",

    duration: "Jul 2024 — Feb 2026",

    points: [
      "Integrated biometric attendance hardware with REST APIs and SQL-based data pipelines, processing structured data and automating attendance workflows, reducing manual data-entry errors by 40% and saving 10+ hours weekly.",

      "Developed, maintained, and troubleshot Python automation services and data-processing workflows, implementing fixes and enhancements that reduced manual effort by 35% across recurring operational tasks.",

      "Collaborated across 3+ concurrent technical projects to analyze and deliver time-sensitive technology solutions, maintaining a 100% on-time delivery record.",
    ],
  },

  {
    role: "Machine Learning Engineer",

    company: "Paonta Valley LLP",

    duration: "Jan 2023 — Jul 2023",

    points: [
      "Developed recruiter-facing dashboards using JavaScript, HTML5, CSS3, and REST APIs, building responsive data-driven interfaces that reduced manual coordination effort by 25% for a team of 10+ recruiters..",

      "Integrated end-to-end conversational pipelines with backend REST APIs, automating response flows and candidate-data processing across multiple recruitment stages.",
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
