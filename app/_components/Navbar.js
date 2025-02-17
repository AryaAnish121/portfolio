import Link from "next/link";
import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div className="w-full h-[110px] flex justify-center items-center absolute z-[2]">
      <ul className="flex">
        <li
          className={`mr-[120px] text-[#121311] text-[24px] ${dmSerif.className}`}
        >
          <Link href="#home">home</Link>
        </li>
        <li
          className={`mr-[120px] text-[#121311] text-[24px] ${dmSerif.className}`}
        >
          <Link href="#projects">projects</Link>
        </li>
        <li
          className={`mr-[120px] text-[#121311] text-[24px] ${dmSerif.className}`}
        >
          <Link href="#about">about</Link>
        </li>
        <li className={`text-[24px] text-[#121311]  ${dmSerif.className}`}>
          <Link href="#contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
