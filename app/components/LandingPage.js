import { Bricolage_Grotesque, Averia_Serif_Libre } from "next/font/google";
import Box from "./Box";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: "800" });
const averia = Averia_Serif_Libre({ subsets: ["latin"], weight: "400" });

const LandingPage = () => {
  return (
    <div className="h-dvh w-[100%] flex">
      <div className="h-full w-[50%] flex items-center justify-center">
        <div>
          <h2
            className={`mb-[30px] text-[#CBD4D9] text-[120px] ${bricolage.className} leading-[100px] pb-[22px]`}
          >
            hi, <br /> I am <br /> <span className="text-[#C1EC48]">Arya</span>
          </h2>
          <p
            className={`text-[#CBD4D9] text-[22px] ${averia.className} w-[500px]`}
          >
            I am a front-end developer and I love to code. Also I really suck
            at/hate designing.
          </p>
        </div>
      </div>
      <div className="h-full w-[50%] flex items-center justify-center">
        <div className="h-[380px] w-[380px] relative overflow-visible">
          <Box
            alt="node"
            img="node.svg"
            width={71}
            height={80}
            styling={"top-0 left-0"}
          />
          <Box
            alt="c++"
            img="cplusplus.svg"
            width={71}
            height={80}
            styling={"top-[20px] right-[25px]"}
          />
          <Box
            alt="python"
            img="python.svg"
            width={71}
            height={80}
            styling={"bottom-0 left-[20px]"}
          />
          <Box
            alt="c"
            img="c.svg"
            width={71}
            height={80}
            styling={"bottom-[20px] right-0"}
          />
          <div className="absolute top-[calc(50%-75px)] left-[calc(50%-75px)] bg-[#2c682c] w-[150px] h-[150px] rounded-[50%] blur-[120px] z-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
