const en = {
    // ------------------- menu -------------------
    about: "About",
    post: "Post",
    project: "Projects",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    passions: "Passions",
    booksRead: "Books Read",

    // ------------------- about me -------------------
    myInfo:
        `I’ve always been passionate about mobile development. I started out with iOS, then moved on to a hybrid approach with Flutter. I’ve been building apps professionally with Flutter since its first release in 2018.
After my love for mobile development, I also developed a strong interest in Web Front-End, and I’m now specialized in React as well.Whenever I approach something new, I like to begin with some theoretical study 🤓, do an analysis, and then put everything into practice 👨🏻‍💻.`,
    curriculum: "Curriculum",

    // ------------------- projects -------------------
    // dart_time
    dartTimeDesc: "A comprehensive Dart library that extends and enhances Dart's built-in time functionality. This library provides powerful extensions to DateTime and Duration, plus specialized classes for advanced time operations.",
    // crdt
    crdtDesc: "A project for managing conflict free replicated data. It is divided into several libraries:",
    hlcDartDesc: "A library that implements the HLC (Hybrid Logical Clock) protocol for managing replicated data.",
    crdtLfDesc: "A library that implements the CRDT (Conflict-free Replicated Data Type) protocol for managing replicated data.",
    crdtSyncDesc: "A library for synchronizing crdt documents in real time between different users.",
    crdtHivePlugin: "A library that supports the persistence of crdt data using hive.",
    // en .env reader
    enEnvReaderDesc: "A Visual Studio Code extension for managing .env files with a user-friendly interface.",
    // en yup decorators
    enYupDecoratorDesc: "A TypeScript library for creating yup schema decorators, simplifying schema validations.",
    // data migration
    dataMigrationDesc: "A library for applying a series of migrations to update old versions of data structures to the most recent one.",
    // en logger
    enLoggerDesc: "EnLogger allows you to write log messages according to your needs without restricting you to writing messages to the debug console or other systems. It maintains a list of EnLoggerHandlers internally. You can implement your own EnLoggerHandler based on your specific requirements. Each time you want to log a message with EnLogger, each EnLoggerHandler will be invoked to perform the write operation.",
    // file upload
    fileUploaderDesc0:
        " A file upload functionality that is implementation-agnostic.",
    fileUploaderDescCapabilities: "This library provides the capability to:",
    fileUploaderDescCapability1: "upload a complete file;",
    fileUploaderDescCapability2: "upload a file in chunks;",
    fileUploaderDescCapability3:
        "upload a file in chunks with the ability to pause and resume the upload from where it left off (restorable chunks file upload).",
    fileUploaderDescPlugins: "Plugins",
    fileUploaderDescPluginHttp:
        "http_file_uploader: This plugin allows you to implement file uploads using the http library;",
    fileUploaderDescPluginDio:
        "dio_file_uploader: This plugin allows you to implement file uploads using the dio library.",
    fileUploaderDescUIPackage: "UI package",

    // posix timezones
    posixTzDesc:
        "Posix timezones package. This package is designed to simplify working with timezones, allowing developers to read and write timezones in posix standard.",

    // good enums
    goodEnumsDesc: "Code generator to make enums easier to use.",

    // how to train your useReducer
    howToTrainYourUseReducerDesc0:
        "A talk given at the ReactJS meetup in Verona in 2023.",
    howToTrainYourUseReducerDesc1: 'Code "how-to-train-your-use-reducer"',
    howToTrainYourUseReducerDesc2: `Splitting the view from the controller is foundational to build great
          applications. We tend to rely on external libraries to manage their
          state. But React itself has a great off-the-shelf state management
          tool: the useReducer. In this talk we’re going to get to know more
          about it, and especially learn how to enhance it tailoring it to our
          needs. You'll discover what you have been missing.`,

    // efficient tree manipulation
    efficientTreeManipulation:
        'An exercise on "algorithms and data structures" completed during my bachelor\'s degree in computer science.',

    // ------------------- posts -------------------
    // workspaces react and vite
    workspacesReactAndViteDesc: "How to manage a npm workspace avoiding duplicate libraries.",

    // go router navigation observer
    goRouterNavigationObserverDesc: "How to implement a navigation observer with Go Router.",

    // efficient logging in applications
    efficientLoggingInApplicationsDesc: "An approach to logging messages of your applications with also my own package solution in dart/flutter.",

    // extension in dart
    extensionInDartDesc:
        "You can extend functions, and if these functions are asynchronous, you can create something truly remarkable. Let's dive into some practical and simple demonstrative examples.",

    // flutter web
    flutterWebNotReady: "An analysis of flutter current limitations on web.",

    // react hooks deep diving
    reactHooksDeppDiving: `Starting from a code example that had a particular bug will be explored the source code of react focusing especially on "hooks" and "fiber" nodes.`,

    // flutter and monorepo
    flutterAndMonorepo: `Monorepo refers to the practice of software development in which all components of an application or system are maintained within a single repository. In the case of a flutter application an excellent monorepo manager is Melos, here a tutorial on how to create and manage it.`,

    // flutter di
    flutterDI: `One of the 5 SOLI D principles capitulates that a high-level module should depend only on abstract class not on the implementation. This leads to less coupling between modules. In this article we will focus on how to apply this pattern in flutter.`,

    // ------------------- experiences -------------------
    mvExperience: "MOB & WEB Engineer",
    mvExperienceDesc: `I’m the team lead for both the mobile (MOB) and web (WEB) environments. In my role, I’m responsible for application analysis and design, organizing and dividing work within the team, and providing technical training.
In both areas, I oversee the company’s core product as well as consulting or development projects commissioned by other companies.`,
    mvExperienceWeb: `On the web side, the main stack I’ve chosen includes:
TypeScript as the language, react as the library, react router as the framework, inversify for dependency injection, redux for global state, reducer + immer + yup for business logic, vite as the bundler, and turborepo for monorepo management.`,
    mvExperienceMob: `On the mobile side, the main stack I’ve chosen to use for app development includes dart/flutter as the primary language and framework, get_it + injectable for dependency injection, bloc for application business logic, hive/hive_ce for data persistence, and melos for monorepo management.`,
    tecnotronicaExperience:
        "DESIGNER AND DEVELOPER OF A WEB CONNECTOR FOR THE PROXFLOW APPLICATION",
    tecnotronicaExperienceDesc:
        `I designed and developed a connector for the ProxFlow application. The connector was split into a:`,
    tecnotronicaExperienceDescBe: "Back-End developed in dart using principally with dart_frog",
    tecnotronicaExperienceDescWeb: "A Web-App built with react. Initially, the client was also supposed to be developed in dart/flutter, but dart’s interoperability with javascript — especially for complex tasks like displaying large PDF files (sometimes up to 100 MB) — was not yet mature enough for a production-grade application.",
    archeidoExperience: "iOS Mobile Developer",
    fillInTheBlanksExperience: "Employee",

    // ------------------- education -------------------
    masterDegree: "Master's Degree",
    masterDegreeDesc:
        "Master's Degree in Computer Science, Computer Science (Interactive Systems)",
    masterDegreeVote: "Vote: ",
    masterDegreeBestGraduate: " with merit to the best graduates",
    bachelorDegree: "Bachelor's Degree",
    bachelorDegreeDesc: "Bachelor's degree in Computer Science, Computer Science",
    bachelorDegreeVote: "Vote: ",
    diploma: "Diploma",
    diplomaText: "Diploma in telecommunications",

    // ------------------- books read -------------------
    booksReadDesc: "A collection of my favorite books I've read. The list isn't complete yet, but I'll keep adding more over time.",
    allBooks: "All",
    noBooksFound: "No books found for the selected category.",
    programming: "Programming",
    softwareEngineering: "Software Engineering",
    design: "Design",
    ux: "UX",
    dart: "Dart",
    flutter: "Flutter",
    react: "React",
    machineLearning: "Machine Learning",
    algorithms: "Algorithms",
    networks: "Computer Networks",
    literature: "Literature",
    mobile: "Mobile",
    web: "Web",
    javascript: "Javascript",

    // ------------------- passions -------------------
    passionsCode:
        "I love designing, programming, and always finding new challenges to push myself.",
    passionF1:
        "Besides that, in my free time, I'm passionate about motorsports, especially Formula 1, always Ferrari 🏎️!",
    passionGym:
        "I often go to the gym 🏋🏻‍♀️ and together with some friends, I manage a page dedicated to organizing mountain excursions 🏔️. Follow it too:",
    passionNerd: "I also love Marvel, Star Wars, and Naruto 🍥!",

    // ------------------- skills -------------------
    skillDartDesc: "Advanced expertise in Dart since 2018. I follow language releases closely, apply them in personal projects, blog posts, and professional work. My largest personal Dart project is a CRDT system.",
    skillFlutterDesc: "Expert in Flutter application development, particularly for mobile platforms (Android/iOS). Strong focus on cross-platform consistency and performance.",
    skillJsTsDesc: "I develop almost exclusively in TypeScript (not JavaScript) because I believe it leads to more maintainable code over time and within teams. I leverage TypeScript's full potential for composing complex data structures.",
    skillReactDesc: "Expert in building web applications with React and React Router. I've examined React's source code multiple times to fully understand its inner workings. I've written blog posts about it.",
    skillPythonDesc: "Primarily used for training, fine-tuning, and serving artificial intelligence models.",
    moreDetail: "more detail",
    present: "Present",
    library: "library",
    talk: "talk",
    exercise: "exercise",
    university: "university",
    preview: "Preview",
    viewMore: "View More"
};

export { en };
