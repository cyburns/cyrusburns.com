import Image from "next/image";
import React from "react";

const works = [
  {
    name: "AUDIA",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/4deceba7fbbfb685d55a0cd4eaaa6077e68135c9-2000x2500.jpg?h=1080&q=60&auto=format",
  },
  {
    name: "BRIGHT",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/ef3e1575c2c83d455d48d0cece290e2af704f5b7-2000x2500.jpg?h=1080&q=60&auto=format",
  },
  {
    name: "REACTYPE",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/947b09129d093a71b27c670a366038159da4c03d-1000x1250.jpg?h=1080&q=60&auto=format",
  },
  {
    name: "PRESS",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/48404a0139bd362614834f55025a6aef8caa4b58-2000x2500.jpg?h=1080&q=60&auto=format",
  },
];

const Works = () => {
  return (
    <div className="text-[15rem] bg-transparent text-white flex flex-col items-center font-semibold">
      {works.map((work, index) => (
        <section id={`section-${index}`}>
          <h1 key={work.name} className="mt-[150vh]">
            {work.name}
          </h1>
        </section>
      ))}
      {works.map((work, index) => (
        <div className="section-preview z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="img" id={`preview-${index}`}>
            <Image
              src={work.img}
              alt={work.name}
              width={600}
              height={700}
              className="object-cover w-full h-full absolute custom-clip overflow-hidden"
            />
          </div>
        </div>
      ))}
      <div className="h-[200px] w-full"/>
    </div>
  );
};

export default Works;
