import { useState, useMemo } from "react";
import { useAppTranslation } from "../../../locale";
import SubTitle from "../../widgets/Common/SubTitle";
import Select from "../../widgets/Common/Select";
import BookCard from "../../widgets/BookCard";
import { books } from "./books";
import { BookModel } from "./model";
import { capitalize } from "../../../functions";
import { SelectOptionProps } from "../../widgets/Common/SelectOption";
import { Text } from "../../widgets";

const allBooksValue = "all";

function BooksRead() {
  const { t } = useAppTranslation();
  const { selectedTag, setSelectedTag, filteredBooks, tags } = useBooks();

  const selectOptions = useMemo<SelectOptionProps[]>(() => {
    return [
      { value: allBooksValue, component: <>{t("allBooks")}</> },
      ...tags.map((tag) => ({
        value: tag,
        component: <_TagOption tag={tag} />,
      })),
    ];
  }, [t, tags]);

  return (
    <>
      <SubTitle>{t("booksRead")}</SubTitle>

      <div className="mb-8">
        <div className="max-w-xs">
          <Select
            options={selectOptions}
            value={selectedTag}
            onSelected={setSelectedTag}
          />
        </div>
      </div>

      <_Grid>
        {filteredBooks.map((book, index) => (
          <BookCard
            key={`${book.title}-${index}`}
            book={book}
            className="w-full"
          />
        ))}
      </_Grid>

      {filteredBooks.length === 0 && <_NoBooksFound />}
    </>
  );
}

function useBooks() {
  const { t } = useAppTranslation();

  const allBooks = useMemo(() => books(t), [t]);

  const tags = useMemo<string[]>(() => _tags(books(t)), [t]);
  const [selectedTag, setSelectedTag] = useState<string>(allBooksValue);

  const filteredBooks = useMemo<BookModel[]>(() => {
    if (selectedTag === allBooksValue) {
      return allBooks;
    }
    return allBooks.filter((book) => book.tags.includes(selectedTag));
  }, [selectedTag, allBooks]);

  return {
    selectedTag,
    setSelectedTag,
    filteredBooks,
    tags,
  };
}

function _Grid({ children }: { children: JSX.Element[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {children}
    </div>
  );
}

function _NoBooksFound() {
  const { t } = useAppTranslation();

  return (
    <div className="text-center py-12">
      <Text semantic="secondary">{t("noBooksFound")}</Text>
    </div>
  );
}

function _TagOption({ tag }: { tag: string }) {
  return capitalize(tag.replace(/-/g, " "));
}

/**
 * Extract all unique tags from the books
 * @param books - The books to extract tags from
 * @returns An array of unique tags
 */
function _tags(books: BookModel[]): string[] {
  const tagSet = new Set<string>();
  books.forEach((book) => {
    book.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export default BooksRead;
