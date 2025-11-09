import { BookModel } from "../resume/BooksRead/model";
import { Text } from "./Common";
import A from "./Common/A";

type Props = {
  book: BookModel;
  className?: string;
};

function BookCard({ book, className = "" }: Props) {
  return (
    <>
      {/* Normal view - card with image */}
      <A href={book.link} className={`group block ${className} print:hidden`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-shadow duration-300 overflow-hidden">
          <div className="aspect-[3/4] relative overflow-hidden">
            <img
              src={book.coverImage}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <div className="p-4">
            <Text type="h3" className="font-semibold mb-1 line-clamp-2">
              {book.title}
            </Text>
            <Text semantic="secondary" size="xs" className="mb-2">
              {book.author}
            </Text>
          </div>
        </div>
      </A>

      {/* Print view - simple list item */}
      <div className="hidden print:block print:mb-2">
        <A href={book.link} className="print:no-underline">
          <Text type="span" size="sm" className="font-semibold print:text-black">
            {book.title}
          </Text>
          <Text type="span" semantic="secondary" size="xs" className="ml-2 print:text-gray-600">
            - {book.author}
          </Text>
        </A>
      </div>
    </>
  );
}

export default BookCard;
