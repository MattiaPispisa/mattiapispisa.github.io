import { mail } from "../../constants";

/**
 * Simple print footer at the end of the document
 */
function PrintSimpleFooter() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="hidden print:block print:mt-8 print:pt-2 print:border-t print:border-gray-300">
      <div className="flex justify-between items-center text-xs text-gray-600">
        <div>
          <span className="font-semibold">Resume</span>
          <span className="mx-2">•</span>
          <span>{mail}</span>
        </div>
        <span>Generated: {currentDate}</span>
      </div>
    </div>
  );
}

export default PrintSimpleFooter;

