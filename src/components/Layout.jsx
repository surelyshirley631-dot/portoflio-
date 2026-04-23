import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-base text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-[length:28px_28px] opacity-[0.09]" />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-base/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <NavLink to="/" className="text-sm font-semibold tracking-[0.18em] text-white/90">
            Shirley Liu
          </NavLink>
          <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-1.5 text-sm transition ${
                    isActive ? "bg-white text-black" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 md:px-10 md:pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Shirley Liu. Built with React + Tailwind.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="https://github.com/surelyshirley631-dot" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-white" href="mailto:surelyshirley631@gmail.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
