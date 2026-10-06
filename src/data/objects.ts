export interface TimelineObject {
  year: number;
  name: string;
  category: 'hardware' | 'software' | 'app' | 'digital' | 'physical';
  description: string;
  emotionalImpact: string;
  designNote: string;
  icon: string;
}

export const timelineObjects: TimelineObject[] = [
  // 1991-1995: La nascita del web
  { year: 1991, name: 'World Wide Web', category: 'digital', description: 'Tim Berners-Lee pubblica il primo sito web. Nasce il concetto di ipertesto accessibile a tutti.', emotionalImpact: 'Curiosità, meraviglia per un mondo senza confini fisici', designNote: 'Design minimale, solo testo. L\'oggetto è l\'informazione stessa.', icon: '🌐' },
  { year: 1993, name: 'Netscape Navigator', category: 'software', description: 'Il primo browser grafico diffuso. Internet diventa visivo e navigabile.', emotionalImpact: 'Senso di esplorazione, scoperta di nuovi territori digitali', designNote: 'Interfaccia a finestre che rende il web accessibile ai non tecnici.', icon: '🧭' },
  { year: 1995, name: 'Amazon', category: 'app', description: 'Nasce come libreria online. L\'oggetto-libro si dematerializza nel catalogo digitale.', emotionalImpact: 'Fiducia nel comprare senza vedere, distanza emotiva dall\'oggetto fisico', designNote: 'Design centrato sul prodotto: copertina, recensione, prezzo. Mediazione digitale dell\'oggetto.', icon: '📦' },
  { year: 1995, name: 'eBay', category: 'app', description: 'Aste online. Oggetti usati, collezionabili, vintage trovano nuova vita.', emotionalImpact: 'Nostalgia, caccia al tesoro, attaccamento a oggetti con storia', designNote: 'Design che valorizza l\'unicità dell\'oggetto e la sua narrazione.', icon: '🏷️' },
  
  // 1996-2000: La prima bolla
  { year: 1996, name: 'Nokia 8110 / 3310', category: 'hardware', description: 'Il telefono diventa personale, tascabile, customizzabile con cover e suonerie.', emotionalImpact: 'Primo oggetto tecnologico di identità personale. Estensione del sé.', designNote: 'Design ergonomico, personalizzazione. L\'oggetto diventa fashion.', icon: '📱' },
  { year: 1997, name: 'iMac G3', category: 'hardware', description: 'Apple rivoluziona il design del computer: colori traslucidi, forme organiche.', emotionalImpact: 'Affetto per un oggetto bello, desiderio di averlo in vista. Emozione estetica.', designNote: 'Design emotivo: il computer come oggetto di arredamento, non solo strumento.', icon: '💻' },
  { year: 1998, name: 'Google', category: 'digital', description: 'Ricerca semplice, pagina bianca. L\'oggetto è la risposta, non l\'interfaccia.', emotionalImpact: 'Dipendenza dalla risposta immediata. Relazione di servizio.', designNote: 'Minimalismo radicale: il design scompare per lasciare spazio al contenuto.', icon: '🔍' },
  { year: 1999, name: 'Napster', category: 'software', description: 'La musica si dematerializza. L\'oggetto-CD diventa file MP3.', emotionalImpact: 'Perdita del rituale (aprire il CD, leggere le note). Accesso senza possesso.', designNote: 'Design che separa la musica dal suo supporto fisico. Dematerializzazione.', icon: '🎵' },
  { year: 2000, name: 'PlayStation 2', category: 'hardware', description: 'L\'oggetto ludico diventa centro del salotto. Design verticale, elegante.', emotionalImpact: 'Nostalgia generazionale, oggetto di condivisione sociale', designNote: 'Design che entra nell\'arredo domestico. Oggetto desiderabile anche spento.', icon: '🎮' },

  // 2001-2005: La rivoluzione mobile
  { year: 2001, name: 'iPod', category: 'hardware', description: '"1000 songs in your pocket". La musica diventa portatile, personale, intima.', emotionalImpact: 'Intimità sonora, colonna sonora personale della vita. Oggetto-identità.', designNote: 'Design iconico: la rotella, il bianco. Minimalismo che diventa status symbol.', icon: '🎧' },
  { year: 2001, name: 'Wikipedia', category: 'digital', description: 'Conoscenza collaborativa, gratuita, aperta. L\'enciclopedia come oggetto collettivo.', emotionalImpact: 'Senso di appartenenza a una comunità del sapere', designNote: 'Design funzionale, anti-commerciale. L\'oggetto è il contenuto condiviso.', icon: '📚' },
  { year: 2003, name: 'iTunes Store', category: 'app', description: 'La musica si compra a singolo. L\'album come oggetto si frammenta.', emotionalImpact: 'Relazione transazionale con la musica. Minore attaccamento al singolo brano.', designNote: 'Design che normalizza l\'acquisto digitale. Copertine ridotte a thumbnail.', icon: '🎶' },
  { year: 2004, name: 'Facebook', category: 'app', description: 'L\'identità personale diventa profilo digitale. Relazioni mediate dallo schermo.', emotionalImpact: 'Oggetto-specchio: ci vediamo attraverso il profilo. Validazione sociale.', designNote: 'Design del sé: foto, bio, like. L\'utente diventa oggetto di design.', icon: '👤' },
  { year: 2005, name: 'YouTube', category: 'app', description: 'Video personali, memorie in formato digitale. L\'oggetto-video diventa condivisibile.', emotionalImpact: 'Memoria digitale, nostalgia per momenti catturati e condivisi', designNote: 'Design del player: l\'oggetto-video ha un contenitore standardizzato.', icon: '▶️' },
  { year: 2005, name: 'Xbox 360', category: 'hardware', description: 'Gaming online, comunità virtuali. L\'oggetto-gioco diventa connessione.', emotionalImpact: 'Appartenenza a comunità di giocatori. Oggetti virtuali come investimento emotivo.', designNote: 'Design dell\'ecosistema: console + servizi + accessori come sistema integrato.', icon: '🕹️' },

  // 2006-2010: L'era smartphone
  { year: 2006, name: 'Twitter (X)', category: 'app', description: 'Pensieri brevi, pubblici. La parola diventa oggetto consumabile in tempo reale.', emotionalImpact: 'Urgenza, connessione costante, ansia da aggiornamento', designNote: 'Design della brevità: 140 caratteri come vincolo creativo e limite emotivo.', icon: '🐦' },
  { year: 2007, name: 'iPhone', category: 'hardware', description: 'Lo smartphone ridefinisce il rapporto con la tecnologia. Touch, gesture, intimità.', emotionalImpact: 'Estensione del corpo. Ansia da separazione. Oggetto-amante.', designNote: 'Design tattile: si tocca, si accarezza. Relazione fisica intima con l\'oggetto.', icon: '📲' },
  { year: 2007, name: 'Kindle', category: 'hardware', description: 'Il libro si dematerializza. L\'oggetto-libro perde peso, odore, consistenza.', emotionalImpact: 'Nostalgia per l\'oggetto-libro. Praticità vs. ritualità della lettura.', designNote: 'Design e-ink: imita la carta ma nega l\'esperienza sensoriale completa.', icon: '📖' },
  { year: 2008, name: 'Android', category: 'software', description: 'Democratizzazione dello smartphone. Ogni produttore crea il proprio oggetto.', emotionalImpact: 'Personalizzazione come espressione identitaria', designNote: 'Design modulare: l\'oggetto si adatta all\'utente, non viceversa.', icon: '🤖' },
  { year: 2008, name: 'App Store', category: 'digital', description: 'Gli oggetti digitali diventano acquistabili, collezionabili, installabili.', emotionalImpact: 'Collezionismo digitale. Attachement a icone e interfacce.', designNote: 'Design della griglia: ogni app è un oggetto visivo con la sua icona.', icon: '🔲' },
  { year: 2009, name: 'Bitcoin', category: 'digital', description: 'Il denaro diventa puro codice. L\'oggetto-valore si dematerializza completamente.', emotionalImpact: 'Speculazione emotiva, fede nella tecnologia, ansia da volatilità', designNote: 'Design invisibile: non esiste oggetto, solo transazioni e chiavi crittografiche.', icon: '₿' },
  { year: 2010, name: 'Instagram', category: 'app', description: 'La vita diventa immagine filtrata. L\'oggetto-foto diventa performance.', emotionalImpact: 'Narcisismo digitale, validazione estetica, confronto costante', designNote: 'Design del filtro: la realtà viene mediata, l\'oggetto-foto è sempre "migliorato".', icon: '📸' },
  { year: 2010, name: 'iPad', category: 'hardware', description: 'Il tablet: né telefono né computer. Un nuovo oggetto da toccare e sfogliare.', emotionalImpact: 'Relazione contemplativa, consumo passivo di contenuti', designNote: 'Design della superficie: tutto è piatto, liscio, toccabile. Oggetto da divano.', icon: '📋' },

  // 2011-2015: Social e IoT
  { year: 2011, name: 'Siri', category: 'software', description: 'L\'assistente vocale. Parliamo con gli oggetti e loro rispondono.', emotionalImpact: 'Antropomorfizzazione, relazione parasociale con la macchina', designNote: 'Design dell\'interazione vocale: l\'oggetto diventa "qualcuno" che ascolta.', icon: '🗣️' },
  { year: 2011, name: 'Pinterest', category: 'app', description: 'Collezionismo visivo digitale. Board come stanze virtuali del desiderio.', emotionalImpact: 'Aspirazione, desiderio, curation del sé ideale', designNote: 'Design della griglia visiva: ogni pin è un oggetto del desiderio frammentato.', icon: '📌' },
  { year: 2012, name: 'Raspberry Pi', category: 'hardware', description: 'Il computer come oggetto-maker. Costruire, modificare, personalizzare.', emotionalImpact: 'Empowerment, orgoglio della creazione, attaccamento all\'oggetto-fatto-da-me', designNote: 'Design aperto: l\'oggetto invita alla modificazione e alla comprensione.', icon: '🔧' },
  { year: 2013, name: 'Fitbit', category: 'hardware', description: 'Il corpo diventa dato. L\'oggetto misura, conta, giudica.', emotionalImpact: 'Ossessione per i dati, relazione con il proprio corpo mediata', designNote: 'Design indossabile: l\'oggetto diventa parte del corpo, estensione corporea.', icon: '⌚' },
  { year: 2014, name: 'Apple Watch', category: 'hardware', description: 'L\'orologio diventa computer. Notifiche, salute, identità al polso.', emotionalImpact: 'Connessione permanente, ansia da notifica, oggetto-status', designNote: 'Design del corpo: l\'oggetto si fonde con l\'identità corporea e sociale.', icon: '⌚' },
  { year: 2014, name: 'Amazon Echo / Alexa', category: 'hardware', description: 'L\'oggetto che ascolta e parla. La casa diventa intelligente e responsiva.', emotionalImpact: 'Familiarità domestica, relazione di servizio, antropomorfizzazione', designNote: 'Design domestico: l\'oggetto si mimetizza nell\'arredo, diventa "presente".', icon: '🔊' },
  { year: 2015, name: 'Apple Music / Spotify (dominio)', category: 'app', description: 'Streaming musicale. Accesso infinito, zero possesso. La musica è ovunque.', emotionalImpact: 'Scoperta senza attaccamento. Relazione superficiale con milioni di brani.', designNote: 'Design dell\'abbondanza: playlist algoritmiche sostituiscono la scelta consapevole.', icon: '🎵' },

  // 2016-2020: AI e realtà aumentata
  { year: 2016, name: 'Pokémon GO', category: 'app', description: 'Oggetti virtuali nel mondo reale. AR che mescola piani di esistenza.', emotionalImpact: 'Nostalgia + novità. Il mondo reale diventa gioco. Socialità fisica mediata.', designNote: 'Design della sovrapposizione: l\'oggetto digitale abita lo spazio fisico.', icon: '🎯' },
  { year: 2016, name: 'AirPods', category: 'hardware', description: 'Cuffie senza fili. L\'oggetto scompare nell\'orecchio. Audio sempre presente.', emotionalImpact: 'Bolla sonora personale, isolamento selettivo, comfort uditivo', designNote: 'Design dell\'invisibilità: l\'oggetto è minimale, quasi non si vede.', icon: '🎧' },
  { year: 2017, name: 'Nintendo Switch', category: 'hardware', description: 'Console ibrida: casa e portatile. L\'oggetto-gioco si trasforma.', emotionalImpact: 'Versatilità affettiva, oggetto che si adatta ai contesti della vita', designNote: 'Design modulare: l\'oggetto cambia forma in base al contesto d\'uso.', icon: '🎮' },
  { year: 2017, name: 'TikTok (Douyin)', category: 'app', description: 'Video brevi, algoritmo che sceglie per te. Contenuto come oggetto effimero.', emotionalImpact: 'Dipendenza da scroll, gratificazione istantanea, identità performativa', designNote: 'Design dell\'infinito: feed senza fine, ogni video è un oggetto usa-e-getta.', icon: '🎬' },
  { year: 2018, name: 'Fortnite / Metaversi iniziali', category: 'digital', description: 'Mondi virtuali persistenti. Oggetti digitali (skin) come status symbol.', emotionalImpact: 'Investimento emotivo in oggetti che non esistono fisicamente', designNote: 'Design dell\'identità virtuale: l\'avatar come oggetto di espressione del sé.', icon: '🌍' },
  { year: 2019, name: 'TikTok globale', category: 'app', description: 'Creazione di contenuti democratizzata. Ogni utente è produttore di oggetti digitali.', emotionalImpact: 'Empowerment creativo, esposizione, vulnerabilità pubblica', designNote: 'Design della creazione facile: strumenti semplici per oggetti complessi.', icon: '🎵' },
  { year: 2020, name: 'Zoom', category: 'app', description: 'La videochiamata diventa oggetto quotidiano. Il volto sullo schermo come presenza.', emotionalImpact: 'Fatica da Zoom, intimità forzata, nostalgia del contatto fisico', designNote: 'Design della griglia di volti: ogni persona è un oggetto-riquadro.', icon: '📹' },
  { year: 2020, name: 'Clubhouse', category: 'app', description: 'Audio sociale, conversazioni effimere. La voce come oggetto temporaneo.', emotionalImpact: 'Intimità vocale, FOMO, esclusività come valore emotivo', designNote: 'Design dell\'effimero: l\'oggetto sonoro non lascia traccia, come una conversazione.', icon: '🎙️' },

  // 2021-2026: AI, NFT e oltre
  { year: 2021, name: 'NFT / CryptoPunks', category: 'digital', description: 'Oggetti digitali certificati come unici. Arte e collezionismo dematerializzato.', emotionalImpact: 'Speculazione emotiva, status symbol digitale, confusione sul valore', designNote: 'Design del certificato: l\'oggetto è un token, l\'immagine è riproducibile.', icon: '🖼️' },
  { year: 2022, name: 'ChatGPT', category: 'digital', description: 'Conversazione con l\'AI. L\'oggetto-risposta è generato, non trovato.', emotionalImpact: 'Stupore, dipendenza, relazione parasociale con la macchina pensante', designNote: 'Design della conversazione: l\'interfaccia è un dialogo, l\'oggetto è il testo.', icon: '🤖' },
  { year: 2022, name: 'BeReal', category: 'app', description: 'Foto non filtrate, momento casuale. Autenticità come oggetto di design.', emotionalImpact: 'Sollievo dalla performance, autenticità forzata, connessione reale', designNote: 'Design dell\'anti-design: la spontaneità come vincolo estetico.', icon: '📷' },
  { year: 2023, name: 'Apple Vision Pro', category: 'hardware', description: 'Spatial computing. Gli oggetti digitali abitano lo spazio fisico intorno a noi.', emotionalImpact: 'Meraviglia, isolamento dal mondo fisico, nuova intimità con il digitale', designNote: 'Design spaziale: l\'oggetto non ha più schermo, abita lo spazio.', icon: '🥽' },
  { year: 2023, name: 'Midjourney / DALL-E', category: 'digital', description: 'Immagini generate da AI. L\'oggetto-immagine nasce dal desiderio verbale.', emotionalImpact: 'Democratizzazione della creazione, perdita del valore dell\'unicità', designNote: 'Design del prompt: l\'oggetto è co-creato da umano e macchina.', icon: '🎨' },
  { year: 2024, name: 'AI Assistants integrati', category: 'software', description: 'AI in ogni oggetto: telefono, auto, casa. Intelligenza ubiqua e invisibile.', emotionalImpact: 'Normalizzazione dell\'AI, fiducia/delega, perdita di autonomia', designNote: 'Design dell\'invisibilità: l\'AI è ovunque ma non si vede. Oggetto-ambiente.', icon: '✨' },
  { year: 2024, name: 'Humane AI Pin / Rabbit R1', category: 'hardware', description: 'Oggetti AI-first: nessun schermo, solo voce e gesture. Post-smartphone?', emotionalImpact: 'Sperimentazione, rifiuto dello schermo, nostalgia del tactile', designNote: 'Design anti-schermo: l\'oggetto comunica senza interfaccia visiva.', icon: '📍' },
  { year: 2025, name: 'AI Agents personali', category: 'digital', description: 'Agenti AI che agiscono per noi. Delega totale di compiti e decisioni.', emotionalImpact: 'Liberazione o perdita di controllo? Relazione di delega totale.', designNote: 'Design della delega: l\'oggetto non è più strumento ma agente autonomo.', icon: '🧠' },
  { year: 2025, name: 'Oggetti fisici connessi AI', category: 'hardware', description: 'Oggetti quotidiani (specchi, frigo, scarpe) con AI integrata. Tutto è smart.', emotionalImpact: 'Familiarità aumentata, sorveglianza domestica, comfort predittivo', designNote: 'Design dell\'integrazione: l\'AI si nasconde negli oggetti della vita quotidiana.', icon: '🏠' },
  { year: 2026, name: 'Interfacce neurali (primi consumer)', category: 'hardware', description: 'BCI consumer: controllo pensiero-based. L\'oggetto si fonde con il corpo.', emotionalImpact: 'Estensione radicale del sé, perdita dei confini corpo-macchina', designNote: 'Design post-oggetto: l\'interfaccia non è più un oggetto ma un\'estensione neurale.', icon: '🧬' },
];

export const categories = {
  hardware: { label: 'Hardware', color: 'bg-blue-500', textColor: 'text-blue-400' },
  software: { label: 'Software', color: 'bg-green-500', textColor: 'text-green-400' },
  app: { label: 'App / Piattaforma', color: 'bg-purple-500', textColor: 'text-purple-400' },
  digital: { label: 'Oggetto Digitale', color: 'bg-amber-500', textColor: 'text-amber-400' },
  physical: { label: 'Oggetto Fisico Trasformato', color: 'bg-rose-500', textColor: 'text-rose-400' },
};

export interface Era {
  id: string;
  title: string;
  years: string;
  description: string;
  theme: string;
  color: string;
}

export const eras: Era[] = [
  { id: 'birth', title: 'La Nascita del Web', years: '1991-1995', description: 'Internet entra nelle case. Gli oggetti sono schermi e pagine web. La curiosità è l\'emozione dominante.', theme: 'Scoperta e meraviglia', color: 'from-cyan-500 to-blue-600' },
  { id: 'bubble', title: 'La Prima Bolla', years: '1996-2000', description: 'E-commerce, motori di ricerca, musica digitale. Gli oggetti iniziano a dematerializzarsi.', theme: 'Ottimismo e sperimentazione', color: 'from-blue-500 to-indigo-600' },
  { id: 'mobile', title: 'La Rivoluzione Mobile', years: '2001-2005', description: 'iPod, social network, video online. Gli oggetti diventano personali e portatili.', theme: 'Identità e connessione', color: 'from-indigo-500 to-purple-600' },
  { id: 'smartphone', title: 'L\'Era Smartphone', years: '2006-2010', description: 'iPhone, app store, streaming. L\'oggetto-smartphone diventa estensione del corpo.', theme: 'Intimità e dipendenza', color: 'from-purple-500 to-pink-600' },
  { id: 'iot', title: 'Social e IoT', years: '2011-2015', description: 'Wearable, assistenti vocali, casa intelligente. Gli oggetti ascoltano e rispondono.', theme: 'Antropomorfizzazione e fiducia', color: 'from-pink-500 to-rose-600' },
  { id: 'ai', title: 'AI e Realtà Miste', years: '2016-2020', description: 'AR, streaming, pandemia. Gli oggetti digitali si sovrappongono al reale.', theme: 'Sovrapposizione e adattamento', color: 'from-rose-500 to-orange-600' },
  { id: 'generative', title: 'L\'Era Generativa', years: '2021-2026', description: 'AI generativa, NFT, interfacce neurali. L\'oggetto si dissolve nell\'intelligenza.', theme: 'Delega e fusione', color: 'from-orange-500 to-red-600' },
];
