import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import trabalhista from "@/assets/area-trabalhista.jpg";
import credito from "@/assets/area-credito.jpg";
import escolas from "@/assets/area-escolas.jpg";
import equinos from "@/assets/area-equinos.jpg";

const areas = [
  {
    n: "01",
    title: "Direito Trabalhista",
    sub: "Reclamante & Reclamada",
    desc: "Defesa ativa de direitos trabalhistas para pessoas físicas e estratégia consultiva para empresas reclamadas.",
    img: trabalhista,
  },
  {
    n: "02",
    title: "Recuperação de Crédito",
    sub: "Cobrança extrajudicial e judicial",
    desc: "Recuperação ágil de créditos com abordagem técnica e respeitosa — preservando a relação comercial.",
    img: credito,
  },
  {
    n: "03",
    title: "Instituições de Ensino",
    sub: "Creche a universidade",
    desc: "Assessoria a escolas particulares, cursos livres e profissionalizantes na cobrança de mensalidades e contratos.",
    img: escolas,
  },
  {
    n: "04",
    title: "Universo Equestre",
    sub: "Mangalarga Marchador · Haras",
    desc: "Atuação especializada para criadores, haras e fazendas, com assessoria em gestão e direito de semoventes.",
    img: equinos,
  },
  {
    n: "05",
    title: "Consumidor, Família & Contratos",
    sub: "Demandas civis",
    desc: "Atendimento em direito do consumidor, contratos e direito de família, com a mesma postura estratégica.",
    img: trabalhista,
  },
];

export function Areas() {
  const [active, setActive] = useState(0);

  return (
    <section id="areas" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> 02 · Áreas de atuação
            </div>
            <h2 className="mt-6 font-serif text-5xl sm:text-6xl leading-[0.95] max-w-2xl">
              Cinco frentes,<br />uma <span className="italic text-gold">mesma postura</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
            Passe o cursor — cada área abre uma cena. A atuação muda, a estratégia
            extrajudicial permanece.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Image stage */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={areas[active].img}
                  alt={areas[active].title}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                      {areas[active].sub}
                    </div>
                    <div className="font-serif text-2xl mt-1">{areas[active].title}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-7 order-1 lg:order-2 divide-y divide-border/60 border-y border-border/60">
            {areas.map((a, i) => (
              <button
                key={a.n}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group w-full text-left py-7 px-2 flex items-start gap-6 transition-colors ${
                  active === i ? "text-foreground" : "text-foreground/55 hover:text-foreground"
                }`}
              >
                <span
                  className={`font-serif text-sm pt-2 transition-colors ${
                    active === i ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {a.n}
                </span>
                <div className="flex-1">
                  <div className="font-serif text-3xl sm:text-4xl leading-tight">
                    {a.title}
                  </div>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 text-sm text-muted-foreground max-w-xl"
                      >
                        {a.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <span
                  className={`pt-2 text-gold transition-all ${
                    active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
