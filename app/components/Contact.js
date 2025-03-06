import { Bricolage_Grotesque } from "next/font/google";
import ContactBox from "./ConatctBox";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: "400" });

const Contact = () => {
  return (
    <div className="flex flex-col justify-center h-dvh w-full pl-[300px] pr-[300px]">
      <div className="flex mb-[80px]">
        <ContactBox
          url={"https://github.com/aryaanish121"}
          alt="github"
          width={72}
          height={72}
          img="github.svg"
        />
        <ContactBox
          url={"https://discord.com/users/your-discord-id"}
          alt="discord"
          width={72}
          height={72}
          img="discord.svg"
        />
        <ContactBox
          url={"https://instagram.com/arya.anish.121"}
          alt="instagram"
          width={72}
          height={72}
          img="instagram.svg"
        />
        <ContactBox
          url={"https://www.youtube.com/@iamanishkumar"}
          alt="youtube"
          width={72}
          height={72}
          img="youtube.svg"
          spacing={false}
        />
      </div>
      <div className="w-full">
        <h3 className={`${bricolage.className} mb-[30px] text-[30px]`}>OR DROP A CUSTOM MESSAGE</h3>
        <div className="flex w-full flex items-center justify-between">
          <input type="text" className={`bg-[#52ce651a] border-[4px] rounded-[8px] border-[#2C3437] w-[85%] h-[70px] outline-none pl-[32px] pr-[32px] text-[#ffffff70] ${bricolage.className} text-[22px]`} placeholder="your message..." />
          <button className={`bg-[#52ce651a] border-[4px] rounded-[8px] border-[#2C3437] w-[10%] h-[70px] cursor-pointer text-[#ffffff70] ${bricolage.className} text-[22px]`}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
