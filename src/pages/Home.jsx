import React from "react";
import {Carousel} from "primereact/carousel";
import {Button} from "primereact/button";

export default function Home() {
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const heroComponentData = [
    {
      src: "/assets/images/hero/1.jpg",
    },
    {
      src: "/assets/images/hero/2.jpg",
    },
    {
      src: "/assets/images/hero/3.jpg",
    },
    {
      src: "/assets/images/hero/4.jpg",
    },
    {
      src: "/assets/images/hero/5.jpg",
    },
  ];
  const productTemplate = ({src}, i) => {
    return (
      <div className="h-30rem">
        <img src={src} alt={`hero${i + 1}`} className="w-full" />
      </div>
    );
  };

  return (
    <div>
      <div className="mt-5">
        <Carousel
          value={heroComponentData}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          circular
        />
      </div>
    </div>
  );
}
// return (
//     <div>
//       <h1>Home Page123</h1>
//       <img src="/assets/images/1.jpg" alt="hero-1" />
//       <img src={myImage} alt="hero-2" />
//     </div>
// );
// }
