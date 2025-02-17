import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <div id="about" className="mb-[75px]">
      <h2
        className={`text-[#121311] text-[60px] mt-[25px] mb-[50px] ${dmSerif.className} text-center`}
      >
        about
      </h2>
      <div className="flex align-center justify-center">
        <p className={`${dmSerif.className} text-[21px] w-[59%] text-justify`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis
          lacus, eleifend in ornare molestie, ornare id nunc. Pellentesque justo
          massa, sagittis ut porttitor vitae, laoreet consectetur nunc. Aliquam
          sem quam, commodo ac iaculis ut, porta sit amet nibh. Quisque varius
          rutrum lorem a sagittis. Cras bibendum iaculis lorem sed luctus.
          Quisque sollicitudin scelerisque venenatis. Morbi cursus turpis sit
          amet turpis scelerisque consequat. Suspendisse eget viverra eros, eget
          commodo nisi. Donec ut ligula quis dui rhoncus laoreet eget in ligula.
          In hac habitasse platea dictumst. Praesent aliquet nisi et ante
          aliquam, vitae volutpat tellus porta. Quisque nec risus sit amet
          libero eleifend feugiat.
          <br />
          <br />
          Nunc ullamcorper faucibus ultrices. Aliquam erat volutpat. Vivamus
          maximus malesuada erat, id vehicula nibh. Morbi elementum leo ac
          tortor ornare, id malesuada ipsum vestibulum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Etiam et dolor porta magna
          vestibulum pretium. Fusce quis efficitur felis. Nunc mi magna, rhoncus
          iaculis dui a, volutpat condimentum tellus. Suspendisse potenti. Duis
          et pellentesque ligula. Quisque mauris erat, interdum at magna sed,
          lobortis posuere risus. In aliquet quis massa eu suscipit.
        </p>
      </div>
    </div>
  );
};

export default About;
