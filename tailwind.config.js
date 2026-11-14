/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Everforest (dark)
        bg: "#1E2326",
        surface: "#272E33",
        surface2: "#2E383C",
        line: "#374145",
        line2: "#414B50",
        edge: "#4F5B58",
        fg: "#D3C6AA",
        bright: "#F2EFDF",
        muted: "#9DA9A0",
        body: "#B5B9A8",
        accent: "#A7C080",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
