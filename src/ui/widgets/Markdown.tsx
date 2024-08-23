import ReactMarkdown from "react-markdown";
import {A, Text} from "./Common";

type Props = {
    children?: string
}

function Markdown(props: Props): JSX.Element {
    return <ReactMarkdown components={{
        a: ({children, href}) => <A href={href} semantic={"primary"} newTab={true}>{children}</A>,
        h1: ({children}) => <Text className={"text-5xl mt-6 mb-2"} type={"h1"}>{children}</Text>,
        h2: ({children}) => <Text className={"text-4xl mt-6 mb-2"} type={"h2"}>{children}</Text>,
        h3: ({children}) => <Text className={"text-3xl mt-6 mb-2"} type={"h3"}>{children}</Text>,
        h4: ({children}) => <Text className={"text-2xl mt-4 mb-1"} type={"h4"}>{children}</Text>,
        h5: ({children}) => <Text className={"text-xl mt-4 mb-1"} type={"h5"}>{children}</Text>,
        code: ({children}) => <Text type={"code"}>{children}</Text>,
        p: ({children}) => <Text type={"p"}>{children}</Text>
    }}>
        {props.children}
    </ReactMarkdown>
}

export default Markdown;