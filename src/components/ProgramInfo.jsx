
import { useState } from "react";
import './SportFit.css';

function ProgramInfo() {
    const [message, setMessage] = useState("");

    const handleLeadClick = () => {
        setMessage("Событие сработало!");
        setTimeout(() => setMessage(""), 2000);
    };

    return (
        <div>
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
        </div>
    );
}

export default ProgramInfo;

