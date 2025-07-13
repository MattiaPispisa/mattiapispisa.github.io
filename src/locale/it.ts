const it = {
    // ------------------- menu -------------------
    about: "Su di me",
    post: "Post",
    project: "Progetti",
    experience: "Esperienze",
    education: "Formazione",
    passions: "Passioni",
    booksRead: "Libri Letti",

    // ------------------- about me -------------------
    myInfo:
        "Sono sempre stato appassionato di sviluppo mobile. Ho iniziato con iOS per poi passare ad un approccio ibrido. Dopo la passione per il mobile è arrivata quella per sviluppo Web Front-End e ora sono anche specializzo in React. Inizio sempre con uno studio teorico 🤓 per poi metterlo in pratica 👨🏻‍💻.",
    curriculum: "Curriculum",

    // ------------------- projects -------------------
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
    mvExperience: "Progettista e sviluppatore di applicazioni web e mobile",
    mvExperienceWeb:
        "Specializzato nello sviluppo di applicazioni web, utilizzando principalmente le seguenti tecnologie/strumenti: TypeScript, React, Vite, TurboRepo.",
    mvExperienceMob:
        "Mentre le applicazioni mobili le sviluppo principalmente utilizzando Dart/Flutter.",
    tecnotronicaExperience:
        "Progettista e sviluppatore di un connettore Web per l'applicativo ProXFlow",
    tecnotronicaExperienceDesc:
        "Tecnologie utilizzate per lo sviluppo del connettore WEB per il ProXFlow:",
    tecnotronicaExperienceDescWeb: "Sviluppo di un Web-App in dart/flutter",
    tecnotronicaExperienceDescBe: "Sviluppo di un Back-End in dart",
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
    present: "Adesso",
    library: "libreria",
    talk: "presentazione",
    exercise: "esercizio",
    university: "università",
    preview: "Anteprima",
    viewMore: "Leggi tutto"
};

export { it };
