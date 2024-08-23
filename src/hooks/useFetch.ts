import useSWR from "swr";


function useFetch<T, Error = unknown>(input: string, init?: RequestInit) {
    return useSWR<T, Error, string>(input, () => fetch(input, init).then(res => res.json()));
}

type DartPackage = {
    name: string;
    latest: DartPackageVersion
    versions: DartPackageVersion[]
}
type DartPackageVersion = {
    version: string;
    pubspec: {
        name: string;
        description: string;
    }
}

// blocked from CORS :(
function useDartPackage(packageName: string) {
    return useFetch<DartPackage>(`https://pub.dev/api/packages/${packageName}`, {})
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

export {useFetch, useDartPackage, useDevArticle};