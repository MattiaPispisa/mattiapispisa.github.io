import type { JSX } from "react";
import { Text } from "../Common";
import NpmPackagePreview from "./PackagePreview.tsx";

type Props = {
    package: string;
    description: string | JSX.Element;
};

function NpmPackageDetail(props: Props): JSX.Element {
    const { package: pkg, description } = props;

    return (
        <div className="flex flex-col gap-2 items-start print:gap-1">
            {typeof description === "string" ? <Text>{description}</Text> : description}
            <NpmPackagePreview package={pkg} />
        </div>
    );
}

export default NpmPackageDetail;
