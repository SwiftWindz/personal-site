export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-3 px-5 py-6 font-mono text-[13px] text-muted md:px-8">
        <span>© {new Date().getFullYear()} Phil Ganem</span>
        <span>Built with React + Vite · deployed by GitHub Actions</span>
      </div>
    </footer>
  );
}
