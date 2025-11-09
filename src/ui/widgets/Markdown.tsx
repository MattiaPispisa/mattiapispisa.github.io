import ReactMarkdown from "react-markdown";
import {A, Text} from "./Common";
import Title from "./Common/Title.tsx";
import {semanticToTextClass} from "../../constants";

type Props = {
    /**
     * markdown content
     */
    children?: string
}

/**
 * Styled markdown
 * @param {Props} props
 * @return {JSX.Element} jsxElement
 */
function Markdown(props: Props): JSX.Element {
    return <ReactMarkdown components={{
        a: ({children, href}) => <A hover={true} href={href} semantic={"primary"} newTab={true}>{children}</A>,
        h1: ({children}) => <Title className={"mt-6 mb-2"}>{children}</Title>,
        h2: ({children}) => <Text size="4xl" className="mt-6 mb-2" type="h2">{children}</Text>,
        h3: ({children}) => <Text size="3xl" className="mt-6 mb-2" type="h3">{children}</Text>,
        h4: ({children}) => <Text size="2xl" className="mt-4 mb-1" type="h4">{children}</Text>,
        h5: ({children}) => <Text size="xl" className="mt-4 mb-1" type="h5">{children}</Text>,
        code: ({children}) => <Text type={"code"} className="break-words whitespace-pre-wrap">{children}</Text>,
        p: ({children}) => <Text type={"p"}>{children}</Text>,
        ul: ({children}) => <ul className={`list-disc pl-5 ${semanticToTextClass["default"]}`}>{children}</ul>,
        li: ({children}) => <li>{<Text>{children}</Text>}</li>,
    }}>
        {props.children}
    </ReactMarkdown>
}

export default Markdown;