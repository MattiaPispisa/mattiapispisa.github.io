import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

type Props = {
  items: JSX.Element[];
};

const Carousel = ({ items }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <button
          className="absolute left-0 z-10 p-3 bg-gray-900 text-white rounded-full focus:outline-none"
          onClick={goToPreviousSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="absolute right-0 z-10 p-3 bg-gray-900 text-white rounded-full focus:outline-none"
          onClick={goToNextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="flex overflow-x-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
