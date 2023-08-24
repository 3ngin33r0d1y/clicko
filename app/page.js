import { PiCursorClickBold } from "react-icons/pi";
import { PiTimerBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";

import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-palette-100">
      <Header />
      <Hero />
      <section className="flex flex-col items-center w-full h-screen bg-palette-200 z-10">
        <h1 className="text-4xl font-semibold text-palette-800 pt-16 pb-24">
          Our Features
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center max-w-[1280px] mx-auto border border-palette-100 rounded-xl bg-palette-100 backdrop-filter backdrop-blur-sm bg-opacity-20 divide-x-2 divide-palette-100">
          <Feature
            icon={<PiCursorClickBold className="text-5xl text-neutral-300" />}
            title="Click tracking"
            desc="See where your users are clicking on your website."
          />
          <Feature
            icon={<PiTimerBold className="text-5xl text-neutral-300" />}
            title="Watch time"
            desc="See how long your users are spending on your website."
          />
          <Feature
            icon={<PiEyeBold className="text-5xl text-neutral-300" />}
            title="Heatmaps"
            desc="See where your users are looking on your website."
          />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="rounded-xl h-3/5 max-w-[1280px] w-full overflow-hidden border-2 border-palette-700 flex bg-palette-100 backdrop-filter backdrop-blur-sm bg-opacity-20 ">
            <div className="h-full w-2/5  bg-palette-700 p-8 flex flex-col items-start justify-between shrink-0">
              <h3 className="text-3xl font-semibold text-palette-900 pb-4">
                Contribute in your own way
              </h3>
              <p className=" text-neutral-200 text-lg">
                Send us a message with a idea or even a bug report and
                we&apos;ll get back to you as soon as we can.
                <br />
                You can also contridute in our{" "}
                <a
                  href="https://github.com/jhonataplt/clicko"
                  className="text-palette-100 font-semibold"
                >
                  Github repository
                </a>{" "}
                since this is an open source project.
              </p>
              <a href="https://github.com/jhonataplt/clicko" target="_blank">
                <button className="bg-palette-200 text-neutral-200 px-4 py-2 rounded-lg mt-4 flex items-center gap-2">
                  <BsGithub /> GitHub repository
                </button>
              </a>
            </div>
            <form className="flex flex-col h-full w-full justify-between p-8 gap-8">
              <div className="flex gap-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border-b border-palette-700 w-[45%] text-white px-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-transparent border-b border-palette-700 w-full text-white px-2 outline-none"
                />
              </div>
              <textarea placeholder="Message" className="border border-palette-700 rounded-lg h-full bg-palette-200 p-2 text-white outline-none" />
              <button className="bg-palette-800 text-palette-100 font-semibold px-4 py-2 rounded-md w-fit flex gap-2 items-center">Send message <RiMailSendFill /></button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
