import { motion } from "motion/react";

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-navy-deep py-28 sm:py-36">
      {/* Floating vertical marquee word */}
      <div className="pointer-events-none absolute -right-10 top-0 bottom-0 hidden lg:flex items-center select-none">
        <div
          className="font-serif italic text-gold/[0.06] leading-none"
          style={{ fontSize: "22rem", writingMode: "vertical-rl" }}
        >
          fides
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> 01 · Quem somos
            </div>
            <h2 className="mt-6 font-serif text-5xl sm:text-6xl leading-[0.95]">
              Atuação <span className="italic text-gold">especializada</span>
              <br />e transparente.
            </h2>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="font-serif text-2xl sm:text-3xl leading-snug text-foreground/90"
          >
            A LM Assessoria nasce da inquietação de não esperar de braços cruzados.
            Combinamos rigor técnico com uma postura{" "}
            <span className="italic text-gold">extrajudicial ativa</span> — antecipando
            movimentos, criando estratégias sob medida e buscando, com afinco, o
            resultado esperado pelo cliente.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/60">
            {[
              { k: "Imediatidade", v: "Resposta ágil e prazo curto entre contato e ação." },
              { k: "Sob medida", v: "Estratégia individual para cada demanda — sem fórmula pronta." },
              { k: "Resultado", v: "Postura ativa antes, durante e depois do processo." },
            ].map((item, i) => (
              <motion.div
                key={item.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="font-serif text-3xl text-gold">0{i + 1}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider">{item.k}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
