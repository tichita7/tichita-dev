const projects = [
  {
    title: "NeoShell AI",

    description:
      "AI-powered platform that converts natural language prompts into terminal commands using modern full-stack architecture.",

    tech: ["React", "FastAPI", "Tailwind CSS", "Groq", "Llama 3.1"],

    github: "https://github.com/tichita7/neoshell-ai",

    live: "https://neoshell-ai.vercel.app",
  },

  {
    title: "QuoteVerse",

    description:
      "Quote generation platform featuring multiple categories, tweet sharing, favorites management, copy-to-clipboard, theme toggling, and responsive UI.",

    tech: ["HTML/CSS", "API", "JavaScript"],

    github: "https://github.com/tichita7/QuoteVerse",

    live: "https://tichita7.github.io/QuoteVerse/",
  },

  {
    title: "DineSpot",

    description:
      "Restaurant discovery platform with category-based browsing, dynamic restaurant listings, responsive UI, and seamless navigation experience.",

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/tichita7/DineSpot",

    live: "https://tichita7.github.io/DineSpot/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 py-20 sm:px-6 sm:py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs tracking-widest text-green-500 uppercase sm:text-sm">
          Projects
        </p>

        <h2 className="mb-8 font-['Baguede'] text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl">
          Things I've Built
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 transition duration-500 hover:opacity-100"></div>

              <h3 className="mb-4 text-xl font-bold sm:text-2xl">
                {project.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300 backdrop-blur-sm transition hover:border-violet-500/30 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/5"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm shadow-[0_0_25px_rgba(168,85,247,0.2)] transition duration-300 hover:from-violet-400 hover:to-fuchsia-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
