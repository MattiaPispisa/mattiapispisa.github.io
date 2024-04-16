import { PostModel } from "./model";

const posts: PostModel[] = [
  {
    link: "https://dev.to/mattia/expand-your-future-extensions-in-dart-22j",
    title: "Expand your Future, extensions in Dart",
    description:
      "You can extend functions, and if these functions are asynchronous, you can create something truly remarkable. Let's dive into some practical and simple demonstrative examples.",
    date: "2024-04-12",
    hashtags: ["flutter", "dart", "async"],
  },
  {
    link: "https://dev.to/mattia/flutter-not-yet-ready-for-web-1jm6",
    title: "Flutter, not yet ready for web",
    description:
      "Starting from a code example that had a particular bug will be explored the source code of react focusing especially on hooks and fiber nodes.",
    date: "2023-12-12",
    hashtags: ["flutter", "dart", "javascript"],
  },
  {
    link: "https://dev.to/mattia/react-hooks-and-fiber-deep-diving-gi1",
    title: "React Hooks and Fiber deep diving",
    description:
      "Starting from a code example that had a particular bug will be explored the source code of react focusing especially on hooks and fiber nodes.",
    date: "2023-10-28",
    hashtags: ["react", "javascript"],
  },
  {
    link: "https://dev.to/mattia/flutter-monorepo-dependency-injection-1k1d",
    title: "Flutter Monorepo & Dependency Injection",
    description:
      "Monorepo refers to the practice of software development in which all components of an application or system are maintained within a single repository. A good article that describes well what it is, pros and cons is the following: monorepo.tools. In the case of a flutter application an excellent monorepo manager is Melos, here a tutorial on how to create and manage it.",
    date: "2023-10-10",
    hashtags: ["flutter", "dart", "dependencyinjection"],
  },
  {
    link: "https://dev.to/mattia/mastering-dependency-injection-in-flutter-13bh",
    title: "Mastering dependency injection in Flutter",
    description:
      "One of the 5 SOLI D principles capitulates that a high-level module should depend only on abstract class not on the implementation. This leads to less coupling between modules. In this article we will focus on how to apply this pattern in flutter.",
    date: "2023-08-10",
    hashtags: ["flutter", "dart", "dependencyinjection"],
  },
];

export { posts };
