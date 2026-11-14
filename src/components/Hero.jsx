import { bio, links } from "../data.js";

export default function Hero() {
  return (
    <section id="about" aria-labelledby="about-h" className="flex flex-wrap items-start gap-12 pb-16 pt-10 md:pb-20 md:pt-24">
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5 md:gap-6">
        <p className="m-0 font-mono text-sm text-muted md:text-[15px]">~/whoami</p>
        <h1 id="about-h" className="m-0 font-mono text-[40px] font-bold leading-none tracking-tight text-bright md:text-[64px]">
          Phil Ganem
        </h1>
        <p className="m-0 font-mono text-base text-fg md:text-xl">
          Software Engineer II <span className="text-muted">/</span> <span className="text-accent">wizard</span>
          <span aria-hidden="true" className="ml-1 inline-block h-4 w-2 animate-pulse bg-accent align-[-2px] motion-reduce:animate-none md:h-5 md:w-2.5" />
        </p>
        <div className="flex max-w-[620px] flex-col gap-4 text-[17px] leading-relaxed md:text-[19px]">
          <p className="m-0">
            I'm a software engineer at{" "}
            <a href="https://www.paychex.com/" className="link-underline">Paychex</a>{" "}
            in Rochester, New York, where I work in software quality. I build and maintain the testing, AI, and QA
            tools that Paychex's agile teams use to ship with confidence.
          </p>
          <p className="m-0">
            I studied software engineering at{" "}
            <a href="https://www.rit.edu/" className="link-underline">RIT</a>, where I also spent three years as a
            teaching assistant, helping new programmers write their first lines of code.
          </p>
          <p className="m-0 text-muted">
            Away from the keyboard, I'm outside, reading, playing video games, making music, or taking too many photos
            of Margo, my corgi, and{" "}
            <a href="/tan.jpeg" className="text-fg underline decoration-line2 underline-offset-4 hover:text-bright">
              Tangerine
            </a>
            , my crested gecko. I'm also a coffee snob and a community activist.
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <a href={links.resume} className="btn-primary">View résumé</a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
      </div>

      <aside aria-labelledby="bio-h" className="flex min-w-0 flex-[1_1_320px] flex-col gap-5 rounded-[10px] border border-line bg-surface p-5 md:p-7">
        <h2 id="bio-h" className="m-0 font-mono text-base font-bold text-bright md:text-lg">
          <span className="text-accent">#</span> Bio
        </h2>
        <dl className="m-0 flex flex-col gap-4">
          {bio.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="label">{item.label}</dt>
              <dd className="m-0 text-[15px] text-bright md:text-base">{item.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
