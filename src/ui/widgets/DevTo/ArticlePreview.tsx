import type { JSX } from "react";
import {lazy, Suspense} from "react";
import {useFullScreen} from "../../../hooks";
import {Button} from "../Common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";
import {useTranslation} from "react-i18next";

const ArticlePreviewModal = lazy(() => import("./ArticlePreviewModal.tsx"));

type Props = {
    article: number;
}

function DevToArticlePreview({article}: Props): JSX.Element {
    const {t} = useTranslation();
    const {removeFullScreen, fullScreen, setFullScreen} = useFullScreen();

    return <>
        {fullScreen && (
            <Suspense fallback={<></>}>
                <ArticlePreviewModal article={article} onClose={removeFullScreen}/>
            </Suspense>
        )}
        <Button
            semantic={"secondary"}
            variant={"outlined"}
            icon={<FontAwesomeIcon icon={faEye}/>}
            text={t("preview")}
            onClick={setFullScreen}
            size={"sm"}
            className="print:hidden"
        />
    </>
}

export default DevToArticlePreview
