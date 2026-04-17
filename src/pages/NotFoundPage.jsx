import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta("404", "Page not found");

  return (
    <section className="rounded-2xl border border-white/10 bg-panel/50 p-8 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page Not Found</h1>
      <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
        The page you requested does not exist or has moved. Continue exploring the portfolio from the projects page.
      </p>
      <Link
        to="/projects"
        className="mt-6 inline-flex rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:border-white/45"
      >
        Go to Projects
      </Link>
    </section>
  );
}
