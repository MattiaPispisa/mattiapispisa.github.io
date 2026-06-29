import type { JSX } from "react";
import { useNpmPackage } from "../../../hooks";
import { VersionBadge } from "../Common";

type Props = {
    package: string;
};

function NpmPackagePreview(props: Props): JSX.Element {
    const { data, isLoading } = useNpmPackage(props.package);

    return <VersionBadge version={data?.version} isLoading={isLoading} />;
}

export default NpmPackagePreview;
