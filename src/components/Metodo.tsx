import { motion } from "motion/react";

const steps = [
  {
    n: "I",
    title: "Escuta atenta",
    desc: "Mapeamos a demanda em detalhe. Cada caso entra com nome, contexto e objetivo claro antes de qualquer passo jurídico.",
  },
  {
    n: "II",
    title: "Estratégia sob medida",
    desc: "Definimos a frente extrajudicial e a tese judicial em paralelo — buscando o caminho mais curto até o resultado.",
  },
  {
    n: "III",
    title: "Ação imediata",
    desc: "Não aguardamos o prazo correr. Atuamos antes, durante e depois, mantendo o cliente informado em cada movimento.",
  },
  {
    n: "IV",
    title: "Resultado e acompanhamento",
    desc: "Entrega do resultado com prestação de contas transparente e disponibilidade para próximos passos.",
  },
];

export function Metodo() {
  return (
    <section id="metodo" className="relative bg-background py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-gold opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" /> 03 · Método <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="mt-6 font-serif text-5xl sm:text-6xl leading-[0.95]">
            Como o seu caso<br /> <span className="italic text-gold">caminha</span> conosco.
          </h2>
        </div>

        <div className="relative">
          {/* center line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-16 items-center"
                >
                  <div className={`${left ? "md:order-1 md:text-right" : "md:order-2"} `}>
                    <div className="font-serif text-7xl sm:text-8xl text-gold/80 leading-none">
                      {s.n}
                    </div>
                    <h3 className="mt-4 font-serif text-3xl sm:text-4xl">{s.title}</h3>
                  </div>
                  <div className={`${left ? "md:order-2" : "md:order-1 md:text-right"}`}>
                    <p className="text-foreground/75 leading-relaxed max-w-md md:inline-block">
                      {s.desc}
                    </p>
                  </div>
                  {/* dot */}
                  <span className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-gold ring-8 ring-background" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
