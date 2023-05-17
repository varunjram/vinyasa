import React, {useContext} from "react";
import {Carousel} from "primereact/carousel";
import {Button} from "primereact/button";
import Categories from "../components/Categories";
import {StoreContext} from "../context/StoreContext";

export default function Home() {
  const {state} = useContext(StoreContext);
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
      <div className="hero-container">
        <img src={src} alt={`hero${i + 1}`} className="hero-container-img" />
      </div>
    );
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}

      <Categories />
      <div className="w-full">
        <Carousel
          value={heroComponentData}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          circular
        />
      </div>
      <section className="grid collection w-full">
        <article className="lg:col-6 sm:col:12 ">
          <div className="collection-card m-5 " style={{backgroundColor: "lightcoral"}}>
            <div className="collection-card__image">
              <img
                src="/assets/images/categories/summer.jpg"
                alt="summer banner"
                srcset=""
                className="w-full"
              />
            </div>
            <div className="collection-card__data">
              <p>New Arrivals</p>
              <div>
                <h3>Summer Collection</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam!</p>
              </div>
            </div>
          </div>
        </article>
        <article className="lg:col-6 sm:col:12">
          <div className="collection-card m-5  " style={{backgroundColor: "lightskyblue"}}>
            <div className="collection-card__image">
              <img
                src="/assets/images/categories/winter.jpg"
                alt="summer banner"
                srcset=""
                className="w-full"
              />
            </div>
            <div className="collection-card__data">
              <p>New Arrivals</p>
              <div>
                <h3>Winter Collection</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam!</p>
              </div>
            </div>
          </div>
        </article>
      </section>
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