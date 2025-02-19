import { DM_Serif_Text } from "next/font/google";

const dmSerifItalic = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-dvh flex justify-center items-center relative z-[1]"
    >
      <h2
        className={`text-[100px] w-[950px] text-center text-[#121311] ${dmSerif.className}`}
      >
        Hi, I am{" "}
        <span className={`${dmSerifItalic.className} text-[#3D443B]`}>
          Arya Anish
        </span>
        , a{" "}
        <span className={`${dmSerifItalic.className} text-[#3D443B]`}>
          Software Engineer
        </span>
      </h2>
      <div className="w-[500px] h-[500px] absolute bottom-[calc(50%-250px)] right-[calc(50%-250px)] rounded-full z-[-1] opacity-[20%] bg-customGradient blur-[62px]" />
    </div>
  );
};

export default Home;
