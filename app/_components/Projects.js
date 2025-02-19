"use client";

import { DM_Serif_Text } from "next/font/google";
import Card from "./Card";
import Link from "next/link";
import { useState } from "react";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

const Project = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Google Docs Clone",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui autem doloribus sint dolorem molestias optio laboriosam accusamus sequi, aperiam voluptatem ex corrupti assumenda corporis laborum fuga numquam aspernatur ratione obcaecati repellat harum blanditiis dolorum laudantium mollitia? Hic quam quis dolor dolorem voluptas possimus, odio culpa animi perspiciatis, nesciunt provident odit atque, esse nihil ab maiores cupiditate fugit corporis? Molestiae accusamus sunt quidem ipsum odio aliquam veniam porro, minus assumenda hic eum consequatur incidunt perspiciatis, culpa, quisquam dicta?",
      active: true,
      finished: true,
    },
    {
      id: 2,
      title: "Amazon Clone",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui autem doloribus sint dolorem molestias optio laboriosam accusamus sequi, aperiam voluptatem ex corrupti assumenda corporis laborum fuga numquam aspernatur ratione obcaecati repellat harum blanditiis dolorum laudantium mollitia? Hic quam quis dolor dolorem voluptas possimus, odio culpa animi perspiciatis, nesciunt provident odit atque, esse nihil ab maiores cupiditate fugit corporis? Molestiae accusamus sunt quidem ipsum odio aliquam veniam porro, minus assumenda hic eum consequatur incidunt perspiciatis, culpa, quisquam dicta",
      active: false,
      finished: true,
    },
    {
      id: 3,
      title: "An Operating System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem omnis voluptatibus ipsum perspiciatis quos obcaecati laborum accusamus assumenda dolor repellendus incidunt tempora eum enim, dicta quisquam quae, autem deserunt sunt maiores quod ad! Neque quasi molestias debitis laborum ab reprehenderit quos rerum? Nam numquam animi minima incidunt inventore fuga doloribus recusandae accusamus, exercitationem nulla libero laborum tenetur nihil, quam, odio deleniti expedita nesciunt! Dolore impedit architecto consectetur similique, debitis molestiae eveniet placeat totam saepe quae quod, unde facere tempore vitae pariatur beatae eos dicta modi. Autem fuga sequi placeat quia, aut, odio suscipit deleniti ab velit optio quisquam cum.",
      active: false,
      finished: false,
    },
    {
      id: 4,
      title: "A Browser",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem omnis voluptatibus ipsum perspiciatis quos obcaecati laborum accusamus assumenda dolor repellendus incidunt tempora eum enim, dicta quisquam quae, autem deserunt sunt maiores quod ad! Neque quasi molestias debitis laborum ab reprehenderit quos rerum? Nam numquam animi minima incidunt inventore fuga doloribus recusandae accusamus, exercitationem nulla libero laborum tenetur nihil, quam, odio deleniti expedita nesciunt! Dolore impedit architecto consectetur similique, debitis molestiae eveniet placeat totam saepe quae quod, unde facere tempore vitae pariatur beatae eos dicta modi. Autem fuga sequi placeat quia, aut, odio suscipit deleniti ab velit optio quisquam cum.",
      active: false,
      finished: false,
    },
  ]);

  const handleClick = (id) => {
    setData((prevData) => {
      return prevData.map((project) => ({
        ...project,
        active: project.id == id,
      }));
    });
  };

  return (
    <div id="projects" className="mt-[50px] mb-[125px]">
      <h2
        className={`text-[#121311] text-[60px] mt-[10px] mb-[50px] ${dmSerif.className} text-center`}
      >
        projects
      </h2>
      <div className="flex">
        <div className="w-[50%] flex items-center justify-center">
          <img src="https://picsum.photos/400/400" alt="" />
        </div>
        <div className="w-[50%] h-full pl-[80px] pr-[80px]">
          {data
            .filter((project) => project.finished)
            .map((project, index) => (
              <Card
                key={index}
                id={project.id}
                active={project.active}
                title={project.title}
                description={project.description}
                handleClick={handleClick}
              />
            ))}

          <h3
            className={`text-[#181C14] text-[35px] mt-[40px] mb-[20px] ${dmSerif.className}`}
          >
            upcoming
          </h3>

          {data
            .filter((project) => !project.finished)
            .map((project, index) => (
              <Card
                key={index}
                id={project.id}
                active={project.active}
                title={project.title}
                description={project.description}
                handleClick={handleClick}
              />
            ))}

          <Link
            href="/projects"
            className={`text-[#181C14] text-[20px] mt-[20px] ${dmSerif.className} text-right block`}
          >
            and more here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
