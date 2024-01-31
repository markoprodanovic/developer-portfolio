import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="mx-10 mt-8 flex justify-center mb-6 md:justify-end">
      <div className="flex flex-col items-center md:items-end">
        <a href="#" className="font-bold hover:text-btnHighlight">
          - Designed & Built by Marko -
        </a>
        <div className="flex gap-2 mt-4">
          <a href="https://github.com/markoprodanovic" target="_blank">
            <FaGithub
              size={25}
              className="text-matteBlack hover:text-btnHighlight"
            />
          </a>
          <a href="http://linkedin.com/in/mprodanovic" target="_blank">
            <FaLinkedin
              size={25}
              className="text-matteBlack hover:text-btnHighlight"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
