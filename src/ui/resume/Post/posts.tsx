import { LanguageResolver } from "../../../locale";
import { PostModel } from "./model";
import { DevToArticleDetail } from "../../widgets";

const posts: (t: LanguageResolver) => PostModel[] = (t) => [
  {
    link: "https://dev.to/mattia/go-router-navigation-observer-1gj4",
    title: "Go Router Navigation Observer",
    description: (
      <DevToArticleDetail
        id={2497373}
        description={t("goRouterNavigationObserverDesc")}
      />
    ),
    date: "2025-05-17",
    hashtags: ["dart", "go_router"],
  },
  {
    link: "https://dev.to/mattia/efficient-logging-in-applications-1id4",
    title: "Efficient logging in applications",
    description: (
      <DevToArticleDetail
        id={1968794}
        description={t("efficientLoggingInApplicationsDesc")}
      />
    ),
    date: "2024-09-07",
    hashtags: ["dart", "logging"],
  },
  {
    link: "https://dev.to/mattia/expand-your-future-extensions-in-dart-22j",
    title: "Expand your Future, extensions in Dart",
    description: (
      <DevToArticleDetail id={1817135} description={t("extensionInDartDesc")} />
    ),
    date: "2024-04-12",
    hashtags: ["flutter", "dart", "async"],
  },
  {
    link: "https://dev.to/mattia/flutter-not-yet-ready-for-web-1jm6",
    title: "Flutter, not yet ready for web",
    description: (
      <DevToArticleDetail id={1694811} description={t("flutterWebNotReady")} />
    ),
    date: "2023-12-12",
    hashtags: ["flutter", "dart", "javascript"],
  },
  {
    link: "https://dev.to/mattia/react-hooks-and-fiber-deep-diving-gi1",
    title: "React Hooks and Fiber deep diving",
    description: (
      <DevToArticleDetail
        id={1647545}
        description={t("reactHooksDeppDiving")}
      />
    ),
    date: "2023-10-28",
    hashtags: ["react", "javascript"],
  },
  {
    link: "https://dev.to/mattia/flutter-monorepo-dependency-injection-1k1d",
    title: "Flutter Monorepo & Dependency Injection",
    description: (
      <DevToArticleDetail id={1573381} description={t("flutterAndMonorepo")} />
    ),
    date: "2023-10-10",
    hashtags: ["flutter", "dart", "dependency_injection"],
  },
  {
    link: "https://dev.to/mattia/mastering-dependency-injection-in-flutter-13bh",
    title: "Mastering dependency injection in Flutter",
    description: (
      <DevToArticleDetail id={1563960} description={t("flutterDI")} />
    ),
    date: "2023-08-10",
    hashtags: ["flutter", "dart", "dependency_injection"],
  },
];

export { posts };
