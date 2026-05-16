const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 md:flex-row md:px-12">
        <h2 className="text-base font-bold sm:text-lg">tichita.dev</h2>

        <p className="text-center text-xs text-gray-500 sm:text-sm">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
