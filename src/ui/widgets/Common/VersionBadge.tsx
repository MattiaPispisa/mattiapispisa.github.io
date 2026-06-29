import type { JSX } from "react";
import { semanticToTextClass } from "../../../constants";
import Pill from "./Pill";
import Skeleton from "./Skeleton";

const VERSION_SKELETON = [{ width: "w-16", height: "h-5" }];

type Props = {
  version?: string;
  isLoading: boolean;
};

/**
 * Renders a package version as a primary-colored pill, with a skeleton while
 * loading and nothing when there is no version. Shared by the npm/pub.dev
 * package previews.
 */
function VersionBadge({ version, isLoading }: Props): JSX.Element {
  if (isLoading) {
    return <Skeleton items={VERSION_SKELETON} />;
  }

  if (!version) {
    return <></>;
  }

  return (
    <Pill className={`text-xs px-2 py-0.5 ${semanticToTextClass["primary"]}`}>
      {version}
    </Pill>
  );
}

export default VersionBadge;
