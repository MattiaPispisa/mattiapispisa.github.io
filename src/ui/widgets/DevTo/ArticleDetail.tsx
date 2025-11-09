import {Text} from "../Common";
import DevToArticle from "./ArticlePreview.tsx";

type Props = {
    id: number;
    description: string | JSX.Element;
}

/**
 * Show {@link Props.description} and {@link DevToArticle}
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function ArticleDetail(props: Props): JSX.Element {
    const {id, description} = props;

    return <div className={"flex flex-col gap-2 items-start print:gap-1"}>
        {typeof description === "string" ? <Text>{description}</Text> : description}
        <DevToArticle article={id}/>
    </div>
}

export default ArticleDetail;