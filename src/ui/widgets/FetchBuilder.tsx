import {useFetch} from "../../hooks";

type Props<T> = {
    input: string;
    init?: RequestInit
    Loader?: () => JSX.Element
    Error?: (e: unknown) => JSX.Element
    children: (response: T) => JSX.Element
}

/**
 * use {@link useFetch} to fetch data
 * @param {Props} props
 */
function FetchBuilder<T>(props: Props<T>): JSX.Element {
    const {init, input, Error, Loader, children} = props
    const {data, isLoading, error} = useFetch<T>(input, init);

    if (error) {
        return Error?.(error) ?? <></>
    }

    if (isLoading) {
        return Loader?.() ?? <></>
    }

    return children(data!)
}

export default FetchBuilder;