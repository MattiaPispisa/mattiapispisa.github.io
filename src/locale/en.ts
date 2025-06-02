const en = {
    // ------------------- menu -------------------
    about: "About",
    post: "Post",
    project: "Projects",
    experience: "Experience",
    education: "Education",
    passions: "Passions",
    booksRead: "Books Read",

    // ------------------- about me -------------------
    myInfo:
        "I have always been passionate about mobile development. I started with iOS and then transitioned to a hybrid approach. After my passion for mobile, I discovered Front-End Web development, and now I specialize in React. I always begin with a theoretical approach 🤓 before putting it into practice 👨🏻‍💻.",
    curriculum: "Curriculum",

    // ------------------- projects -------------------
    // crdt
    crdtDesc: "A project for managing conflict free replicated data. Currently it is divided into two libraries:",
    hlcDartDesc: "A library that implements the HLC (Hybrid Logical Clock) protocol for managing replicated data.",
    crdtLfDesc: "A library that implements the CRDT (Conflict-free Replicated Data Type) protocol for managing replicated data.",
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
    mvExperience: "WEB AND MOBILE APPLICATION DESIGNER AND DEVELOPER",
    mvExperienceWeb:
        "Specialized in developing web applications, primarily utilizing the following technologies/tools: TypeScript, React, Vite, TurboRepo.",
    mvExperienceMob:
        "While mobile applications are primarily developed using Dart/Flutter.",
    tecnotronicaExperience:
        "DESIGNER AND DEVELOPER OF A WEB CONNECTOR FOR THE PROXFLOW APPLICATION",
    tecnotronicaExperienceDesc:
        " Technologies used in the development of the WEB connector for ProXFlow:",
    tecnotronicaExperienceDescWeb: "Development of a Web-App in dart/flutter.",
    tecnotronicaExperienceDescBe: "Development of a Back-End in dart",
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
    present: "Present",
    library: "library",
    talk: "talk",
    exercise: "exercise",
    university: "university",
    preview: "Preview",
    viewMore: "View More"
};

export {en};
