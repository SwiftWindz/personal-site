export const links = {
  linkedin: "https://www.linkedin.com/in/phil-ganem/",
  github: "https://github.com/SwiftWindz",
  resume: "/Resume.pdf",
};

// The address is put together only when a visitor clicks "Email me",
// so it is not in the page as plain text for simple scrapers.
export const emailParts = ["philipganem", "gmail.com"];

export const bio = [
  { label: "Role", value: "Software Engineer II, Paychex" },
  { label: "Focus", value: "Software quality: testing, AI, and QA tools" },
  { label: "Location", value: "Rochester, New York" },
  { label: "Education", value: "BS Software Engineering, RIT (2025)" },
  { label: "Off the clock", value: "Music, games, books, the outdoors, coffee" },
  { label: "Pets", value: "Margo the corgi and Tangerine the gecko" },
];

export const paychex = {
  name: "Paychex",
  url: "https://www.paychex.com/",
  dates: "2024 – now",
  location: "Rochester, NY",
  roles: [
    {
      role: "Software Engineer II",
      date: "Dec 2025 – now",
      current: true,
      desc: "Software quality. I build and maintain the testing, AI, and QA tools that Paychex agile teams use every day.",
    },
    {
      role: "Software Engineer I",
      date: "Jan 2025 – Dec 2025",
      desc: "Rejoined my co-op team and continued work on its testing and quality platform.",
    },
    {
      role: "Software Engineer Co-op",
      date: "Jan 2024 – Aug 2024",
      desc: "Built features for the testing and QA software that about 160 agile teams use.",
    },
  ],
};

export const earlier = [
  { role: "Software Engineer (part-time)", org: "Bryx", date: "Oct 2024 – Jan 2025" },
  { role: "Software Engineer Co-op", org: "Measures for Justice", date: "Jan 2023 – Aug 2023" },
  { role: "Teaching Assistant → Head TA", org: "RIT", date: "Aug 2021 – Dec 2024" },
];
