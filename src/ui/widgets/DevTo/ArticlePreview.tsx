import {useDevArticle, useFullScreen} from "../../../hooks";
import Markdown from "../Markdown.tsx";
import {A, Button} from "../Common";
import FullScreenModal from "../FullScreen/FullScreenModal.tsx";
import Spinner from "../Spinner.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import {useAppTranslation} from "../../../locale";

type Props = {
    /**
     * article id
     */
    article: number;
}

/**
 * A preview button with a modal
 * shoWing the devToArticle preview using {@link useDevArticle}
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function DevToArticlePreview({article}: Props): JSX.Element {

    const {t} = useTranslation();
    const {removeFullScreen, fullScreen, setFullScreen} = useFullScreen();


    return <>
        {
            fullScreen && <FullScreenModal
                onClose={removeFullScreen}
            >
                <_Content article={article}/>
            </FullScreenModal>
        }
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

function _Content(props: Props) {
    const {data, isLoading} = useDevArticle(props.article)
    const {t} = useAppTranslation()

    if (isLoading) {
        return <Spinner className={"mt-8"}/>
    }

    if (!data) return <></>

    return <div>
        <Markdown>
            {data.body_markdown.substring(0, 1000).concat('\n\n...')}
        </Markdown>
        <A
            hover={true}
            className={"text-3xl block mt-8"}
            href={data.url}
            semantic={"primary"}
            newTab={true}>
            {t("viewMore")}
        </A>
    </div>
}

export default DevToArticlePreview
