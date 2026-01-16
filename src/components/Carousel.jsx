import { useRef, useState } from "react";
import './SportFit.css';
import arrowRight from "../assets/images/left.png";
import arrowLeft from "../assets/images/right.png";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const scrollToIndex = (index) => {
        if (!carouselRef.current) return;
        const width = carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({ left: index * width, behavior: 'smooth' });
        setCurrentIndex(index);
    };

    const handleScroll = () => {
        if (!carouselRef.current) return;
        const width = carouselRef.current.clientWidth;
        const index = Math.round(carouselRef.current.scrollLeft / width);
        setCurrentIndex(index);
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth / 3;
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth / 3;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
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
    );
}

export default Carousel;
