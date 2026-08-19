import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      className="relative flex h-9 w-16 items-center rounded-full border border-black/10 bg-black/5 p-1 transition-all duration-300 dark:border-white/10 dark:bg-white/10"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 dark:bg-zinc-800 ${dark ? "translate-x-7" : "translate-x-0"} `}
      >
        {dark ? (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3
                 7 7 0 0021 12.79z"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-amber-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              strokeLinecap="round"
              d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42
                 M17.65 17.65l1.42 1.42M2 12h2M20 12h2
                 M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
