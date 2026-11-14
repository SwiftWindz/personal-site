import { useState } from "react";
import { links } from "../data.js";

const nav = [
  { href: "#about", key: "A", rest: "bout" },
  { href: "#experience", key: "E", rest: "xperience" },
  { href: "#contact", key: "C", rest: "ontact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-line">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-4 px-5 py-2 md:px-8 md:py-5"
      >
        <a href="#about" className="font-mono text-base font-bold text-fg hover:text-bright">
          phil@ganem<span className="text-accent">:~$</span>
        </a>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <ul
          id="site-menu"
          className={`${open ? "flex" : "hidden"} w-full flex-col pb-3 font-mono text-base md:flex md:w-auto md:flex-row md:items-center md:gap-2 md:pb-0 md:text-[15px]`}
        >
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close} className="block py-3.5 text-fg hover:text-bright md:px-3 md:py-3">
                <span className="text-accent md:text-fg">[{item.key}]</span>
                {item.rest}
              </a>
            </li>
          ))}
          <li>
            <a
              href={links.resume}
              className="block py-3.5 text-accent md:ml-2 md:rounded-md md:border md:border-accent md:px-4 md:py-2.5 md:hover:bg-accent md:hover:text-bg"
            >
              Résumé ↓
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
