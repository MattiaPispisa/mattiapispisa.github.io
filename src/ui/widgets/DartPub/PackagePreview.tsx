import type { JSX } from "react";
import { VersionBadge } from "../Common";
import { useDartPackage } from "../../../hooks";

type Props = {
    package: string;
};

function DartPackagePreview(props: Props): JSX.Element {
    const { data, isLoading } = useDartPackage(props.package);

    return <VersionBadge version={data?.version} isLoading={isLoading} />;
}

export default DartPackagePreview;
