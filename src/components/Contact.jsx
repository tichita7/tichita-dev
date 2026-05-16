import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-20 sm:px-6 sm:py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-xs tracking-widest text-green-500 uppercase sm:text-sm">
          Contact
        </p>

        <h2 className="mb-6 font-['Baguede'] text-3xl font-bold sm:text-4xl md:text-5xl">
          Let’s Build Something Great
        </h2>

        <p className="mb-8 text-base leading-relaxed text-stone-300 sm:mb-8 sm:text-lg">
          Open to software engineering opportunities, collaborations, and
          impactful projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/tichita7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-lg transition hover:border-violet-500/50 sm:h-14 sm:w-14 sm:text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tichita-a1723l"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-lg transition hover:border-violet-500/50 sm:h-14 sm:w-14 sm:text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:tichita473@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-lg transition hover:border-violet-500/50 sm:h-14 sm:w-14 sm:text-xl"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://leetcode.com/tichita473/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-lg transition hover:border-violet-500/50 sm:h-14 sm:w-14 sm:text-xl"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
