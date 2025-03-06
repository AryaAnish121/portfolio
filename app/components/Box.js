import Image from "next/image";

const Box = ({img, styling, alt, width, height}) => {
    return (
        <div className={`flex items-center justify-center h-[140px] w-[135px] bg-[#52ce651a] border-[4px] rounded-[8px] border-[#2C3437] ${styling} absolute`}>
            <Image src={img} width={width} height={height} alt={alt} />
        </div>
    );
}

export default Box;