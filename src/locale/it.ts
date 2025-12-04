const it = {
    // ------------------- menu -------------------
    about: "Su di me",
    post: "Post",
    project: "Progetti",
    skills: "Competenze",
    experience: "Esperienze",
    education: "Formazione",
    passions: "Passioni",
    booksRead: "Libri Letti",

    // ------------------- about me -------------------
    myInfo:
        "Sono sempre stato appassionato di sviluppo mobile. Ho iniziato con iOS, per poi passare a un approccio ibrido con Flutter. Sviluppo applicazioni professionalmente con Flutter dal suo primo rilascio nel 2018.\nDopo la passione per il mobile, ho sviluppato anche un forte interesse per il Web Front-End, e ora sono specializzato anche in React. Quando mi approccio a qualcosa di nuovo, mi piace iniziare con uno studio teorico 🤓, fare un'analisi, e poi mettere tutto in pratica 👨🏻‍💻.",
    curriculum: "Curriculum",

    // ------------------- projects -------------------
    // dart_time
    dartTimeDesc: "Una libreria Dart completa che estende e potenzia le funzionalità temporali native di Dart. Questa libreria fornisce potenti estensioni per DateTime e Duration, oltre a classi specializzate per operazioni temporali avanzate.",
    // crdt
    crdtDesc: "Un progetto per la gestione di dati replicabili senza risoluzione di conflitti. Si suddivide in alcune librerie:",
    hlcDartDesc: "Una libreria che implementa il protocollo HLC (Hybrid Logical Clock) per la gestione di dati replicabili.",
    crdtLfDesc: "Una libreria che implementa il protocollo CRDT (Conflict-free Replicated Data Type) per la gestione di dati replicabili.",
    crdtSyncDesc: "Una libreria per sincronizzare documenti crdt in tempo reale tra diversi utenti.",
    crdtHivePlugin: "Una libreria che supporta la persistenza dei dati crdt utilizzando hive.",
    // en .env reader
    enEnvReaderDesc: "Un'estensione di Visual Studio Code per gestire i file .env con un'interfaccia utente intuitiva.",
    // en yup decorators
    enYupDecoratorDesc: "Una libreria typescript per creare dei \"yup schema decorators\" semplificando la validazione di \"schema\".",
    // data migration
    dataMigrationDesc: "Una libreria per applicare una serie di migrazione per aggiornare vecchie strutture dati alle loro nuove versioni.",
    // en logger
    enLoggerDesc: "EnLogger ti permette di scrivere messaggi di log secondo le tue esigenze, senza limitarti a scrivere messaggi sulla console di debug o su altri sistemi. Mantiene internamente una lista di EnLoggerHandler. Puoi implementare il tuo EnLoggerHandler in base alle tue specifiche necessità. Ogni volta che scriverai un messaggio con EnLogger, ogni EnLoggerHandler verrà invocato per eseguire l'operazione di scrittura.",
    // file upload
    fileUploaderDesc0:
        "Permette di caricare un file indipendentemente dalla implementazione che si vuole avere.",
    fileUploaderDescCapabilities: "Questa libreria offre:",
    fileUploaderDescCapability1: "Il caricamento di un file per intero;",
    fileUploaderDescCapability2: "Il caricamento di un file in chunk;",
    fileUploaderDescCapability3:
        "Il caricamento di un file in chunk con la possibilità di interrompere e riprendere l'upload in caso di errore.",
    fileUploaderDescPlugins: "Plugins",
    fileUploaderDescPluginHttp:
        "http_file_uploader: Questo plugin implementa il caricamento di un file utilizzando la libreria http;",
    fileUploaderDescPluginDio:
        "dio_file_uploader: Questo plugin implementa il caricamento di un file utilizzando la libreria dio.",
    fileUploaderDescUIPackage: "Libreria UI",

    // posix timezones
    posixTzDesc:
        "Questa libreria è progettata per semplificare l'utilizzo dei fusi orari nello standard posix.",

    // good enums
    goodEnumsDesc:
        'Libreria di "code-gen" per potenziare l\'utilizzo degli enums.',

    // how to train your useReducer
    howToTrainYourUseReducerDesc0:
        'Una presentazione fatta al "ReactJS meetup" a Verona nel 2023.',
    howToTrainYourUseReducerDesc1: "Il codice presentato",
    howToTrainYourUseReducerDesc2: `Dividere la vista dal controller è fondamentale per costruire dei buoni applicativi.
     Molto spesso tendiamo ad utilizzare librerie esterne per gestire lo stato. Ma react è già un ottimo strumenti per la gestione dello stato.
     In questa presentazione andremo a scoprire di più sullo "useReducer" e impareremo come poterlo potenziare cucito sulle nostre esigenze.`,

    // efficient tree manipulation
    efficientTreeManipulation:
        'Un esercizio di "algoritmi e strutture dati" svolto durante la laurea di informatica.',

    // ------------------- posts -------------------
    // workspaces react and vite
    workspacesReactAndViteDesc: "Come gestire un workspace npm evitando la duplicazione di librerie.",

    goRouterNavigationObserverDesc: "Come implementare un observer per la navigazione con Go Router.",

    // efficient logging in applications
    efficientLoggingInApplicationsDesc: "Come approcciare la registrazione di eventi in un applicativo ed infine la mia proposta alla soluzione in un applicativo dart/flutter.",

    // extension in dart
    extensionInDartDesc:
        "In dart si possono estendere le funzioni, in più, se queste sono asincrone, è incredibile quello che si può fare. Tuffiamoci in alcune pratici e semplici esempi dimostrativi.",

    // flutter web
    flutterWebNotReady:
        "Una analisi delle limitazioni di flutter nello sviluppo di web app.",

    // react hooks deep diving
    reactHooksDeppDiving: `Partendo da un esempio di codice che ha un particolare baco andremo ad esplorare il codice sorgente di react 
  concentrandoci sopratutto sugli "hook" e i "fiber".`,

    // flutter and monorepo
    flutterAndMonorepo: `Il termine monorepo di riferisce alla pratica nello sviluppo software in cui i componenti di una applicazione o un sistema sono mantenuti in un singolo "repository". 
  Nel caso di dart/flutter un ottimo gestire di monorepo è melos, in questo articolo andremo a spiegare come poter creare e gestirne uno.`,

    // flutter di
    flutterDI: `Uno dei 5 principi "SOLID" capitola che un modulo di alto livello deve dipendere solo da classi astratte e non dalle sue implementazioni.
  Questo porta ad un minor accoppiamento tra i moduli. In questo articolo ci concentreremo su come applicare questo pattern in flutter.`,

    // ------------------- experiences -------------------
    mvExperience: "Progettista e Sviluppatore MOB & WEB",
    mvExperienceDesc: `Sono il team lead per entrambi gli ambienti mobile (MOB) e web (WEB). Nel mio ruolo, sono responsabile dell'analisi e progettazione delle applicazioni, dell'organizzazione e divisione del lavoro all'interno del team, e della formazione tecnica.
In entrambe le aree, supervisiono il prodotto principale dell'azienda, così come progetti di consulenza o sviluppo commissionati da altre aziende.`,
    mvExperienceWeb: `Lato web, lo stack principale che ho scelto include:
TypeScript come linguaggio, react come libreria, react router come framework, inversify per la dependency injection, redux per lo stato globale, reducer + immer + yup per la business logic, vite come bundler, e turborepo per la gestione del monorepo.`,
    mvExperienceMob: `Lato mobile, lo stack principale che ho scelto per lo sviluppo delle app include dart/flutter come linguaggio e framework principale, get_it + injectable per la dependency injection, bloc per la business logic dell'applicazione, hive/hive_ce per la persistenza dei dati, e melos per la gestione del monorepo.`,
    tecnotronicaExperience:
        "PROGETTISTA E SVILUPPATORE DI UN CONNETTORE WEB PER L'APPLICAZIONE PROXFLOW",
    tecnotronicaExperienceDesc:
        `Ho progettato e sviluppato un connettore per l'applicazione ProxFlow. Il connettore è stato suddiviso in:`,
    tecnotronicaExperienceDescBe: "Back-End sviluppato in dart utilizzando principalmente dart_frog",
    tecnotronicaExperienceDescWeb: "Una Web-App realizzata con react. Inizialmente, il client doveva essere sviluppato anche in dart/flutter, ma l'interoperabilità di dart con javascript — specialmente per compiti complessi come la visualizzazione di file PDF di grandi dimensioni (a volte fino a 100 MB) — non era ancora abbastanza matura per un'applicazione di livello produttivo.",
    archeidoExperience: "Sviluppatore Mobile iOS",
    fillInTheBlanksExperience: "Impiegato",

    // ------------------- education -------------------
    masterDegree: "Laurea magistrale",
    masterDegreeDesc: "Laurea magistrale in informatica (Sistemi interattivi)",
    masterDegreeVote: "Voto: ",
    masterDegreeBestGraduate: " con merito di laurea ai migliori graduati",
    bachelorDegree: "Laurea breve",
    bachelorDegreeDesc: "Laurea breve in informatica",
    bachelorDegreeVote: "Voto: ",
    diploma: "Diploma",
    diplomaText: "Diploma in telecomunicazioni",

    // ------------------- books read -------------------
    booksReadDesc: "Una raccolta dei miei libri preferiti che ho letto. L'elenco non è ancora completo, ma continuerò ad aggiungerne altri nel tempo.",
    allBooks: "Tutti",
    noBooksFound: "Nessun libro trovato per la categoria selezionata.",
    programming: "Programmazione",
    softwareEngineering: "Ingegneria del software",
    design: "Design",
    ux: "UX",
    dart: "Dart",
    flutter: "Flutter",
    react: "React",
    machineLearning: "Machine Learning",
    algorithms: "Algoritmi",
    networks: "Reti di calcolatori",
    literature: "Letteratura",
    mobile: "Mobile",
    web: "Web",
    javascript: "Javascript",

    // ------------------- passions -------------------
    passionsCode:
        "Adoro progettare, programmare e trovare sempre nuove sfide per mettermi in gioco.",
    passionF1:
        "Oltre a questo, nel tempo libero, sono un appassionato di motori, sopratutto della formula 1, sempre forza Ferrari 🏎️!",
    passionGym:
        "Vado spesso in palestra 🏋🏻‍♀️ e gestisco insieme ad altri miei amici una pagina dedicata all'organizzazione di escursioni in montagna 🏔️, seguitela anche voi:",
    passionNerd: "Adoro la Marvel, Star Wars e Naruto 🍥!",

    // ------------------- skills -------------------
    skillDartDesc: "Competenza avanzata in Dart dal 2018. Seguo da vicino le release del linguaggio, le applico nei progetti personali, nei post del blog e nel lavoro professionale. Il mio progetto personale più grande in Dart è un sistema CRDT.",
    skillFlutterDesc: "Esperto nello sviluppo di applicazioni Flutter, in particolare per piattaforme mobile (Android/iOS). Focus su consistenza cross-platform e performance.",
    skillJsTsDesc: "Sviluppo quasi esclusivamente in TypeScript (non JavaScript) perché ritengo che porti a codice più manutenibile nel tempo e all'interno dei team. Sfrutto il pieno potenziale di TypeScript per comporre strutture dati complesse.",
    skillReactDesc: "Esperto nella realizzazione di applicazioni web con React e React Router. Ho esaminato il codice sorgente di React più volte per comprenderne a fondo il funzionamento interno. Ho scritto post al riguardo.",
    skillPythonDesc: "Utilizzato principalmente per l'addestramento, il fine-tuning e per servire i modelli di intelligenza artificiale.",
    moreDetail: "più dettagli",

    present: "Adesso",
    library: "libreria",
    talk: "presentazione",
    exercise: "esercizio",
    university: "università",
    preview: "Anteprima",
    viewMore: "Leggi tutto"
};

export { it };
