import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "/logo2-remove-bg.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#metodo", label: "Método" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-navy-deep/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="LM Assessoria Jurídica"
            className="h-22 w-22 rounded-sm object-contain"
          />
          <div className="sm:block leading-none">
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
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-gold/45 text-gold transition-colors hover:bg-gold hover:text-primary-foreground md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-border/60 bg-navy-deep/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm uppercase tracking-[0.18em]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-border/40 py-4 text-foreground/85 transition-colors last:border-b-0 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531996908249"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center border border-gold/60 px-4 py-3 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            onClick={() => setIsOpen(false)}
          >
            Falar agora
          </a>
        </nav>
      </div>
    </header>
  );
}
