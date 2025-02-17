import { DM_Serif_Text } from "next/font/google";
import Link from "next/link";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <div id="contact" className="h-dvh relative">
      <div className="h-full w-full flex justify-center items-center">
        <div>
          <h2 className={`${dmSerif.className} text-[130px] mb-2`}>
            aryaanishuser@gmail.com
          </h2>
          <ul className="flex items-center justify-between">
            <li>
              <Link
                className={`underline font-bold text-[22px] ${dmSerif.className}`}
                href="https://github.com/AryaAnish121"
              >
                GITHUB
              </Link>
            </li>
            <li>
              <Link
                className={`underline font-bold text-[22px] ${dmSerif.className}`}
                href="https://x.com/AryaAnish15"
              >
                TWITTER
              </Link>
            </li>
            <li>
              <Link
                className={`underline font-bold text-[22px] ${dmSerif.className}`}
                href="https://instagram.com/arya.anish.121"
              >
                INSTAGRAM
              </Link>
            </li>
            <li>
              <Link
                className={`underline font-bold text-[22px] ${dmSerif.className}`}
                href="https://www.reddit.com/u/ParticularStick8461/"
              >
                REDDIT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
