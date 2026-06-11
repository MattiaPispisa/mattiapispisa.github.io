import useSWR from "swr";


function useFetch<T, Error = unknown>(input: string, init?: RequestInit) {
    return useSWR<T, Error, string>(input, () => fetch(input, init).then(res => res.json()));
}

type PubDevPackage = {
    version: string;
}

function useDartPackage(packageName: string) {
    return useSWR<PubDevPackage, unknown, string>(
        `https://img.shields.io/pub/v/${packageName}.json`,
        (url: string) =>
            fetch(url)
                .then((res) => res.json())
                .then((data: { message: string }) => ({ version: data.message }))
    );
}

type NpmPackage = {
    version: string;
}

function useNpmPackage(packageName: string) {
    return useSWR<NpmPackage, unknown, string>(
        `https://img.shields.io/npm/v/${packageName}.json`,
        (url: string) =>
            fetch(url)
                .then((res) => res.json())
                .then((data: { message: string }) => ({ version: data.message }))
    );
}

type DevArticle = {
    id: number;
    title: string;
    description: string;
    url: string;
    comments_count: number;
    published_timestamp: string;
    positive_reactions_count: number;
    tags: string[]
    body_markdown: string;
}

function useDevArticle(articleId: number) {
    return useFetch<DevArticle>(`https://dev.to/api/articles/${articleId}`)
}

export {useFetch, useDartPackage, useNpmPackage, useDevArticle};