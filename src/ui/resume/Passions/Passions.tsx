import { igMontanri } from "../../../constants";
import { useAppTranslation } from "../../../locale";
import { A, SubTitle, Text } from "../../widgets";

function Passions() {
  const { t } = useAppTranslation();

  return (
    <>
      <SubTitle>{t("passions")}</SubTitle>
      <div className="flex flex-col gap-2 print:gap-1">
        <Text>{t("passionsCode")}</Text>
        <Text>{t("passionF1")}</Text>
        <Text>
          <>
            {t("passionGym")}
            <A hover={true} semantic="primary" className="pl-1 " href={igMontanri}>
              montanari_scarsi
            </A>
          </>
        </Text>
        <Text>{t("passionNerd")}</Text>
      </div>
    </>
  );
}

export default Passions;
