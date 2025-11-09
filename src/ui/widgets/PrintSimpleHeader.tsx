import { mail, profileSite } from "../../constants";

/**
 * Simple print header that flows with the document (not fixed)
 * Only visible in print mode, appears at the top of the first page
 */
function PrintSimpleHeader() {
  return (
    <div className="hidden print:block print:mb-4 print:pb-2 print:border-b print:border-gray-300">
      <div className="flex justify-between items-center text-xs text-gray-600">
        <div>
          <span className="font-semibold text-sm text-black">Mattia Pispisa</span>
          <span className="mx-2">•</span>
          <span>{mail}</span>
        </div>
        <span>{profileSite}</span>
      </div>
    </div>
  );
}

export default PrintSimpleHeader;

