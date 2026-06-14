import useSWR from "swr";
import { AnySchema } from "yup"

type UseFetchArgs<T> = { input: string, init?: RequestInit, schema: AnySchema<T> }

function useFetch<T, Error = unknown>(args: UseFetchArgs<T>) {
    const { input, schema, init } = args

    return useSWR<T, Error, string>(input, async () => {
        return fetch(input, init).then(async (res) => {
            const value = await res.json();
            return await schema.validate(value);
        })
    });
}






export { useFetch, };