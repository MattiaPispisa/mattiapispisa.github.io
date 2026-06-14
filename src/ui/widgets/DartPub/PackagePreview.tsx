import type { JSX } from "react";
import { semanticToTextClass } from "../../../constants";
import { Skeleton } from "../Common";
import { useDartPackage } from "../../../hooks";

type Props = {
    package: string;
};

const VERSION_SKELETON = [{ width: "w-16", height: "h-5" }];

function DartPackagePreview(props: Props): JSX.Element {
    const { data, isLoading ,error} = useDartPackage(props.package);
    console.log("error",error)

    if (isLoading) {
        return <Skeleton items={VERSION_SKELETON} />;
    }

    if (!data) {
        return <></>;
    }

    return (
        <span className={`text-xs px-2 py-0.5 bg-gray-200 rounded-full print:hidden ${semanticToTextClass["primary"]}`}>
            {data.version}
        </span>
    );
}

export default DartPackagePreview;
