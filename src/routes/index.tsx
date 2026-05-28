import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Areas } from "@/components/Areas";
import { Marquee } from "@/components/Marquee";
import { Metodo } from "@/components/Metodo";
import { Depoimentos } from "@/components/Depoimentos";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laila Magalhães · Assessoria Jurídica e Recuperação de Crédito" },
      {
        name: "description",
        content:
          "Assessoria jurídica especializada em direito trabalhista, recuperação de crédito, instituições de ensino e universo equestre Mangalarga Marchador. Belo Horizonte / MG.",
      },
      { property: "og:title", content: "Laila Magalhães · Assessoria Jurídica" },
      {
        property: "og:description",
        content:
          "Estratégia extrajudicial ativa, atuação trabalhista, recuperação de crédito e direito equestre.",
      },
      {
        name: "keywords",
        content:
          "direitos trabalhistas, recuperação de crédito, cobrança, mangalarga marchador, haras, instituição de ensino, assessoria jurídica BH",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Areas />
        <Marquee />
        <Metodo />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <Toaster />
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5531996908249"
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg shadow-black/40 hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32.17 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.38-1.67a11.86 11.86 0 0 0 5.66 1.44h.01c6.54 0 11.86-5.32 11.87-11.86a11.78 11.78 0 0 0-3.4-8.43ZM12.05 21.4h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.44 4.43-9.86 9.88-9.86a9.86 9.86 0 0 1 9.87 9.87c0 5.44-4.43 9.86-9.85 9.93Zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.49-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49 2.97 1.28 2.97.85 3.5.8.54-.05 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}
