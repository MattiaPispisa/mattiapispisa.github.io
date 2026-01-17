import { LanguageResolver } from "../../../locale";
import { A, List, Text } from "../../widgets";
import { ProjectModel } from "./model";

const projects: (t: LanguageResolver) => ProjectModel[] = (t) => [
  {
    title: "Rich i18n",
    hashtags: [t("library"), "dart"],
    link: "https://pub.dev/packages/rich_i18n",
    description: t("richI18nDesc"),
  },
  {
    title: "Dart Time",
    hashtags: [t("library"), "dart"],
    link: "https://pub.dev/packages/dart_time",
    description: t("dartTimeDesc"),
  },
  {
    title: "CRDT",
    hashtags: [t("library"), "dart"],
    link: "https://pub.dev/packages/crdt_lf",
    description: (
      <>
        <Text>{t("crdtDesc")}</Text>
        <List
          items={[
            {
              text: t("hlcDartDesc"),
              href: "https://pub.dev/packages/hlc_dart",
            },
            {
              text: t("crdtLfDesc"),
              href: "https://pub.dev/packages/crdt_lf",
            },
            {
              text: t("crdtSyncDesc"),
              href: "https://pub.dev/packages/crdt_socket_sync",
            },
            {
              text: t("crdtHivePlugin"),
              href: "https://pub.dev/packages/crdt_lf_hive",
            },
          ]}
        >
          {(item) => (
            <A semantic="default" hover={true} href={item.href}>
              {item.text}
            </A>
          )}
        </List>
      </>
    ),
  },

  {
    title: "En .env reader",
    description: t("enEnvReaderDesc"),
    hashtags: [t("library"), "typescript"],
    link: "https://marketplace.visualstudio.com/items?itemName=MattiaPispisa.en-env-editor",
  },
  {
    title: "En Yup Decorator",
    hashtags: [t("library"), "typescript"],
    description: t("enYupDecoratorDesc"),
    link: "https://www.npmjs.com/package/en-yup-decorator",
  },
  {
    title: "Data Migration",
    hashtags: [t("library"), "dart"],
    description: t("dataMigrationDesc"),
    link: "https://pub.dev/packages/data_migration",
  },
  {
    title: "En Logger",
    hashtags: [t("library"), "dart"],
    description: t("enLoggerDesc"),
    link: "https://pub.dev/packages/en_logger",
  },
  {
    title: "File uploader",
    hashtags: [t("library"), "dart"],
    description: (
      <>
        <Text>{t("fileUploaderDesc0")}</Text>
        <Text>{t("fileUploaderDescCapabilities")}</Text>
        <List
          items={[
            t("fileUploaderDescCapability1"),
            t("fileUploaderDescCapability2"),
            t("fileUploaderDescCapability3"),
          ]}
        >
          {(item) => <Text>{item}</Text>}
        </List>
        <A
          hover={true}
          semantic="primary"
          href="https://github.com/MattiaPispisa/file_uploader/tree/main/plugins"
        >
          {t("fileUploaderDescPlugins")}
        </A>
        <List
          items={[
            {
              href: "https://pub.dev/packages/http_file_uploader",
              text: t("fileUploaderDescPluginHttp"),
            },
            {
              href: "https://pub.dev/packages/dio_file_uploader",
              text: t("fileUploaderDescPluginDio"),
            },
          ]}
        >
          {(item) => (
            <A semantic="default" hover={true} href={item.href}>
              {item.text}
            </A>
          )}
        </List>
        <A
          semantic="primary"
          hover={true}
          href="https://pub.dev/packages/flutter_file_uploader"
        >
          {t("fileUploaderDescUIPackage")}
        </A>
      </>
    ),
    link: "https://pub.dev/packages/en_file_uploader",
  },
  {
    title: "Posix timezones",
    description: t("posixTzDesc"),
    hashtags: [t("library"), "dart"],
    link: "https://pub.dev/packages/posix_tz",
  },
  {
    title: "Good enums",
    description: t("goodEnumsDesc"),
    hashtags: [t("library"), "dart"],
    link: "https://pub.dev/packages/good_enums",
  },
  {
    title: "How to train your useReducer",
    description: (
      <div className="flex flex-col gap-2">
        <Text>{t("howToTrainYourUseReducerDesc0")}</Text>
        <A
          hover={true}
          semantic="primary"
          href="https://github.com/mvlabs/how-to-train-your-use-reducer"
        >
          {t("howToTrainYourUseReducerDesc1")}
        </A>
        <Text>{t("howToTrainYourUseReducerDesc2")}</Text>
      </div>
    ),
    hashtags: [t("talk"), "react"],
    link: "https://2023.reactjsday.it/talks_speakers/#mattia-pispisa",
  },
  {
    title: "Efficient tree manipulations",
    description: t("efficientTreeManipulation"),
    hashtags: [t("exercise"), "c", t("university")],
    link: "https://github.com/MattiaPispisa/asd_project_2017",
  },
];

export { projects };
