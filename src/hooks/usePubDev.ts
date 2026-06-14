import { useFetch } from "./useFetch";

import { schema, getSchemaByType, is, a } from 'en-yup-decorator';

@schema({ compose: (s) => s.transform((o) => ({ ...o, version: o.message })) })
class PubDevPackage {
    constructor(args: { version: string }) {
        this.version = args.version
    }

    @is(a.string().required())
    version: string;
}

function useDartPackage(packageName: string) {
    return useFetch<PubDevPackage>({
        input: `https://img.shields.io/pub/v/${packageName}.json`,
        schema: getSchemaByType(PubDevPackage)
    })
}

export { useDartPackage, };