import { BsGithub } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";

function ContactForm() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="rounded-xl h-3/5 max-w-[1280px] w-full overflow-hidden border-2 border-palette-700 flex bg-palette-100 backdrop-filter backdrop-blur-sm bg-opacity-20 ">
        <div className="h-full w-2/5  bg-palette-700 p-8 flex flex-col items-start justify-between shrink-0">
          <h3 className="text-3xl font-semibold text-palette-900 pb-4">
            Contribute your way!
          </h3>
          <p className=" text-neutral-200 text-lg">
            Got an idea or spotted a bug? Drop us a message, and we&apos;ll get
            back to you ASAP.
            <br />
            Feel free to dive into our {" "}
            <a
              href="https://github.com/jhonataplt/clicko"
              className="text-palette-100 font-semibold"
            >
              GitHub repository
            </a>{" "}
            to help improve our open-source project!
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
          <textarea
            placeholder="Message"
            className="border border-palette-700 rounded-lg h-full bg-palette-200 p-2 text-white outline-none"
          />
          <button className="bg-palette-800 text-palette-100 font-semibold px-4 py-2 rounded-md w-fit flex gap-2 items-center">
            Send message <RiMailSendFill />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
