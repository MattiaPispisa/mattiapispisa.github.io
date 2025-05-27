import { BookModel } from "../resume/BooksRead/model";
import { Text } from "./Common";
import A from "./Common/A";

type Props = {
  book: BookModel;
  className?: string;
};

function BookCard({ book, className = "" }: Props) {
  return (
    <A href={book.link} className={`group block ${className}`}>
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
  );
}

export default BookCard;
