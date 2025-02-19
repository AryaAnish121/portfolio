import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

const Card = ({ active, title, description, handleClick, id }) => {
  return (
    <div
      onClick={() => {
        handleClick(id);
      }}
      className={`w-full bg-[#3F4F44] pt-[22px] pb-[22px] pl-[33px] pr-[33px] rounded-[4px] mb-[15px] ${
        active && "border-[4px]"
      } border-[#A27B5C] cursor-pointer transition-all ease-linear duration-[.1s]`}
    >
      <h3
        className={`text-white text-[25px] ${dmSerif.className} ${
          active && "mb-[10px]"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-white text-[14px] ${dmSerif.className} cursor-text ${
          !active && "hidden"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
