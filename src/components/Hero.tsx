import heroImg from "@/assets/hero-justice.jpg";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax-like scale */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Interior clássico de tribunal com estátua da justiça"
          className="h-full w-full object-cover object-left scale-x-[-1] md:object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/50 to-navy-deep/40 " />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/50" />
      </motion.div>

      <div className="relative noise" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pt-32 pb-10">
        {/* meta line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold/90"
        >
          <span className="h-px w-10 bg-gold" />
          Belo Horizonte · Atuação nacional
        </motion.div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-[clamp(3.15rem,16vw,4.4rem)] leading-[0.9] tracking-[0] text-foreground sm:text-[clamp(3.8rem,9vw,5.2rem)] sm:leading-[0.95]">
            {["Justiça", "que se", "constrói com"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block italic text-gold"
            >
              estratégia.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed"
          >
            Assessoria jurídica especializada em direito trabalhista, recuperação de crédito e
            atuação consultiva para instituições de ensino e o universo equestre do Mangalarga
            Marchador.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold-soft transition-colors"
            >
              Agendar consulta
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#areas"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-gold transition-colors"
            >
              Áreas de atuação
            </a>
          </motion.div>
        </div>

        {/* Footer of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-border/60 pt-6 text-xs uppercase tracking-[0.25em] text-foreground/60"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Disponível para novos casos
          </div>
          <div className="hidden md:flex items-center gap-8">
            <span>01 — Análise</span>
            <span>02 — Estratégia</span>
            <span>03 — Resultado</span>
          </div>
          <div>Role para baixo ↓</div>
        </motion.div>
      </div>
    </section>
  );
}
