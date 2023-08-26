import Image from "next/image";
import Dashboard from "@/public/dashboard_example.png";
import { PiArrowRightBold } from "react-icons/pi";

function Hero() {
  return (
    <section className="flex flex-col justify-between items-center h-screen w-full relative" id="hero">
      <div className="flex flex-col items-center justify-centerp pt-[6rem]">
        <p className="text-white text-6xl font-bold max-w-6xl text-center py-6 leading-tight">
          Click monitoring to give you all{" "}
          <span className="text-palette-800">information that you need</span>
        </p>
        <button>
          <a
            href=""
            className="bg-palette-700 text-2xl text-neutral-200 font-semibold p-4 rounded-md"
          >
            Get Started <PiArrowRightBold className="inline-block" />
          </a>
        </button>
      </div>
      <div className="w-full h-16 bg-palette-200 z-10"></div>
      <div className="absolute bottom-0 flex justify-center items-end w-full h-full">
        <Image
          src={Dashboard}
          alt="Dashboard"
          className="object-contain h-3/5 w-fit rounded-t-3xl shadow-[0px_0px_6rem_1rem_#C77DFF30]"
        />
      </div>
    </section>
  );
}

export default Hero;
