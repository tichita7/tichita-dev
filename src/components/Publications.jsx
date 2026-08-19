const publications = [
  {
    title: "Intellectual Property Publication",
    description: "",
    type: "Publication",
    link: "https://amzn.in/d/0f0yGlFk",
  },
  {
    title: "Google cloud completion badge",
    description: "",
    type: "Certification",
    link: "https://www.skills.google/public_profiles/92c31654-cdda-4cd6-ba14-c319f51866a2/badges/26669845",
  },
  {
    title: "Software Engineer Certificate",
    description: "",
    type: "Certification",
    link: "https://www.hackerrank.com/certificates/iframe/14ad8cf484e6",
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="px-4 py-20 sm:px-6 sm:py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs tracking-widest text-green-500 uppercase sm:text-sm">
          Publications & Certifications
        </p>

        <h2 className="mb-8 font-['Baguede'] text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl">
          Beyond Code
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-8">
          {publications.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] sm:p-8"
            >
              {/* Hover Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 transition duration-500 hover:opacity-100"></div>

              <div className="relative">
                <p className="mb-3 text-xs tracking-widest text-violet-400 uppercase">
                  {item.type}
                </p>

                <h3 className="mb-4 text-xl font-bold sm:text-2xl">
                  {item.title}
                </h3>

                {/* <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {item.description}
                </p> */}

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/5"
                >
                  View {item.type}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
