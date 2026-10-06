import { useState, useEffect, useRef } from 'react';
import { timelineObjects, categories, eras, TimelineObject } from './data/objects';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedObject, setSelectedObject] = useState<TimelineObject | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'eras', 'timeline', 'emotions', 'mechanisms', 'conclusion'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredObjects = selectedEra
    ? timelineObjects.filter(obj => {
        const era = eras.find(e => e.id === selectedEra);
        if (!era) return false;
        const [start, end] = era.years.split('-').map(Number);
        const inEra = obj.year >= start && obj.year <= end;
        const inCategory = filterCategory === 'all' || obj.category === filterCategory;
        return inEra && inCategory;
      })
    : timelineObjects.filter(obj => filterCategory === 'all' || obj.category === filterCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔮</span>
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Oggetti & Affetti
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {[
                { id: 'hero', label: 'Intro' },
                { id: 'eras', label: 'Ere' },
                { id: 'timeline', label: 'Timeline' },
                { id: 'emotions', label: 'Emozioni' },
                { id: 'mechanisms', label: 'Meccanismi' },
                { id: 'conclusion', label: 'Conclusioni' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/5">
            {[
              { id: 'hero', label: 'Intro' },
              { id: 'eras', label: 'Ere' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'emotions', label: 'Emozioni' },
              { id: 'mechanisms', label: 'Meccanismi' },
              { id: 'conclusion', label: 'Conclusioni' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-gray-950 to-gray-950"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Ricerca sul Design e gli Oggetti — 1991-2026
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Oggetti & Affetti
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-light">
              nella Globalizzazione Digitale
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Come la globalizzazione ha trasformato il rapporto emotivo, percettivo e affettivo 
            tra persone e oggetti nel design. Dalla nascita del World Wide Web all'era dell'AI generativa: 
            un viaggio attraverso <span className="text-cyan-300">35 anni</span> di oggetti che hanno ridefinito 
            chi siamo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('eras')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
            >
              Esplora la Timeline
            </button>
            <button
              onClick={() => scrollTo('emotions')}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Rapporto Emotivo
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { num: '40+', label: 'Oggetti analizzati' },
              { num: '7', label: 'Ere storiche' },
              { num: '35', label: 'Anni di storia' },
              { num: '5', label: 'Categorie' },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold text-cyan-300">{stat.num}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Eras Section */}
      <section id="eras" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Le 7 Ere
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ogni era porta con sé nuovi oggetti, nuove emozioni e nuove forme di attaccamento.
              Clicca su un'era per esplorare gli oggetti di quel periodo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eras.map((era, index) => (
              <button
                key={era.id}
                onClick={() => {
                  setSelectedEra(selectedEra === era.id ? null : era.id);
                  scrollTo('timeline');
                }}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                  selectedEra === era.id
                    ? 'border-cyan-500/50 bg-cyan-500/10 scale-[1.02]'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${era.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-mono">{era.years}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">{index + 1}/7</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{era.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{era.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Tema:</span>
                    <span className="text-xs text-cyan-400 font-medium">{era.theme}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-4" ref={timelineRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Timeline degli Oggetti
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {selectedEra
                ? `Oggetti dell'era: ${eras.find(e => e.id === selectedEra)?.title}`
                : 'Tutti gli oggetti dalla nascita di Internet a oggi'
              }
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {selectedEra && (
              <button
                onClick={() => setSelectedEra(null)}
                className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm hover:bg-red-500/20 transition-all"
              >
                ✕ Mostra tutti
              </button>
            )}
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filterCategory === 'all'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
              }`}
            >
              Tutti
            </button>
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setFilterCategory(key)}
                className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  filterCategory === key
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${cat.color}`}></span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Timeline Items */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-rose-500/50"></div>
            <div className="space-y-8">
              {filteredObjects.map((obj, index) => (
                <div
                  key={`${obj.year}-${obj.name}`}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-950 border-2 border-cyan-500 z-10 mt-6"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <button
                      onClick={() => setSelectedObject(selectedObject?.name === obj.name ? null : obj)}
                      className="w-full text-left group"
                    >
                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{obj.icon}</span>
                          <div>
                            <span className="text-xs font-mono text-cyan-400">{obj.year}</span>
                            <h3 className="text-lg font-bold group-hover:text-cyan-300 transition-colors">{obj.name}</h3>
                          </div>
                          <span className={`ml-auto text-xs px-2 py-1 rounded-full ${categories[obj.category].color} bg-opacity-20 ${categories[obj.category].textColor}`}>
                            {categories[obj.category].label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{obj.description}</p>
                        
                        {selectedObject?.name === obj.name && (
                          <div className="mt-4 space-y-3 animate-fadeIn">
                            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                              <div className="text-xs text-purple-400 font-semibold mb-1">💜 Impatto Emotivo</div>
                              <p className="text-sm text-gray-300">{obj.emotionalImpact}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                              <div className="text-xs text-amber-400 font-semibold mb-1">🎨 Nota di Design</div>
                              <p className="text-sm text-gray-300">{obj.designNote}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emotions Section */}
      <section id="emotions" className="py-24 px-4 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Il Rapporto Emotivo
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Come è cambiato il nostro modo di rapportarci con gli oggetti e che tipo di affezioni gli diamo.
              La globalizzazione ha ridefinito il legame tra persone e cose.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Before Internet */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📻</span>
                <h3 className="text-2xl font-bold text-amber-300">Prima di Internet</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Oggetto come durata', desc: 'Gli oggetti duravano decenni. Si riparavano, si ereditavano, si amavano nel tempo.' },
                  { title: 'Affetto per possesso', desc: 'L\'attaccamento nasceva dal possesso esclusivo e dall\'uso prolungato nel tempo.' },
                  { title: 'Rituali materiali', desc: 'Accendere la radio, girare il vinile, sviluppare la pellicola. Ogni azione era un rito.' },
                  { title: 'Oggetto come memoria', desc: 'Gli oggetti custodivano ricordi: una lettera, una foto, un regalo. Erano archivi emotivi.' },
                  { title: 'Identità locale', desc: 'Gli oggetti riflettevano la cultura locale, il contesto geografico e sociale.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-amber-400 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-200">{item.title}:</span>
                      <span className="text-gray-400 ml-1">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After Internet */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📱</span>
                <h3 className="text-2xl font-bold text-cyan-300">Nell'Era Digitale</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Oggetto come servizio', desc: 'Non possediamo più, accediamo. Spotify, Netflix, cloud. L\'affetto si trasferisce all\'esperienza.' },
                  { title: 'Affetto per personalizzazione', desc: 'L\'attaccamento nasce dalla customizzazione: il nostro profilo, le nostre playlist, il nostro feed.' },
                  { title: 'Rituali digitali', desc: 'Sbloccare il telefono, scrollare, notifiche. Nuovi riti che strutturano la giornata.' },
                  { title: 'Oggetto come estensione', desc: 'Lo smartphone è un\'estensione del corpo. La perdita genera ansia reale (nomofobia).' },
                  { title: 'Identità globale', desc: 'Gli oggetti sono gli stessi in tutto il mondo. Identità transnazionale e omogeneizzazione culturale.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-200">{item.title}:</span>
                      <span className="text-gray-400 ml-1">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emotional Evolution */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                L'Evoluzione del Legame Affettivo
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-blue-500/5 to-transparent border border-blue-500/10">
                <div className="text-4xl mb-4">🔗</div>
                <h4 className="font-bold text-blue-300 mb-2">Da Oggetto a Esperienza</h4>
                <p className="text-sm text-gray-400">
                  Non amiamo più l'oggetto in sé, ma l'esperienza che ci offre. 
                  La musica non è il vinile, è il momento. La foto non è la stampa, è il ricordo condiviso.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-purple-500/5 to-transparent border border-purple-500/10">
                <div className="text-4xl mb-4">🪞</div>
                <h4 className="font-bold text-purple-300 mb-2">Da Strumento a Identità</h4>
                <p className="text-sm text-gray-400">
                  Gli oggetti digitali sono diventati specchio del sé. 
                  Lo smartphone, i social, le playlist: tutto dice chi siamo (o chi vogliamo essere).
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-rose-500/5 to-transparent border border-rose-500/10">
                <div className="text-4xl mb-4">💔</div>
                <h4 className="font-bold text-rose-300 mb-2">Da Permanenza a Effimero</h4>
                <p className="text-sm text-gray-400">
                  L'obsolescenza programmata e l'aggiornamento costante rendono gli oggetti temporanei. 
                  L'affetto si accorcia, il ciclo di attaccamento-detachment si accelera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanisms Section */}
      <section id="mechanisms" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Meccanismi di Affezione
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Quali sono oggi i meccanismi attraverso cui un oggetto può ancora generare 
              o recuperare quel legame emotivo con le persone?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: '🎭',
                title: 'Narrazione e Storytelling',
                desc: 'L\'oggetto racconta una storia. Brands come Patagonia o Apple costruiscono narrazioni che trasformano prodotti in miti. L\'affetto nasce dalla storia che l\'oggetto incarna.',
                example: 'Esempio: Le sneaker limited edition non sono scarpe, sono capitoli di una storia culturale.',
                color: 'from-rose-500/10 to-pink-500/10',
                border: 'border-rose-500/20',
              },
              {
                icon: '🤲',
                title: 'Tattilità e Sensorialità',
                desc: 'In un mondo dematerializzato, il corpo cerca contatto. Il design tattile (la rotella dell\'iPod, il click del MacBook) crea memoria muscolare e attaccamento fisico.',
                example: 'Esempio: Il successo del vinile è il ritorno al rituale tattile della musica.',
                color: 'from-amber-500/10 to-yellow-500/10',
                border: 'border-amber-500/20',
              },
              {
                icon: '🧬',
                title: 'Personalizzazione e Identità',
                desc: 'L\'oggetto diventa unico quando lo customizziamo. Cover, widget, playlist, profili: più investiamo tempo, più l\'oggetto diventa "nostro".',
                example: 'Esempio: La home screen dello smartphone è un giardino personale, unico al mondo.',
                color: 'from-cyan-500/10 to-blue-500/10',
                border: 'border-cyan-500/20',
              },
              {
                icon: '👥',
                title: 'Comunità e Appartenenza',
                desc: 'L\'oggetto connette a una tribù. Possedere certi oggetti significa appartenere a un gruppo. Il design crea linguaggi visivi riconoscibili.',
                example: 'Esempio: I possessori di Tesla, i fan di Nintendo, la community di Mechanical Keyboards.',
                color: 'from-green-500/10 to-emerald-500/10',
                border: 'border-green-500/20',
              },
              {
                icon: '🔄',
                title: 'Rituali e Abitudini',
                desc: 'L\'oggetto si lega ai rituali quotidiani. Il caffè nella moka, la playlist della mattina, il libro sul comodino. Il design che si inserisce nei rituali diventa insostituibile.',
                example: 'Esempio: L\'Alexa che ci dà il buongiorno diventa parte del risveglio.',
                color: 'from-purple-500/10 to-indigo-500/10',
                border: 'border-purple-500/20',
              },
              {
                icon: '🌱',
                title: 'Invecchiamento e Patina',
                desc: 'Gli oggetti che invecchiano bene creano legame. La patina del tempo, i segni d\'uso, le riparazioni: tutto racconta una storia condivisa.',
                example: 'Esempio: Il denim che si consuma, il cuoio che si ammorbidisce, il legno che si scurisce.',
                color: 'from-orange-500/10 to-red-500/10',
                border: 'border-orange-500/20',
              },
            ].map((mech, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br ${mech.color} border ${mech.border} hover:scale-[1.02] transition-transform`}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{mech.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{mech.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{mech.desc}</p>
                    <p className="text-xs text-gray-500 italic">{mech.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Design Principles */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/5">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Principi di Design per il Legame Affettivo
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: '01', title: 'Design Emotivo', desc: 'Don Norman: la bellezza non è superficiale, è funzionale all\'affetto.' },
                { num: '02', title: 'Design Tattile', desc: 'Il corpo ricorda ciò che la mente dimentica. Texture, peso, suono.' },
                { num: '03', title: 'Design Narrativo', desc: 'Ogni oggetto dovrebbe avere una storia da raccontare e da ascoltare.' },
                { num: '04', title: 'Design Etico', desc: 'La sostenibilità crea affetto: oggetti che durano sono oggetti amati.' },
                { num: '05', title: 'Design Partecipativo', desc: 'L\'utente co-crea l\'oggetto. Più partecipa, più si affeziona.' },
                { num: '06', title: 'Design Sensoriale', desc: 'Coinvolgere tutti i sensi, non solo la vista. Suono, odore, tatto.' },
                { num: '07', title: 'Design Imperfetto', desc: 'Wabi-sabi: l\'imperfezione crea unicità e quindi attaccamento.' },
                { num: '08', title: 'Design Relazionale', desc: 'L\'oggetto come ponte tra persone, non come fine.' },
              ].map((principle, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <span className="text-emerald-400 font-mono text-xs">{principle.num}</span>
                  <h4 className="font-bold text-sm text-white mt-1 mb-1">{principle.title}</h4>
                  <p className="text-xs text-gray-500">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Globalization Impact */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-950 via-indigo-950/10 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Globalizzazione e Oggetti
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Come la globalizzazione ha trasformato la natura stessa degli oggetti 
              e il nostro rapporto con essi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-indigo-300 flex items-center gap-2">
                <span>🌍</span> Omogeneizzazione
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Gli stessi oggetti in tutto il mondo: iPhone a Milano come a Tokyo.</p>
                <p className="text-sm text-gray-400">Perdita delle specificità culturali negli oggetti quotidiani.</p>
                <p className="text-sm text-gray-400">Il design universale di Apple come paradigma globale.</p>
                <p className="text-sm text-gray-400">Ma anche: nascita di un linguaggio visivo condiviso.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2">
                <span>⚡</span> Accelerazione
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Cicli di vita degli oggetti sempre più brevi.</p>
                <p className="text-sm text-gray-400">Obsolescenza programmata e culturale.</p>
                <p className="text-sm text-gray-400">Impossibilità di affezionarsi a ciò che cambia ogni anno.</p>
                <p className="text-sm text-gray-400">La nostalgia come reazione: vintage, retrò, analogico.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                <span>💫</span> Dematerializzazione
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Da oggetto fisico a servizio digitale.</p>
                <p className="text-sm text-gray-400">La musica, i film, i libri: tutto diventa flusso.</p>
                <p className="text-sm text-gray-400">L\'affetto si trasferisce dall\'oggetto all\'accesso.</p>
                <p className="text-sm text-gray-400">Ma il corpo desidera ancora il peso, il tatto, la presenza.</p>
              </div>
            </div>
          </div>

          {/* Key Transformations */}
          <div className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-200">Trasformazioni Chiave del Rapporto Oggetto-Persona</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Aspetto</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Prima (Pre-Internet)</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Dopo (Era Digitale)</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Oggi (2024-2026)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-cyan-300">Possesso</td>
                    <td className="py-3 px-4">Proprietà esclusiva</td>
                    <td className="py-3 px-4">Accesso e abbonamento</td>
                    <td className="py-3 px-4">Delega all'AI agent</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-cyan-300">Durata</td>
                    <td className="py-3 px-4">Decenni</td>
                    <td className="py-3 px-4">2-3 anni</td>
                    <td className="py-3 px-4">Aggiornamenti continui</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-cyan-300">Sensorialità</td>
                    <td className="py-3 px-4">Multi-sensoriale</td>
                    <td className="py-3 px-4">Visivo-tattile (schermo)</td>
                    <td className="py-3 px-4">Vocale/spaziale/neurale</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-cyan-300">Identità</td>
                    <td className="py-3 px-4">Locale, culturale</td>
                    <td className="py-3 px-4">Globale, tribale</td>
                    <td className="py-3 px-4">Algoritmica, generata</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-cyan-300">Affetto</td>
                    <td className="py-3 px-4">Legame profondo e duraturo</td>
                    <td className="py-3 px-4">Attaccamento funzionale</td>
                    <td className="py-3 px-4">Relazione parasociale con AI</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-cyan-300">Memoria</td>
                    <td className="py-3 px-4">Oggetto come archivio</td>
                    <td className="py-3 px-4">Cloud e foto digitali</td>
                    <td className="py-3 px-4">AI che ricorda per noi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                Conclusioni
              </span>
            </h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-rose-500/5 to-amber-500/5 border border-rose-500/10 mb-8">
              <h3 className="text-xl font-bold text-rose-300 mb-4">Il Paradosso Contemporaneo</h3>
              <p className="text-gray-300 leading-relaxed">
                Viviamo in un'era di abbondanza di oggetti digitali e di povertà di attaccamento. 
                Abbiamo più oggetti che mai, ma pochi di questi generano un legame profondo. 
                La globalizzazione ha democratizzato l'accesso ma ha eroso la specificità. 
                Ogni oggetto è disponibile ovunque, per tutti, e proprio per questo perde la capacità 
                di diventare <em className="text-rose-300">unico</em> per qualcuno.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border border-amber-500/10 mb-8">
              <h3 className="text-xl font-bold text-amber-300 mb-4">La Via del Design Affettivo</h3>
              <p className="text-gray-300 leading-relaxed">
                Il design del futuro deve recuperare ciò che la digitalizzazione ha tolto: 
                la <strong className="text-white">sensorialità</strong>, la <strong className="text-white">narrativa</strong>, 
                la <strong className="text-white">imperfezione</strong>, la <strong className="text-white">durata</strong>. 
                Non si tratta di rifiutare la tecnologia, ma di progettare oggetti — fisici o digitali — 
                che meritino il nostro affetto. Che invecchino con noi. Che raccontino storie. 
                Che ci connettano agli altri, non ci isolino.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/10">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Domande Aperte per il Futuro</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span>Possono gli oggetti AI generativi meritare il nostro affetto?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span>Come progettare per la durata in un'era di obsolescenza?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span>Qual è il ruolo del corpo nell'era delle interfacce neurali?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span>Come recuperare la specificità culturale nel design globale?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <span>L'oggetto del futuro sarà ancora un "oggetto" o sarà un'esperienza?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-2">
            Oggetti & Affetti — Ricerca sul Design nella Globalizzazione Digitale (1991-2026)
          </p>
          <p className="text-gray-600 text-xs">
            Un'esplorazione del rapporto emotivo tra persone e oggetti nell'era di Internet
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
