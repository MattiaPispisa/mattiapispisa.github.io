import type { JSX } from "react";
import {useDevArticle} from "../../../hooks";
import Markdown from "../Markdown.tsx";
import {A, Skeleton} from "../Common";
import FullScreenModal from "../FullScreen/FullScreenModal.tsx";
import {useAppTranslation} from "../../../locale";

type Props = {
    article: number;
    onClose: () => void;
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

function Content({article}: { article: number }) {
    const {data, isLoading} = useDevArticle(article)
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

/**
 * Full screen modal showing the Dev.to {@link Content} for an article.
 * Loaded lazily so `react-markdown` only ships when the preview is opened.
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function ArticlePreviewModal({article, onClose}: Props): JSX.Element {
    return <FullScreenModal onClose={onClose}>
        <Content article={article}/>
    </FullScreenModal>
}

export default ArticlePreviewModal;
