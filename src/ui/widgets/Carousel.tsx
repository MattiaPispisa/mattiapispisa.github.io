import { useState, useEffect, useMemo } from "react";
import { useIntersectionObserver, useResizeEnd } from "../../hooks";

type Props = {
  items: JSX.Element[];
};

const scrollTimeInMs = 25;

const Carousel = ({ items }: Props) => {
  const { visibleItemCount, setScroll } = useLoopScroll();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (isIntersecting) {
      setScroll(true);
      return;
    }
    setScroll(false);
  }, [isIntersecting]);

  const duplicatedItems = useMemo(() => {
    // no infinity loop
    if (items.length <= 0 || !visibleItemCount) {
      return items;
    }

    // icons must cover at least double the length of the screen
    let result = [...items];
    while (result.length < visibleItemCount * 2) {
      result = result.concat(items);
    }
    return result;
  }, [visibleItemCount, items]);

  return (
    <div
      ref={ref}
      id={"carousel-container"}
      className={"flex overflow-hidden w-full"}
      onMouseEnter={() => setScroll(false)}
      onMouseLeave={() => setScroll(true)}
    >
      <div id={"carousel-content"} className="flex items-center">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            id={`carousel-item-${index}`}
            className={`carousel-item-${index} pr-4`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

type Width = number | undefined;

function useLoopScroll() {
  const [scroll, setScroll] = useState<boolean>(true);

  const [containerWidth, setContainerWidth] = useState<Width>(undefined);
  const [itemWidth, setItemWidth] = useState<Width>(undefined);
  useResizeEnd(() => setContainerWidth(getWidth("carousel-container")));

  const visibleItemCount = useMemo(() => {
    if (!containerWidth || !itemWidth) {
      return;
    }

    return Math.ceil(containerWidth / itemWidth) + 1;
  }, [containerWidth, itemWidth]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContainerWidth(getWidth("carousel-container"));
      setItemWidth(getWidth("carousel-item-1"));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = htmlElement("carousel-container");
      if (!container) {
        return;
      }

      if (!itemWidth) {
        return;
      }

      if (!scroll) {
        return;
      }

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      let newScrollLeft = container.scrollLeft + 1;

      if (newScrollLeft > maxScrollLeft) {
        newScrollLeft = 0;
      }

      container.scrollTo({
        left: newScrollLeft,
        behavior: "instant",
      });
    }, scrollTimeInMs);

    return () => clearInterval(interval);
  }, [itemWidth, scroll]);

  return { visibleItemCount, setScroll };
}

function htmlElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function getWidth(id: string): Width {
  return htmlElement(id)?.clientWidth;
}

export default Carousel;
