"use client";
import Image from "next/image";

const ConatctBox = ({ img, width, height, url, alt, spacing }) => {
  return (
    <div
      className={`flex items-center justify-center h-[140px] w-[140px] bg-[#52ce651a] border-[4px] rounded-[8px] border-[#2C3437] cursor-pointer ${spacing != false && "mr-[80px]"}`}
      onClick={() => open(url, "_self")}
    >
      <Image src={img} width={width} height={height} alt={alt} />
    </div>
  );
};

export default ConatctBox;
