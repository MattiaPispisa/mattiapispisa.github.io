import { useState, useMemo, useCallback } from "react";

function useHashtags(initial?: Record<string, boolean>) {
  const [hashtags, setHashtagsSelected] = useState(initial ?? _empty);
  const hashtagsSelected = useMemo(() => {
    return Object.entries(hashtags)
      .filter(([, selected]) => selected)
      .map(([hashtag]) => hashtag);
  }, [hashtags]);

  const ignoreFilters = useMemo(() => {
    return Object.values(hashtags).filter((sel) => sel).length === 0;
  }, [hashtags]);

  /**
   * set an hashtag selected
   */
  const addHashtag = useCallback((hashtag: string) => {
    setHashtagsSelected((prev) => ({ ...prev, [hashtag]: true }));
  }, []);

  /**
   * remove a selected hashtag
   */
  const removeHashtag = useCallback((hashtag: string) => {
    setHashtagsSelected((prev) => ({ ...prev, [hashtag]: false }));
  }, []);

  /**
   * filter to apply on an unknown item.
   *
   * return true if has at least one hashtag of `hashtagsSelected`
   */
  const canView = useCallback(
    (item: { hashtags: string[] }) => {
      return (
        item.hashtags.some((hashtag) => hashtags[hashtag]) || ignoreFilters
      );
    },
    [hashtags, ignoreFilters]
  );

  return {
    hashtagsSelected,
    addHashtag,
    removeHashtag,
    canView,
  };
}

const _empty: Record<string, boolean> = {};

export { useHashtags };
