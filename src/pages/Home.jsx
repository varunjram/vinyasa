import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import FullPageLoading from "../components/FullPageLoading";
import { StoreContext } from "../context/StoreContext";

export default function Home() {
  const { isProductsLoading, isCategoriesLoading } = useContext(StoreContext);
  const Navigate = useNavigate();
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
  const productTemplate = ({ src }, i) => {
    return (
      <div
        className="hero-container cursor-pointer grid"
        onClick={() => Navigate("/products")}>
        <img
          src={src}
          alt={`hero${i + 1}`}
          className="hero-container-img col-12"
        />
      </div>
    );
  };

  return (
    <>
      {isProductsLoading && isCategoriesLoading && <FullPageLoading />}
      {!isProductsLoading && !isCategoriesLoading && (
        <div className="grid">
          <Categories />
          <div className="col-12">
            <Carousel
              value={heroComponentData}
              numVisible={1}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              itemTemplate={productTemplate}
              circular
              autoplayInterval={2000}
              // onClick={() => Navigate("/products")}
            />
          </div>
          <section className="grid collection w-full">
            <article className="lg:col-6 md:col-6 sm:col-12  ">
              <div
                className="collection-card m-5 "
                style={{ backgroundColor: "lightcoral" }}>
                <div className="collection-card__image">
                  <img
                    src="/assets/images/categories/summer.jpg"
                    alt="summer banner"
                    className="w-full"
                  />
                </div>
                <div className="collection-card__data">
                  <p>New Arrivals</p>
                  <Button
                    className="text-2xl text-900"
                    text
                    onClick={() => Navigate("/products")}>
                    Explore
                  </Button>
                  <div>
                    <h3>Summer Collection</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam!</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="lg:col-6 md:col-6 sm:col-12 ">
              <div
                className="collection-card m-5  "
                style={{ backgroundColor: "lightskyblue" }}>
                <div className="collection-card__image">
                  <img
                    src="/assets/images/categories/winter.jpg"
                    alt="summer banner"
                    className="w-full"
                  />
                </div>
                <div className="collection-card__data">
                  <p>New Arrivals</p>
                  <Button
                    className="text-2xl text-900"
                    text
                    onClick={() => Navigate("/products")}>
                    Explore
                  </Button>
                  <div>
                    <h3>Winter Collection</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam!</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      )}
    </>
  );
}
