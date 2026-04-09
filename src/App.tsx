import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Lock, ArrowRight, Shield, MapPin, CheckCircle2, TrendingUp, Users, Globe } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = [
    "Quinta%20do%20Barco3.jpeg",
    "Quinta%20do%20Barco21.jpeg",
    "Quinta%20do%20Barco18.jpeg",
    "Quinta%20do%20Barco20.jpeg",
    "Quinta%20do%20Barco22.jpeg"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds for a slow, luxurious feel
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Quinta do Barco"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#050505]"></div>
      </div>

      {/* Top Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <img 
          src="https://consultorimobiliarioprime.pt/imoveis/CB_PRIME_VERT_SSTK_FRAMED.png" 
          alt="Coldwell Banker Prime" 
          className="h-20 opacity-90"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70"
        >
          <Lock size={14} />
          <span>Plano de Lançamento e Comercialização</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight mb-8 text-white"
        >
          Quinta do Barco
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-lg md:text-2xl text-white/70 font-light tracking-wide max-w-3xl"
        >
          Mais do que uma propriedade, um legado com escala internacional.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Descobrir</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SingularAssetSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Posicionamento</h2>
          <h3 className="serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Um Ativo Singular no <br />
            <span className="italic text-white/60">Mercado Ibérico.</span>
          </h3>
          <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
            <p>
              A Quinta do Barco não é apenas um espaço; é a convergência irrepetível de património histórico, dimensão territorial e potencial económico.
            </p>
            <p>
              Com uma forte componente de lifestyle e investimento, este ativo posiciona-se no topo da exclusividade em Portugal.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-12">
            {[
              { title: "Legado", desc: "Senhorial" },
              { title: "Frente", desc: "Ribeirinha" },
              { title: "Terroir", desc: "de Excelência" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-xs uppercase tracking-widest text-white/50 mb-2">{item.title}</div>
                <div className="text-sm text-white/90">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 p-8 border border-white/10">
            <h4 className="text-sm uppercase tracking-widest text-white/80 mb-4">O Imperativo do Posicionamento</h4>
            <p className="italic text-white/60 mb-6">"O mercado premium mudou. A procura internacional por propriedades distintivas e ativos tangíveis está num máximo histórico."</p>
            <ul className="space-y-4 text-sm text-white/70">
              <li><strong className="text-white font-normal">Fuga para a qualidade:</strong> Investidores procuram refúgios de estilo de vida premium com segurança de capital.</li>
              <li><strong className="text-white font-normal">Escassez absoluta:</strong> Propriedades com esta dimensão, herança e acesso à água são virtualmente inexistentes.</li>
              <li><strong className="text-white font-normal">Necessidade de narrativa:</strong> Ativos desta raridade não respondem ao marketing tradicional; exigem uma curadoria de marca.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative aspect-[3/4] w-full"
        >
          <img 
            src="Quinta%20do%20Barco19.jpeg" 
            alt="Quinta do Barco Detalhe" 
            className="w-full h-full object-cover rounded-sm opacity-90 hover:opacity-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 border border-white/10 m-4 rounded-sm pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ScaleSection = () => {
  const stats = [
    { value: "27", unit: "HA", title: "Área Total", desc: "Domínio e privacidade absolutos" },
    { value: "15", unit: "HA", title: "Vinha Operacional", desc: "Com sistema de rega integrado" },
    { value: "2000", unit: "M", title: "Frente de Rio", desc: "Margem exclusiva sobre o Cávado" },
    { value: "XIX", unit: "SÉC", title: "Herança", desc: "Arquitetónica preservada" },
    { value: "7", unit: "KM", title: "Distância", desc: "Do centro de Barcelos" },
    { value: "9.9", unit: "M€", title: "Posicionamento", desc: "Premium (valor de referência)" }
  ];

  return (
    <section className="py-32 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Dimensão</h2>
          <h3 className="serif text-4xl md:text-5xl lg:text-6xl font-light">A Escala do Legado</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border border-white/10 p-8 md:p-10 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="text-xs uppercase tracking-widest text-white/40 mb-6">{stat.title}</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="serif text-6xl font-light">{stat.value}</span>
                <span className="text-sm tracking-widest text-white/50">{stat.unit}</span>
              </div>
              <p className="text-sm text-white/60 font-light leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuationSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="order-2 lg:order-1 relative aspect-square w-full max-w-md mx-auto lg:mx-0"
        >
          <img 
            src="Quinta%20do%20Barco30.jpeg" 
            alt="Avaliação" 
            className="absolute inset-0 w-full h-full object-cover rounded-full opacity-40"
          />
          <div className="absolute inset-0 border border-white/20 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-4 border border-white/10 rounded-full"></div>
            <div className="absolute inset-8 border border-white/5 rounded-full"></div>
            <div className="text-center relative z-10">
              <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Posicionamento</div>
              <div className="serif text-5xl md:text-6xl font-light">€9.9M</div>
              <div className="text-xs tracking-widest text-white/30 mt-4">VALOR DE REFERÊNCIA</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Sustentação</h2>
          <h3 className="serif text-4xl md:text-5xl font-light leading-tight mb-8">
            O Rigor da Avaliação Patrimonial.
          </h3>
          <div className="space-y-6 text-white/70 font-light leading-relaxed">
            <p>
              O posicionamento de €9.9M não é arbitrário; é uma decisão estratégica sustentada por certificação CMVM.
            </p>
            <div className="space-y-4 my-8">
              <div className="border-l border-white/20 pl-4">
                <div className="text-white font-normal">Método comparativo: €10.010.000</div>
                <div className="text-sm text-white/50">Validação pelo mercado de ativos semelhantes</div>
              </div>
              <div className="border-l border-white/20 pl-4">
                <div className="text-white font-normal">Método do custo de reposição: €9.994.253</div>
                <div className="text-sm text-white/50">Custo de recriação da infraestrutura</div>
              </div>
              <div className="border-l border-white/20 pl-4">
                <div className="text-white font-normal">Método do rendimento: €9.960.000</div>
                <div className="text-sm text-white/50">Potencial de geração de cash-flow</div>
              </div>
            </div>
            <p className="text-white/90 italic">
              Conclusão: A convergência técnica garante robustez negocial e elimina margem para desvalorização especulativa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ValueAndBuyerSection = () => {
  return (
    <section className="py-32 relative bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Trindade de Valor */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Proposta de Valor</h2>
            <h3 className="serif text-4xl md:text-5xl font-light">A Trindade de Valor</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Produção Vinícola", desc: "15 hectares de vinha operacional com potencial de rendimento imediato e valorização de marca." },
              { title: "Eventos e Turismo", desc: "Infraestruturas senhoriais perfeitas para casamentos destino e hospitalidade premium." },
              { title: "Estilo de Vida Exclusivo", desc: "Piscina, natureza e 2000m de frente de rio criam um refúgio privado único." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 p-8 border border-white/10"
              >
                <h4 className="text-lg font-normal text-white mb-4">{item.title}</h4>
                <p className="text-white/60 font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mapeamento do Comprador */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">A Arquitetura da Procura</h2>
            <h3 className="serif text-4xl md:text-5xl font-light">Mapeamento do Comprador Ideal</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Residência Secundária Premium", desc: "Procura exclusividade absoluta, privacidade e um troféu patrimonial." },
              { title: "Operador de Eventos / Turismo", desc: "Foco no potencial de hospitalidade de luxo e destination weddings." },
              { title: "Investidor Internacional", desc: "Procura diversificação de portfólio num mercado seguro com componente lifestyle." },
              { title: "Family Office / Fundos", desc: "Foco na preservação de capital a longo prazo e rendimento da operação vinícola." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-white/20 pt-6"
              >
                <h4 className="text-sm font-normal text-white mb-3">{item.title}</h4>
                <p className="text-white/50 font-light text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const StrategyPhasesSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">O Plano</h2>
        <h3 className="serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
          Não listamos propriedades.<br />Lançamos legados.
        </h3>
        <p className="text-white/60 font-light max-w-2xl mx-auto">
          A Quinta do Barco exige mais do que presença num catálogo. Exige um lançamento. O preço, a narrativa visual e os canais de distribuição devem refletir a raridade e o prestígio da propriedade.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h4 className="text-xl font-normal mb-6">A Exclusividade como Proteção de Valor</h4>
          <p className="text-white/60 font-light mb-8">No mercado de luxo, a representação exclusiva não é uma limitação técnica; é o principal mecanismo de defesa do ativo.</p>
          <ul className="space-y-4 text-sm text-white/80">
            <li><strong>Controlo da narrativa:</strong> Uma única voz garante coerência.</li>
            <li><strong>Poder negocial:</strong> Concentração de interesse evita dispersão.</li>
            <li><strong>Coerência de marca:</strong> Associação ao standard premium Coldwell Banker.</li>
            <li><strong>Exposição coordenada:</strong> Lançamento estruturado sem saturação.</li>
          </ul>
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white/5 p-8 border border-white/10">
          <h4 className="text-xl font-normal mb-6">O Paradoxo da Dispersão</h4>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Mercado Aberto</div>
              <ul className="space-y-2 text-sm text-white/60">
                <li>- Ruído</li>
                <li>- Dados inconsistentes</li>
                <li>- Perceção de desespero</li>
                <li>- Desvalorização</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Exclusivo</div>
              <ul className="space-y-2 text-sm text-white/90">
                <li>+ Gestão centralizada</li>
                <li>+ Criação de escassez</li>
                <li>+ Controlo de perceção</li>
                <li>+ Qualificação rigorosa</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-white font-medium">
            Resultado: Proteção do preço.
          </div>
        </motion.div>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {[
          { phase: "Fase 1", title: "Preparação Premium e Curadoria", desc: "A apresentação de um ativo desta dimensão não admite amadorismo.", items: ["Vídeo cinematográfico e drone", "Fotografia editorial", "Dossier comercial confidencial", "Landing page dedicada"] },
          { phase: "Fase 2", title: "Círculo Fechado (Off-Market)", desc: "Antes da exposição pública, cria-se desejo através da inacessibilidade.", items: ["Acesso antecipado a UHNWIs", "Base de dados qualificada", "Partilha sob NDA", "Visitas privadas com curadoria"] },
          { phase: "Fase 3", title: "A Estreia Global", desc: "Transição do mercado privado para o palco global.", items: ["Integração em portais de luxo", "Destaque na rede Coldwell Banker", "Relações públicas", "Materiais de alta conversão"] },
          { phase: "Fase 4", title: "Amplificação Internacional", desc: "O comprador pode estar em qualquer parte do mundo — a estratégia também.", items: ["Rede global Coldwell Banker", "Ecossistema Global Luxury", "Roadshows e parcerias"] }
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-[#050505] text-white/50 group-[.is-active]:text-white group-[.is-active]:border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#050505]">
              <span className="text-xs">{i+1}</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border border-white/10 bg-white/[0.02]">
              <div className="text-xs uppercase tracking-widest text-white/40 mb-2">{item.phase}</div>
              <h4 className="text-lg font-normal text-white mb-2">{item.title}</h4>
              <p className="text-sm text-white/60 mb-4">{item.desc}</p>
              <ul className="text-xs text-white/50 space-y-1">
                {item.items.map((li, idx) => <li key={idx}>• {li}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExecutionSection = () => {
  return (
    <section className="py-32 relative bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="border border-white/10 p-8">
            <Globe className="w-6 h-6 text-white/40 mb-6" />
            <h4 className="text-sm uppercase tracking-widest text-white mb-4">Aquisição de Precisão</h4>
            <p className="text-xs text-white/60 mb-4">Não volume de cliques, mas leads altamente qualificadas.</p>
            <ul className="text-xs text-white/50 space-y-2">
              <li>• Meta e Google Ads hiper segmentados</li>
              <li>• Retargeting de perfis premium</li>
              <li>• Direcionamento para funil</li>
            </ul>
          </div>

          <div className="border border-white/10 p-8">
            <Users className="w-6 h-6 text-white/40 mb-6" />
            <h4 className="text-sm uppercase tracking-widest text-white mb-4">Construção de Desejo</h4>
            <p className="text-xs text-white/60 mb-4">Estratégia contínua para prova visual, reputação e envolvimento.</p>
            <ul className="text-xs text-white/50 space-y-2">
              <li>• Drone (escala)</li>
              <li>• Detalhes da vinha e Lifestyle</li>
              <li>• Bastidores do legado</li>
            </ul>
          </div>

          <div className="border border-white/10 p-8">
            <TrendingUp className="w-6 h-6 text-white/40 mb-6" />
            <h4 className="text-sm uppercase tracking-widest text-white mb-4">Ecossistema de Influência</h4>
            <p className="text-xs text-white/60 mb-4">As grandes transações nascem de relações.</p>
            <ul className="text-xs text-white/50 space-y-2">
              <li>• Private banking & Wealth managers</li>
              <li>• Advogados internacionais</li>
              <li>• Brokers premium & Promotores</li>
            </ul>
          </div>

          <div className="border border-white/10 p-8">
            <CheckCircle2 className="w-6 h-6 text-white/40 mb-6" />
            <h4 className="text-sm uppercase tracking-widest text-white mb-4">Controlo e Reporting</h4>
            <ul className="text-xs text-white/50 space-y-4">
              <li><strong className="text-white/80">Gatekeeping:</strong> Filtragem rigorosa e prova de fundos.</li>
              <li><strong className="text-white/80">Controlo:</strong> Proteção da narrativa.</li>
              <li><strong className="text-white/80">Transparência:</strong> Reporting contínuo.</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 bg-white/5 border border-white/10 p-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm uppercase tracking-widest text-white/50">Matriz de Execução</div>
          <div className="flex flex-wrap gap-6 text-xs text-white/80">
            <div><strong className="text-white">Sem 1-2:</strong> Preparação</div>
            <div><strong className="text-white">Sem 3-4:</strong> Off-market</div>
            <div><strong className="text-white">Sem 5:</strong> Lançamento</div>
            <div><strong className="text-white">Seguintes:</strong> Amplificação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="Quinta%20do%20Barco40.jpeg" 
          alt="Quinta do Barco" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#050505]/80"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Shield className="w-8 h-8 text-white/30 mx-auto mb-8" strokeWidth={1} />
        <h2 className="serif text-4xl md:text-5xl font-light mb-6">O Seu Legado, A Nossa Missão</h2>
        <p className="text-white/60 font-light mb-12 max-w-xl mx-auto">
          A Quinta do Barco é um ativo irrepetível. O plano, a rede e a marca foram desenhados para proteger, posicionar e transacionar propriedades desta natureza ao mais alto nível.
        </p>
        
        <form className="space-y-6 max-w-md mx-auto text-left bg-black/40 p-8 border border-white/10 backdrop-blur-md" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Nome do Principal / Representante</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white/60 transition-colors font-light"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Email Corporativo</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white/60 transition-colors font-light"
            />
          </div>
          <button className="w-full mt-8 border border-white/30 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3">
            <span>Solicitar Dossier Confidencial</span>
            <ArrowRight size={14} />
          </button>
        </form>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center">
          <img 
            src="https://consultorimobiliarioprime.pt/imoveis/CB_PRIME_VERT_SSTK_FRAMED.png" 
            alt="Coldwell Banker Prime" 
            className="h-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-6"
            referrerPolicy="no-referrer"
          />
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            Global Luxury Division
          </p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white/20">
      <HeroSection />
      <SingularAssetSection />
      <ScaleSection />
      <ValuationSection />
      <ValueAndBuyerSection />
      <StrategyPhasesSection />
      <ExecutionSection />
      <ContactSection />
    </div>
  );
}
