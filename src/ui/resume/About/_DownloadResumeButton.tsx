import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { resumeIt, resumeEn } from "../../../constants";
import { useTranslation } from "react-i18next";

const DownloadResumeButton = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = _getResumeUrl(language);
    link.setAttribute("download", `resume_${language}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [language]);

  return (
    <button
      onClick={handleDownload}
      className={
        "bg-neutral-600 hover:bg-primary dark:hover:bg-primary-dark text-white flex flex-row gap-2 items-center font-bold uppercase py-2 px-4 rounded focus:outline-none  focus:bg-primary dark:focus:bg-primary-dark print:hidden"
      }
    >
      <FontAwesomeIcon icon={faFileArrowDown} />
      <p>{t("curriculum")}</p>
    </button>
  );
};

function _getResumeUrl(language: string) {
  if (language.toLowerCase().includes("it")) {
    return resumeIt;
  }
  return resumeEn;
}

export default DownloadResumeButton;
