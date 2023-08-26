import { BiMailSend } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import BrandText from "./BrandText";

function Footer() {
  return (
    <footer className="flex w-full justify-center">
      <div className="w-11/12 border-t-2 border-palette-700">
        <div className="fluid__container py-24 flex items-start justify-around">
          <div className="flex flex-col items-start gap-4">
            <a
              href="#"
              className=" flex justify-center items-center gap-1 text-3xl"
            >
              <BrandText />
            </a>
            <div className="flex items-center text-2xl text-neutral-300 gap-4">
              <a href="https://jhonatapolito.live/" target="_blank">
                <BsGlobe />
              </a>
              <a href="https://github.com/jhonataplt" target="_blank">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jhonatapolito/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="mailto: jhonata.demuner@gmail.com">
                <BiMailSend />
              </a>
            </div>
          </div>
          <ul className="text-neutral-300  flex flex-col gap-2">
            <p className="text-lg text-white font-bold pb-2">Company</p>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
          </ul>
          <ul className="text-neutral-300 flex flex-col gap-2">
            <p className="text-lg text-white font-bold pb-2">Product</p>
            <li>
              <a href="">Docs</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
          </ul>
          <div>
            <div className="text-white text-lg font-bold pb-4">
              <div className="flex">
                © Copyright 2023
                <span className="text-lg pl-2">
                  <BrandText />
                </span>
                .
              </div>
              All rights reserved.
            </div>
            <a href="" className="text-neutral-300 text-md">
              Terms & Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
