const Navbar = () => {
  return (
    <nav className="fixed top-2 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/5 bg-[#0B0F14]/55 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:top-3 sm:w-[95%]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 md:px-10">
        {/* Logo */}
        <h1 className="text-base font-bold tracking-wide sm:text-lg md:text-xl">
          tichita.dev
        </h1>

        {/* Desktop Nav */}
        <ul className="flex items-center gap-3 text-sm text-gray-300 lg:gap-8">
          <li>
            <a
              href="#about"
              className="transition duration-300 hover:text-violet-300"
            >
              About
            </a>
          </li>

          <li className="hidden lg:block">
            <a
              href="#skills"
              className="transition duration-300 hover:text-violet-300"
            >
              Skills
            </a>
          </li>

          <li className="hidden lg:block">
            <a
              href="#projects"
              className="transition duration-300 hover:text-violet-300"
            >
              Projects
            </a>
          </li>

          <li className="hidden lg:block">
            <a
              href="#experience"
              className="transition duration-300 hover:text-violet-300"
            >
              Experience
            </a>
          </li>

          <li className="hidden lg:block">
            <a
              href="#contact"
              className="transition duration-300 hover:text-violet-300"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1OFckc950DRsSdqNzwvmbjHlPUNmaTbAL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 shadow-[0_0_25px_rgba(168,85,247,0.25)] shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300 hover:bg-gradient-to-r hover:from-violet-400 hover:to-fuchsia-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
