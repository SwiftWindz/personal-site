import { earlier, links, paychex } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="flex flex-col gap-8 border-t border-line py-12 md:gap-10 md:py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="exp-h" className="section-title">
          <span className="text-accent">[E]</span>xperience
        </h2>
        <a href={links.resume} className="py-3 font-mono text-[15px] text-accent hover:text-bright">
          Full résumé (PDF) →
        </a>
      </div>

      <div className="flex flex-col gap-6 rounded-[10px] border border-line bg-surface p-5 md:gap-7 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="m-0 text-[22px] font-bold text-bright md:text-[26px]">
            <a href={paychex.url} className="hover:text-white">{paychex.name}</a>
          </h3>
          <p className="m-0 font-mono text-sm text-muted">
            {paychex.dates} · {paychex.location}
          </p>
        </div>
        <ol className="m-0 flex list-none flex-col border-l-2 border-line2 p-0">
          {paychex.roles.map((r) => (
            <li key={r.role} className="flex flex-wrap gap-x-8 gap-y-1.5 pb-6 pl-4 pt-1 last:pb-1 md:pl-6">
              <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-1.5">
                <h4 className={`m-0 text-[17px] font-semibold md:text-[19px] ${r.current ? "text-accent" : "text-bright"}`}>
                  {r.role}
                </h4>
                <p className="m-0 max-w-[680px] text-[15px] leading-relaxed text-body md:text-base">{r.desc}</p>
              </div>
              <p className="order-first m-0 basis-full font-mono text-[13px] text-muted md:order-none md:basis-[200px] md:pt-1 md:text-sm">
                {r.date}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="label m-0 mb-2 font-medium">Earlier</h3>
        <ul className="m-0 flex list-none flex-col p-0">
          {earlier.map((e) => (
            <li key={e.org} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-surface2 py-3.5">
              <span className="text-[15px] text-fg md:text-[17px]">
                {e.role} <span className="text-muted">·</span>{" "}
                <span className="font-semibold text-bright">{e.org}</span>
              </span>
              <span className="font-mono text-sm text-muted">{e.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
