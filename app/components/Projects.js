import Image from "next/image";
import Link from "next/link";
import { Bricolage_Grotesque, Averia_Serif_Libre } from "next/font/google";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: "800" });
const averia = Averia_Serif_Libre({ subsets: ["latin"], weight: "400" });

const Projects = () => {
  return (
    <div className="h-[80vh] w-full flex">
      <div className="h-full w-[50%] flex items-center justify-center relative">
        <Image src="/mockup1.png" alt="mockup" width={525} height={525} />
      </div>
      <div className="h-full w-[50%] flex items-center pl-[100px]">
        <div className="relative overflow-visible">
          <Image
            src={"/number1.svg"}
            alt="number 1"
            width={120}
            height={163}
            className="absolute top-[-17px] left-[-68px] z-[-1]"
          />
          <h3 className={`text-[48px] ${bricolage.className} mb-[15px]`}>
            CREATING A <span className="text-[#C1EC48]">BROWSER</span>
          </h3>
          <p className={`${averia.className} mb-[15px] w-[550px] text-[18px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            ultrices neque. Etiam nec pharetra quam, sed bibendum neque. Donec
            sed ligula ligula. Aenean vel ex eu leo suscipit egestas. Ut mauris
            turpis, pretium at nibh non, scelerisque fermentum lectus. Phasellus
            dapibus porttitor dignissim. Vestibulum eget libero vel turpis
            eleifend tristique. Donec vestibulum ullamcorper tortor non
            vestibulum.
          </p>
          <Link
            href="https://www.youtube.com/watch?v=QG_aJSduPLo"
            className={`${bricolage.className} text-[#C1EC48] pb-[1px] border-b-[2px] border-[#C1EC48]`}
          >
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
