import { a, getSchemaByType, is, schema } from "en-yup-decorator";
import { useFetch } from "./useFetch";

@schema({ compose: (s) => s.transform((o) => ({ ...o, version: o.message })) })
class NpmPackage {
    constructor(args: { version: string }) {
        this.version = args.version
    }

    @is(a.string().required())
    version: string;
}

function useNpmPackage(packageName: string) {
    return useFetch<NpmPackage>(
        { input: `https://img.shields.io/npm/v/${packageName}.json`, schema: getSchemaByType(NpmPackage) }
    );
}

export { useNpmPackage }