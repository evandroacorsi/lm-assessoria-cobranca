const phrases = [
  "Estratégia extrajudicial",
  "Resposta imediata",
  "Atuação trabalhista",
  "Recuperação de crédito",
  "Mangalarga Marchador",
  "Instituições de ensino",
  "Resultado com afinco",
];

export function Marquee() {
  return (
    <div className="relative border-y border-border/60 bg-navy-deep py-8 overflow-hidden">
      <div className="flex whitespace-nowrap marquee">
        {[...phrases, ...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className="font-serif italic text-4xl sm:text-6xl px-10 text-foreground/90"
          >
            {p}
            <span className="inline-block px-10 text-gold not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
