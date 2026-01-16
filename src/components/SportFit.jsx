
import { useRef, useState } from "react";
import './SportFit.css';
import sportFit from "../assets/images/sportFit.png";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import fourth from "../assets/images/fourth.png";
import fifth from "../assets/images/fifth.png";
import arrowRight from "../assets/images/left.png";
import arrowLeft from "../assets/images/right.png";

function SportFit() {
  const images = [first, second, third, fourth, fifth];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");
  const carouselRef = useRef(null);

  const handleLeadClick = () => {
    setMessage("Событие Lead сработало!");
    setTimeout(() => setMessage(""), 2000);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };


  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: index * width,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    const scrollLeft = carouselRef.current.scrollLeft;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };


  return (
    <main className="relative w-full overflow-hidden bg-black">
      <div className="hidden md:block absolute w-full h-full bg-[url('./assets/images/background.png')] bg-cover bg-right-top"></div>

      <div className="block lg:hidden absolute w-full h-full bg-[url('./assets/images/background-mobile.png')] bg-cover bg-center" style={{ backgroundPosition: 'center 9%' }}></div>

      <div className="relative w-full box-border px-5 md:px-[60px] lg:px-[120px]">
        <img className="relative w-[221px] max-w-full h-auto pt-[9px] lg:pt-[47px]" src={sportFit} alt="icon-sport-fit" />

        <div className="divider">
          <span />
        </div>

        <section className="content">
          <h1 className="font-bold text-[26px] md:text-[30px] 2xl:text-[65px] text-center lg:text-left">
            НОВАЯ ПРОГРАММА
          </h1>
          <h1 className="font-bold text-[26px] md:text-[30px] 2xl:text-[65px] text-center lg:text-left">
            ТРЕНИРОВОК НА 30 ДНЕЙ
          </h1>
          <p className="font-normal text-[18px] lg:text-[22px] 2xl:text-[30px] mt-4 mb-[700px] sm500:mb-[1100px] lg:mb-20 text-center lg:text-left">
            Достигай результата без диет и стресса
          </p>
          <button className="btn-cta w-full lg:w-auto mx-auto lg:mx-0" onClick={handleLeadClick}>
            ПОПРОБОВАТЬ БЕСПЛАТНО
          </button>

          {message && (
            <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-[#41B329] text-white px-4 py-2 rounded shadow-lg z-50">
              {message}
            </div>
          )}

          <h3 className="font-bold text-[28px] lg:text-[35px] mt-[100px] lg:mt-0 lg:pt-[400px] 2xl:pt-[650px] pb-[60px]">
            ПРОГРАММА
          </h3>

          {/* КАРУСЕЛЬ */}
          <section className="relative mb-[70px] px-0 md:px-[131px]">
            <button onClick={scrollLeft} className="hidden lg:flex absolute left-[20px] top-1/2 -translate-y-1/2 rounded-full items-center justify-center z-10">
              <img src={arrowLeft} alt="arrow left" className="max-w-[77px] max-h-[77px]" />
            </button>

            <button onClick={scrollRight} className="hidden lg:flex absolute right-[20px] top-1/2 -translate-y-1/2 rounded-full items-center justify-center z-10">
              <img src={arrowRight} alt="arrow right" className="max-w-[77px] max-h-[77px]" />
            </button>

            <div ref={carouselRef} className="flex overflow-x-auto scroll-smooth scrollbar-hide" onScroll={handleScroll}>
              {images.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-full lg:w-[calc((100%)/3)]">
                  <img src={src} alt={`slide-${index}`} className="w-full h-auto rounded-xl" />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 lg:hidden gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full transition-colors"
                  style={{ backgroundColor: currentIndex === index ? '#41B329' : '#FFFFFF' }}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>
          </section>
          {/* КОНЕЦ КАРУСЕЛИ */}
        </section>
      </div>
    </main>
  );
}

export default SportFit;

