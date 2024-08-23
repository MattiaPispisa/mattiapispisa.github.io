import {useDartPackage} from "../../../hooks";
import {sematicToTextClass} from "../../../constants";

type Props = {
    package: string
}

function DartPackageVersion(props: Props): JSX.Element {
    const {data} = useDartPackage(props.package)

    if (!data) {
        return <></>
    }

    return <div className={`bg-gray-200 text-center px-4 py-2 rounded-full text-sm ${sematicToTextClass["primary"]}`}>
        {data.latest.version}
    </div>
}

export default DartPackageVersion;