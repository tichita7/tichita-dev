const Newsletter = () => {
  return (
    <section id="writing" className="px-6 py-32 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm tracking-widest text-green-500 uppercase">
            Writing
          </p>

          <h2 className="font-['Baguede'] text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            Thoughts,
            <br />
            ideas &amp; everything
            <br />
            in between.
          </h2>
        </div>

        <div>
          <p className="mb-8 text-lg leading-relaxed text-stone-300">
            I write about technology, software development, learning,
            creativity, and the things I’m figuring out along the way.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <iframe
              src="https://thoughtsbytichita.substack.com/embed?transparent=1&light=1"
              className="h-[320px] w-full"
              style={{
                border: 0,
                background: "transparent",
              }}
              frameBorder="0"
              scrolling="no"
              title="Subscribe to Thoughts by Tichita"
            />
          </div>

          <a
            href="https://thoughtsbytichita.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-green-500 transition-colors hover:text-green-400"
          >
            Read my blogs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
