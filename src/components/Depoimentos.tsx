import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const depoimentos = [
  {
    name: "Em breve",
    role: "Espaço reservado para depoimentos",
    text: "Quer deixar um depoimento? Em breve disponibilizaremos um formulário direto neste espaço para que clientes possam compartilhar suas experiências com a LM Assessoria.",
  },
  {
    name: "Cliente satisfeito",
    role: "Direito Trabalhista",
    text: "A postura ativa e o acompanhamento próximo fizeram toda a diferença. Resultado entregue em prazo que eu não imaginava ser possível.",
  },
  {
    name: "Instituição parceira",
    role: "Educação · Cobrança",
    text: "Profissionalismo e estratégia. A abordagem extrajudicial preservou a relação com nossos alunos sem abrir mão da recuperação dos valores.",
  },
];

export function Depoimentos() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  return (
    <section id="depoimentos" className="relative bg-navy-deep py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> 04 · Depoimentos
            </div>
            <h2 className="mt-6 font-serif text-5xl sm:text-6xl leading-[0.95] max-w-2xl">
              Confiança <span className="italic text-gold">construída</span>
              <br />em cada caso.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => embla?.scrollPrev()}
              aria-label="Anterior"
              className="w-12 h-12 border border-border hover:border-gold hover:text-gold transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              aria-label="Próximo"
              className="w-12 h-12 border border-border hover:border-gold hover:text-gold transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_50%] pr-6"
              >
                <figure className="border border-border/60 bg-card/40 p-8 sm:p-10 h-full backdrop-blur">
                  <div className="font-serif text-6xl text-gold leading-none">“</div>
                  <blockquote className="mt-4 font-serif text-xl sm:text-2xl leading-snug text-foreground/90">
                    {d.text}
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border/60">
                    <div className="font-medium">{d.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                      {d.role}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-2 justify-center">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-px transition-all ${
                selected === i ? "w-12 bg-gold" : "w-6 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
