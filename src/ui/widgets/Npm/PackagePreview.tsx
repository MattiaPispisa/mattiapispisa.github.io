import type { JSX } from "react";
import { useNpmPackage } from "../../../hooks";
import { semanticToTextClass } from "../../../constants";
import { Skeleton } from "../Common";

type Props = {
    package: string;
};

const VERSION_SKELETON = [{ width: "w-16", height: "h-5" }];

function NpmPackagePreview(props: Props): JSX.Element {
    const { data, isLoading } = useNpmPackage(props.package);

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

export default NpmPackagePreview;
