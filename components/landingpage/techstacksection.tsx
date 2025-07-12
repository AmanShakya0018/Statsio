import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";

const TechStackSection = () => {
  return (
    <div className="flex items-center gap-4 pt-2 text-neutral-400">
      <p className="text-sm text-neutral-400 md:text-[1rem]">Built with</p>
      <div>
        <RiNextjsFill className="size-5 md:size-6" />
      </div>
      <div>
        <BiLogoPostgresql className="size-5 md:size-6" />
      </div>
      <div>
        <SiPrisma className="size-4 md:size-5" />
      </div>
      <div>
        <FaReact className="size-4 md:size-5" />
      </div>
      <div>
        <SiTypescript className="size-4 md:size-5" />
      </div>
      <div>
        <SiTailwindcss className="size-4 md:size-5" />
      </div>
    </div>
  );
};
export default TechStackSection;
