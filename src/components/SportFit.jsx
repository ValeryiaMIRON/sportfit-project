
import './SportFit.css';
import sportFit from "../assets/images/sportFit.png";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import fourth from "../assets/images/fourth.png";
import fifth from "../assets/images/fifth.png";
import Carousel from "./Carousel";
import ProgramInfo from "./ProgramInfo";

function SportFit() {
  const images = [first, second, third, fourth, fifth];

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
          <ProgramInfo />
          <Carousel images={images} />
        </section>
      </div>
    </main>
  );
}

export default SportFit;

