import logo from "@/assets/logo-navy.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="LM" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-serif text-xl">Laila Magalhães</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Assessoria Jurídica e Recuperação de Crédito
                </div>
              </div>
            </div>
            <p className="mt-6 font-serif italic text-2xl text-foreground/80 leading-snug max-w-md">
              "Não ficamos de braços cruzados aguardando o prazo. Buscamos o resultado."
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Navegação</div>
            <ul className="space-y-2 text-sm">
              {[
                ["#sobre", "Sobre"],
                ["#areas", "Áreas"],
                ["#metodo", "Método"],
                ["#depoimentos", "Depoimentos"],
                ["#contato", "Contato"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-foreground/70 hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Contato</div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>WhatsApp: (31) 99690-8249</li>
              <li>WhatsApp: (31) 98592-7726</li>
              <li className="break-all">lmassessoriajuridica01@gmail.com</li>
              <li className="pt-2">
                Av. Dr. Cristiano Guimarães, 2166, 3º andar<br />
                Planalto · Belo Horizonte / MG
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} LM Assessoria em Cobrança Ltda · CNPJ
            51.937.929/0001-82
          </div>
          <div>Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
