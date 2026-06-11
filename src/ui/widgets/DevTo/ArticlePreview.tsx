import type { JSX } from "react";
import {useDevArticle, useFullScreen} from "../../../hooks";
import Markdown from "../Markdown.tsx";
import {A, Button, Skeleton} from "../Common";
import FullScreenModal from "../FullScreen/FullScreenModal.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import {useAppTranslation} from "../../../locale";

type Props = {
    article: number;
}

function DevToArticlePreview({article}: Props): JSX.Element {
    const {t} = useTranslation();
    const {removeFullScreen, fullScreen, setFullScreen} = useFullScreen();

    return <>
        {fullScreen && (
            <FullScreenModal onClose={removeFullScreen}>
                <Content article={article}/>
            </FullScreenModal>
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

const ARTICLE_SKELETON_ITEMS = [
    {},
    { width: "w-5/6" },
    {},
    { width: "w-4/6" },
    {},
    { width: "w-3/4" },
    {},
    { width: "w-5/6" },
    { width: "w-2/3" },
    {},
    { width: "w-4/5" },
    { width: "w-32", height: "h-8", className: "mt-8" },
];

function ArticleSkeleton(): JSX.Element {
    return <Skeleton className="w-full sm:w-130 md:w-170" items={ARTICLE_SKELETON_ITEMS}/>;
}

function Content(props: Props) {
    const {data, isLoading} = useDevArticle(props.article)
    const {t} = useAppTranslation()

    if (isLoading) {
        return <ArticleSkeleton/>
    }

    if (!data) return <></>

    return <div className="w-full sm:w-130 md:w-170">
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
