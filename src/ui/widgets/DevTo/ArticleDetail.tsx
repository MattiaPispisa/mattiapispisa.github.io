import {Text} from "../Common";
import DevToArticle from "./ArticlePreview.tsx";

type Props = {
    id: number;
    description: string | JSX.Element;
}

function ArticleDetail(props: Props) {
    const {id, description} = props;

    return <div className={"flex flex-col gap-2 items-start"}>
        {typeof description === "string" ? <Text>{description}</Text> : description}
        <DevToArticle article={id}/>
    </div>
}

export default ArticleDetail;