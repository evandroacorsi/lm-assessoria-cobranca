import { useState } from "react";
import { toast } from "sonner";

export function Contato() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const nome = fd.get("nome");
    const assunto = fd.get("assunto");
    const mensagem = fd.get("mensagem");
    const email = fd.get("email");
    const telefone = fd.get("telefone");
    const text = `Olá Laila, sou ${nome}.\nAssunto: ${assunto}\n\n${mensagem}\n\nE-mail: ${email}\nTelefone: ${telefone}`;
    const url = `https://wa.me/5531996908249?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
    setSending(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12 lg:gap-20">
        {/* Left: Info */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> 05 · Contato
            </div>
            <h2 className="mt-6 font-serif text-5xl sm:text-6xl leading-[0.95]">
              Conte seu<br /><span className="italic text-gold">caso</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Resposta direta da Dra. Laila Magalhães. Atendimento em Belo Horizonte
              e online para todo o país.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="https://wa.me/5531996908249"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-y border-border py-5 hover:border-gold transition-colors"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">WhatsApp</div>
                <div className="font-serif text-2xl mt-1">(31) 99690-8249</div>
              </div>
              <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://wa.me/5531985927726"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-border py-5 hover:border-gold transition-colors"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">WhatsApp alternativo</div>
                <div className="font-serif text-2xl mt-1">(31) 98592-7726</div>
              </div>
              <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="mailto:LMASSESSORIAJURIDICA01@GMAIL.COM"
              className="group flex items-center justify-between border-b border-border py-5 hover:border-gold transition-colors"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">E-mail</div>
                <div className="font-serif text-lg mt-1 break-all">
                  lmassessoriajuridica01@gmail.com
                </div>
              </div>
              <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://instagram.com/lmassessoriajuridica_"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-border py-5 hover:border-gold transition-colors"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Instagram</div>
                <div className="font-serif text-2xl mt-1">@lmassessoriajuridica_</div>
              </div>
              <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="text-sm text-muted-foreground leading-relaxed">
            Av. Dr. Cristiano Guimarães, nº 2166, 3º andar<br />
            Bairro Planalto · Belo Horizonte / MG
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 bg-card/40 backdrop-blur border border-border p-8 sm:p-10 space-y-6"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Formulário rápido</div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Nome" name="nome" required />
            <Field label="Telefone" name="telefone" type="tel" required />
            <Field label="E-mail" name="email" type="email" required className="sm:col-span-2" />
            <Field label="Assunto" name="assunto" required className="sm:col-span-2" />
          </div>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Mensagem
            </span>
            <textarea
              required
              name="mensagem"
              rows={5}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 resize-none transition-colors"
              placeholder="Conte brevemente sobre o seu caso..."
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="group w-full inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold-soft transition-colors disabled:opacity-60"
          >
            Enviar pelo WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, sua mensagem será encaminhada diretamente à Dra. Laila Magalhães.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
      />
    </label>
  );
}
