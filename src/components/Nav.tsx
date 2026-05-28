import { useEffect, useState } from "react";
import logo from "@/assets/logo-navy.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#metodo", label: "Método" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-navy-deep/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="LM Assessoria Jurídica" className="h-10 w-10 rounded-sm object-contain" />
          <div className="hidden sm:block leading-none">
            <div className="font-serif text-base tracking-wide">Laila Magalhães</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Assessoria Jurídica
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-gold transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5531996908249"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 border border-gold/60 text-gold text-xs uppercase tracking-[0.18em] px-4 py-2.5 hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Falar agora
        </a>
      </div>
    </header>
  );
}
