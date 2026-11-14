import { emailParts, links } from "../data.js";

function MailIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.5 5.5 2.8 5.5 2.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.2c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21" />
    </svg>
  );
}

export default function Contact() {
  const sendEmail = () => {
    window.location.href = `mailto:${emailParts.join("@")}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-h" className="flex flex-wrap items-center justify-between gap-8 border-t border-line pb-20 pt-12 md:pb-24 md:pt-16">
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
        <h2 id="contact-h" className="section-title">
          <span className="text-accent">[C]</span>ontact
        </h2>
        <p className="m-0 text-[17px] leading-relaxed text-body md:text-lg">
          Want to talk about testing, tooling, or coffee? Send me a message.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
        <button type="button" onClick={sendEmail} className="btn-primary">
          <MailIcon />
          Email me
        </button>
        <a href={links.linkedin} className="btn-secondary">
          <LinkedInIcon />
          LinkedIn
        </a>
        <a href={links.github} className="btn-secondary">
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </section>
  );
}
