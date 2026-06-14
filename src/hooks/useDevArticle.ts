import { a, getSchemaByType, is, schema } from "en-yup-decorator";
import { useFetch } from "./useFetch";

@schema()
class DevArticle {
    constructor(args: { id: number, url: string, body_markdown: string }) {
        this.id = args.id
        this.url = args.url
        this.body_markdown = args.body_markdown
    }

    @is(a.number().required())
    id: number;

    @is(a.string().required())
    url: string;

    @is(a.string().required())
    body_markdown: string;
}

function useDevArticle(articleId: number) {
    return useFetch<DevArticle>({ input: `https://dev.to/api/articles/${articleId}`, schema: getSchemaByType(DevArticle) })
}

export { useDevArticle }
