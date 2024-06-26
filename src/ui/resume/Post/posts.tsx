import { LanguageResolver } from "../../../locale";
import { PostModel } from "./model";

const posts: (t: LanguageResolver) => PostModel[] = (t) => [
  {
    link: "https://dev.to/mattia/expand-your-future-extensions-in-dart-22j",
    title: "Expand your Future, extensions in Dart",
    description: t("extensionInDartDesc"),
    date: "2024-04-12",
    hashtags: ["flutter", "dart", "async"],
  },
  {
    link: "https://dev.to/mattia/flutter-not-yet-ready-for-web-1jm6",
    title: "Flutter, not yet ready for web",
    description: t("flutterWebNotReady"),
    date: "2023-12-12",
    hashtags: ["flutter", "dart", "javascript"],
  },
  {
    link: "https://dev.to/mattia/react-hooks-and-fiber-deep-diving-gi1",
    title: "React Hooks and Fiber deep diving",
    description: t("reactHooksDeppDiving"),
    date: "2023-10-28",
    hashtags: ["react", "javascript"],
  },
  {
    link: "https://dev.to/mattia/flutter-monorepo-dependency-injection-1k1d",
    title: "Flutter Monorepo & Dependency Injection",
    description: t("flutterAndMonorepo"),
    date: "2023-10-10",
    hashtags: ["flutter", "dart", "dependency_injection"],
  },
  {
    link: "https://dev.to/mattia/mastering-dependency-injection-in-flutter-13bh",
    title: "Mastering dependency injection in Flutter",
    description: t("flutterDI"),
    date: "2023-08-10",
    hashtags: ["flutter", "dart", "dependency_injection"],
  },
];

export { posts };
