const About = () => {
  return (
    <section id="about" className="px-6 py-32 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm tracking-widest text-green-500 uppercase">
            About
          </p>

          <h2 className="font-['Baguede'] text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            Engineer mindset.
            <br />
            Clean execution.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-stone-300">
            Computer Science graduate with strong foundations in problem
            solving, frontend engineering, and scalable UI development.
            Currently building polished real-world projects while transitioning
            into software engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
