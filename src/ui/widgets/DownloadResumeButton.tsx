import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";

const DownloadResumeButton = () => {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <button
      onClick={handleDownload}
      className={
        "bg-neutral-600 hover:bg-primary dark:hover:bg-primary-dark text-white flex flex-row gap-2 items-center font-bold uppercase py-2 px-4 rounded focus:outline-none focus:ring focus:bg-primary dark:focus:bg-primary-dark"
      }
    >
      <FontAwesomeIcon icon={faFileArrowDown} />
      <p>Resume</p>
    </button>
  );
};

export default DownloadResumeButton;
