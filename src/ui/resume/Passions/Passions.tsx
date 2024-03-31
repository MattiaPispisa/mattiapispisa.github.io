import { useAppTranslation } from "../../../locale";
import { SubTitle, Text } from "../../widgets";

function Passions() {
  const { t } = useAppTranslation();

  return (
    <>
      <SubTitle>
        <>{t("passions")}</>
      </SubTitle>
      <div className="flex flex-col gap-2">
        <Text>{t("passionsCode")}</Text>
        <Text>{t("passionF1")}</Text>
        <Text>
          <>
            {t("passionGym")}
            <a className="pl-1 text-primary dark:text-primary-dark" href="https://www.instagram.com/montanari_scarsi/">
              montanari_scarsi
            </a>
          </>
        </Text>
        <Text>{t("passionNerd")}</Text>
      </div>
    </>
  );
}

export default Passions;
