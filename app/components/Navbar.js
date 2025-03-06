import { Big_Shoulders_Stencil_Text } from "next/font/google";

const font = Big_Shoulders_Stencil_Text({ subsets: ["latin"], weight: "800" });

const Navbar = () => {
  return (
    <div className="absolute flex w-[100%] h-[85px] pl-[45px] pr-[45px] justify-between items-center">
      <h2
        className={`text-[#CBD4D9] text-[26px] font-bold ${font.className}`}
      >
        ASQUARED
      </h2>
      <div className="flex flex-col h-[10px] flex flex-col justify-between cursor-pointer">
        <div className="w-[30px] h-[2px] bg-white" />
        <div className="w-[30px] h-[2px] bg-white" />
      </div>
    </div>
  );
};

export default Navbar;
