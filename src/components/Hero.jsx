import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 sm:px-6 sm:pt-32 md:px-12 md:pt-28">
      {/* Main Glow */}
      <div className="absolute top-20 right-[-80px] h-[300px] w-[300px] rounded-full bg-fuchsia-500/18 blur-[140px] sm:h-[450px] sm:w-[450px] md:right-[-120px] md:h-[600px] md:w-[600px]"></div>

      {/* Secondary Glow */}
      <div className="absolute right-[15%] bottom-10 h-[220px] w-[220px] rounded-full bg-fuchsia-500/10 blur-[120px] md:h-[320px] md:w-[320px]"></div>

      <div className="grid w-full max-w-7xl items-center gap-10 sm:gap-14 md:grid-cols-2 md:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-[11px] tracking-[0.25em] text-green-500 uppercase sm:text-sm">
            Software Engineer
          </p>

          <h1 className="mb-3 bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text font-['Baguede'] text-5xl leading-[0.95] font-bold tracking-tight text-stone-200 text-transparent sm:text-6xl md:text-8xl md:leading-tight">
            Tichita <br /> Dhiman
          </h1>

          <p className="mb-5 max-w-md text-base leading-relaxed text-stone-300 sm:mb-5 sm:max-w-xl sm:text-lg md:text-xl">
            Building clean, scalable, and modern web experiences with React,
            Tailwind, and strong engineering fundamentals.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-violet-400 hover:to-fuchsia-400 sm:px-7 sm:py-3.5 sm:text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/5 sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-10 flex items-center justify-center md:mt-0"
        >
          {/* Glow */}
          <div className="absolute h-[260px] w-[260px] rounded-full bg-gradient-to-br from-violet-500/25 to-fuchsia-500/15 blur-[90px]"></div>

          {/* Oval Image */}

          <img
            src={profile}
            alt="Tichita"
            className="relative h-[170px] w-[170px] rounded-[50%] border border-white/10 object-cover shadow-[0_0_40px_rgba(168,85,247,0.18)] transition duration-500 hover:scale-[1.03] sm:h-[220px] sm:w-[220px] md:h-[320px] md:w-[320px] lg:h-[400px] lg:w-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
