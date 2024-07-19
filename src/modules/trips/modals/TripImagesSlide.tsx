import React, { useState } from "react";
import { MdClose, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function TripImagesSlide({
  tripImages,
  setShowDetailedImages,
}: {
  tripImages: string[];
  setShowDetailedImages: React.Dispatch<boolean>;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < tripImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBefore = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
  };

  const handleCurrentIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <main className="fixed rounded-md p-3 z-30 bg-white top-50% left-50% -translate-x-50% -translate-y-50% shadow-modal w-4/5 sm:w-3/5 md:w-5/6 xl:w-2/3 h-4/5 sm:h-5/6 md:h-1/2 xl:h-3/5">
        <div className="flex flex-col-reverse md:flex-row h-full">
          <section className="w-full md:w-1/3 flex flex-col h-2/3 md:h-full">
            <h1 className="text-gray-700 font-bold border-b-2 md:border-b border-gray-300 pt-2 pb-1 md:pt-0 md:pb-2">
              Gallery
            </h1>
            <div className="overflow-y-auto grow">
              <article className="grid grid-cols-2 gap-3 mt-2 mr-0 md:mr-2">
                {tripImages.map((image, i) => (
                  <div
                    key={i}
                    onClick={() => handleCurrentIndex(i)}
                    className={`${
                      i === currentIndex ? "border-2" : "border-0"
                    } h-24 border-blue-500 cursor-pointer flex justify-center`}
                  >
                    <img src={image} className="h-full object-cover" />
                  </div>
                ))}
              </article>
            </div>
          </section>
          <section className="w-full md:w-2/3 h-1/3 md:h-full bg-black relative flex justify-center">
            <img
              src={tripImages[currentIndex]}
              className="h-full object-contain"
            />
            <div
              onClick={handleNext}
              className="absolute right-0 top-50% bg-backdrop cursor-pointer"
            >
              <MdNavigateNext className="text-white text-xl md:text-3xl" />
            </div>
            <div
              onClick={handleBefore}
              className="absolute left-0 top-50% bg-backdrop cursor-pointer"
            >
              <MdNavigateBefore className="text-white text-xl md:text-3xl" />
            </div>
            <div
              onClick={() => setShowDetailedImages(false)}
              className="absolute top-1 right-1 md:top-2 md:right-2 bg-backdropGray rounded-full p-1 cursor-pointer"
            >
              <MdClose className="text-white md:text-2xl" />
            </div>
          </section>
        </div>
      </main>
      <div
        onClick={() => setShowDetailedImages(false)}
        className="fixed z-20 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
