import {v4 as uuid} from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// export const products = [
//   {
//     _id: uuid(),
//     name: "Women's Skinny Jeans",
//     brand: "Slim Fit",
//     price: 1500,
//     categoryName: "Women's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     title: "Women's Cardigan",
//     brand: "Cozy Knits",
//     price: 1600,
//     categoryName: "Women's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     title: "Women's Summer Dress",
//     brand: "Sunshine Fashion",
//     price: 2100,
//     categoryName: "Women's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     title: "Elegant Women's Dress",
//     brand: "Fashionista",
//     price: 3500,
//     categoryName: "Women's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },

//   {
//     _id: uuid(),
//     title: "Casual Women's Top",
//     brand: "Trendy Chic",
//     price: 1200,
//     categoryName: "Women's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     title: "Formal Women's Blazer",
//     brand: "Classy Attire",
//     price: 4500,
//     categoryName: "Women's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     title: "Women's Floral Print Dress",
//     brand: "Blossom Fashion",
//     price: 1800,
//     categoryName: "Women's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     name: "Stiched Kurta plus trouser",
//     brand: "Digital Printed",
//     description: "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
//     price: 1627,
//     categoryName: "Women's Clothing",
//     image_url: "https://i.dummyjson.com/data/products/42/thumbnail.jpg",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "frock gold printed",
//     brand: "Ghazi Fabric",
//     description: "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
//     price: 208,
//     categoryName: "Women's Clothing",
//     image_url: "https://i.dummyjson.com/data/products/43/thumbnail.jpg",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     name: "Ladies Multicolored Dress",
//     brand: "Ghazi Fabric",
//     description:
//       "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
//     price: 2922,
//     categoryName: "Women's Clothing",
//     image_url: "https://i.dummyjson.com/data/products/44/thumbnail.jpg",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "Sleeve Shirt Womens",
//     brand: "Professional Wear",
//     description:
//       "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
//     price: 2985,
//     categoryName: "Women's Clothing",
//     image_url: "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Women Sweaters Wool",
//     brand: "Top Sweater",
//     description:
//       "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
//     price: 2593,
//     categoryName: "Women's Clothing",
//     image_url: "https://i.dummyjson.com/data/products/39/thumbnail.jpg",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "women winter clothes",
//     brand: "Top Sweater",
//     description:
//       "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
//     price: 1024,
//     categoryName: "Women's Clothing",
//     image_url: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Classic Relaxed-fit chino pant",
//     brand: "Nike",
//     price: 1144,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BE611_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Woven belt",
//     brand: "Jcrew",
//     price: 712,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AK786_PP1488?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     name: "Italian linen-cotton blazer",
//     brand: "JCREW",
//     price: 1666,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BE437_WZ1782_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Short-sleeve Shirt",
//     brand: "Adiddas",
//     price: 1917,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BE986_WX0596_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "Stretch chino shorts",
//     brand: "Nike",
//     price: 1566,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BE051_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Classic Relaxed-fit pleated chino pant",
//     brand: "Puma",
//     price: 101,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     name: "Classic Relaxed-fit pleated chino",
//     brand: "Nike",
//     price: 1877,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Camden loafers in leather",
//     brand: "Nike",
//     price: 120,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AV166_PP3360?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Hemp-organic cotton long-sleeve T-shirt",
//     brand: "JCREW",
//     price: 938,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BH814_RD6243?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Reversible bucket hat in linen-cotton",
//     brand: "JCREW",
//     price: 508,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BH134_WZ1782?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Made-in-the-USA watercolor sardine graphic T-shirt",
//     brand: "JCREW",
//     price: 1959,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BI763_PP3626_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     name: "Secret Wash organic cotton poplin shirt",
//     brand: "Adiddas",
//     price: 184,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BF793_PP1744?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "O-ring cotton rope belt",
//     brand: "Puma",
//     price: 1527,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BH030_BR6578?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Silk tie",
//     brand: "JCREW",
//     price: 1437,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AX110_NT4546?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     name: "Pajama shirt in cotton poplin",
//     brand: "Nike",
//     price: 366,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AZ595_WD4807_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "Flannel pajama pant",
//     brand: "Puma",
//     price: 2927,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AZ665_WX8063_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Broken-in short-sleeve V-neck T-shirt",
//     brand: "Puma",
//     price: 2607,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AH919_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "Bowery wrinkle-free stretch cotton shirt with spread collar",
//     brand: "JCREW",
//     price: 1621,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AV828_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "770™ Straight-fit stretch chino pant",
//     brand: "Adiddas",
//     price: 207,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/E1590_GY7317_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Garment-dyed slub cotton polo shirt",
//     brand: "Nike",
//     price: 958,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/J1851_BL9137_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "484 Slim-fit garment-dyed five-pocket pant",
//     brand: "Nike",
//     price: 576,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/AZ963_WZ2335_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Short-sleeve slub cotton shirt",
//     brand: "JCREW",
//     price: 2121,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BE958_PT1454?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     name: "Leather billfold wallet",
//     brand: "Reebok",
//     price: 373,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BA766_PP2015?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
//     rating: 1,
//   },
//   {
//     _id: uuid(),
//     name: "Ludlow Classic-fit suit jacket in Italian stretch four-season wool",
//     brand: "JCREW",
//     price: 2505,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/J3274_WW8804_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Ludlow Classic-fit tuxedo pant in Italian wool",
//     brand: "JCREW",
//     price: 889,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     name: "Ludlow Slim-fit unstructured suit pant in Irish cotton-linen",
//     brand: "Reebok",
//     price: 189,
//     categoryName: "Men's Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/BC552_WZ1778_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },

//   {
//     _id: uuid(),
//     name: "sublimation plain kids tank",
//     brand: "Soft Cotton",
//     description: "sublimation plain kids tank tops wholesale",
//     price: 665,
//     categoryName: "Kids Clothing",
//     image_url: "https://i.dummyjson.com/data/products/38/thumbnail.jpg",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     title: "Kids' Denim Shorts",
//     brand: "Cool Kids",
//     price: 500,
//     categoryName: "Kids Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 2,
//   },
//   {
//     _id: uuid(),
//     title: "Kids' Printed T-Shirt",
//     brand: "Happy Prints",
//     price: 400,
//     categoryName: "Kids Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },

//   {
//     _id: uuid(),
//     title: "Kids' Sportswear Set",
//     brand: "Active Kids",
//     price: 800,
//     categoryName: "Kids Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 5,
//   },
//   {
//     _id: uuid(),
//     title: "Comfortable Kids' T-Shirt",
//     brand: "Little Explorers",
//     price: 250,
//     categoryName: "Kids Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 3,
//   },
//   {
//     _id: uuid(),
//     title: "Adorable Kids' Dress",
//     brand: "Tiny Trends",
//     price: 800,
//     categoryName: "Kids Clothing",
//     image_url:
//       "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//     rating: 50,
//   },

//   {
//     _id: uuid(),
//     title: "Kids' Hooded Sweatshirt",
//     brand: "Playful Kids",
//     price: 600,
//     categoryName: "Kids Clothing",
//     rating: 3,
//   },
// ];

export const products = [
  {
    _id: uuid(),
    name: "Slim-fit vest in drapey twill",
    brand: "Slim Fit",
    price: 1500,
    categoryName: "Women's Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BR253_WZ3180?hei=540&crop=0,0,680,0",
    rating: 2,
    strikePrice: 1800,
    off: 20,
  },
  {
    _id: uuid(),
    name: "Women's Skinny Jeans",
    brand: "Slim Fit",
    price: 1500,
    categoryName: "Women's Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BK399_DM6196?hei=540&crop=0,0,680,0",
    rating: 2,
    strikePrice: 1800,
    off: 20,
  },
  {
    _id: uuid(),
    name: "Women's Cardigan",
    brand: "Cozy Knits",
    price: 1600,
    categoryName: "Women's Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BO154_BL8133?hei=540&crop=0,0,680,0",
    rating: 4,
    strikePrice: 2240,
    off: 40,
  },
  {
    _id: uuid(),
    name: "Women's Summer Dress",
    brand: "Sunshine Fashion",
    price: 2100,
    categoryName: "Women's Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BP844_RD5285_m?hei=540&crop=0,0,680,0",
    rating: 1,
    strikePrice: 2940,
    off: 40,
  },
  {
    _id: uuid(),
    name: "Elegant Women's Dress",
    brand: "Fashionista",
    price: 3500,
    categoryName: "Women's Clothing",
    image_url: "https://jcrew.com/s7-img-facade/BR467_BL8227?hei=540&crop=0,0,680,0",
    rating: 2,
    strikePrice: 4900,
    off: 40,
  },
  {
    _id: uuid(),
    name: "NEW Louisa lady jacket in lightweight chino",
    brand: "Fashionista",
    price: 3500,
    categoryName: "Women's Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BR075_PK5249?hei=540&crop=0,0,680,0",
    rating: 2,
    strikePrice: 4900,
    off: 40,
  },
  {
    _id: uuid(),
    name: "Casual Women's Top",
    brand: "Trendy Chic",
    price: 1200,
    categoryName: "Women's Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BM926_BK0001?hei=540&crop=0,0,680,0",
    rating: 3,
    strikePrice: 1320,
    off: 10,
  },
  {
    _id: uuid(),
    name: "Formal Women's Blazer",
    brand: "Classy Attire",
    price: 4500,
    categoryName: "Women's Clothing",
    image_url:
      "https://img.freepik.com/free-photo/portrait-young-japanese-woman_23-2148870710.jpg?w=540&t=st=1684691528~exp=1684692128~hmac=c9d7eeeec142b11a9b405d5db741cffa3b3838df55cae7be4a5c9fb6a6391444",
    rating: 4,
    strikePrice: 6750,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Women's Floral Print Dress",
    brand: "Blossom Fashion",
    price: 1800,
    categoryName: "Women's Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BQ601_PT3457_d3?hei=540&crop=0,0,680,0",
    rating: 2,
    strikePrice: 2700,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Stiched Kurta plus trouser",
    brand: "Digital Printed",
    description: "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
    price: 1627,
    categoryName: "Women's Clothing",
    image_url: "https://i.dummyjson.com/data/products/42/thumbnail.jpg",
    rating: 1,
    strikePrice: 1952.4,
    off: 20,
  },
  {
    _id: uuid(),
    name: "frock gold printed",
    brand: "Ghazi Fabric",
    description: "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
    price: 208,
    categoryName: "Women's Clothing",
    image_url: "https://i.dummyjson.com/data/products/43/thumbnail.jpg",
    rating: 2,
    strikePrice: 270.4,
    off: 30,
  },
  {
    _id: uuid(),
    name: "Ladies Multicolored Dress",
    brand: "Ghazi Fabric",
    description:
      "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
    price: 2922,
    categoryName: "Women's Clothing",
    image_url: "https://i.dummyjson.com/data/products/44/thumbnail.jpg",
    rating: 1,
    strikePrice: 4383,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Sleeve Shirt Womens",
    brand: "Professional Wear",
    description:
      "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
    price: 2985,
    categoryName: "Women's Clothing",
    image_url: "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
    rating: 4,
    strikePrice: 3283.5,
    off: 10,
  },
  {
    _id: uuid(),
    name: "Women Sweaters Wool",
    brand: "Top Sweater",
    description:
      "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
    price: 2593,
    categoryName: "Women's Clothing",
    image_url: "https://i.dummyjson.com/data/products/39/thumbnail.jpg",
    rating: 1,
    strikePrice: 3889.5,
    off: 50,
  },
  {
    _id: uuid(),
    name: "women winter clothes",
    brand: "Top Sweater",
    description:
      "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
    price: 1024,
    categoryName: "Women's Clothing",
    image_url: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
    rating: 4,
    strikePrice: 1536,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Classic Relaxed-fit chino pant",
    brand: "Nike",
    price: 1144,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BE611_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 3,
    strikePrice: 1716,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Woven belt",
    brand: "Jcrew",
    price: 712,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AK786_PP1488?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 2,
    strikePrice: 783.2,
    off: 10,
  },
  {
    _id: uuid(),
    name: "Italian linen-cotton blazer",
    brand: "JCREW",
    price: 1666,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BE437_WZ1782_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 3,
    strikePrice: 1832.6,
    off: 10,
  },
  {
    _id: uuid(),
    name: "Short-sleeve Shirt",
    brand: "Adiddas",
    price: 1917,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BE986_WX0596_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 1,
    strikePrice: 2875.5,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Stretch chino shorts",
    brand: "Nike",
    price: 1566,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BE051_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 4,
    strikePrice: 2349,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Classic Relaxed-fit pleated chino pant",
    brand: "Puma",
    price: 101,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 2,
    strikePrice: 151.5,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Classic Relaxed-fit pleated chino",
    brand: "Nike",
    price: 1877,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 3,
    strikePrice: 2627.8,
    off: 40,
  },
  {
    _id: uuid(),
    name: "Camden loafers in leather",
    brand: "Nike",
    price: 120,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AV166_PP3360?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 4,
    strikePrice: 156,
    off: 30,
  },
  {
    _id: uuid(),
    name: "Hemp-organic cotton long-sleeve T-shirt",
    brand: "JCREW",
    price: 938,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BH814_RD6243?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    rating: 3,
    strikePrice: 1125.6,
    off: 20,
  },
  {
    _id: uuid(),
    name: "Reversible bucket hat in linen-cotton",
    brand: "JCREW",
    price: 508,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BH134_WZ1782?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 3,
    strikePrice: 762,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Made-in-the-USA watercolor sardine graphic T-shirt",
    brand: "JCREW",
    price: 1959,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BI763_PP3626_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 2,
    strikePrice: 2350.8,
    off: 20,
  },
  {
    _id: uuid(),
    name: "Secret Wash organic cotton poplin shirt",
    brand: "Adiddas",
    price: 184,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BF793_PP1744?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    rating: 1,
    strikePrice: 202.4,
    off: 10,
  },
  {
    _id: uuid(),
    name: "O-ring cotton rope belt",
    brand: "Puma",
    price: 1527,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BH030_BR6578?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    rating: 4,
    strikePrice: 2290.5,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Silk tie",
    brand: "JCREW",
    price: 1437,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AX110_NT4546?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    rating: 2,
    strikePrice: 2155.5,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Pajama shirt in cotton poplin",
    brand: "Nike",
    price: 366,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AZ595_WD4807_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 1,
    strikePrice: 475.8,
    off: 30,
  },
  {
    _id: uuid(),
    name: "Flannel pajama pant",
    brand: "Puma",
    price: 2927,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AZ665_WX8063_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 3,
    strikePrice: 4097.8,
    off: 40,
  },
  {
    _id: uuid(),
    name: "Broken-in short-sleeve V-neck T-shirt",
    brand: "Puma",
    price: 2607,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AH919_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 1,
    strikePrice: 2867.7,
    off: 10,
  },
  {
    _id: uuid(),
    name: "Bowery wrinkle-free stretch cotton shirt with spread collar",
    brand: "JCREW",
    price: 1621,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AV828_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 3,
    strikePrice: 2269.4,
    off: 40,
  },
  {
    _id: uuid(),
    name: "770™ Straight-fit stretch chino pant",
    brand: "Adiddas",
    price: 207,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/E1590_GY7317_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 3,
    strikePrice: 289.8,
    off: 40,
  },
  {
    _id: uuid(),
    name: "Garment-dyed slub cotton polo shirt",
    brand: "Nike",
    price: 958,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/J1851_BL9137_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 1,
    strikePrice: 1149.6,
    off: 20,
  },
  {
    _id: uuid(),
    name: "484 Slim-fit garment-dyed five-pocket pant",
    brand: "Nike",
    price: 576,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/AZ963_WZ2335_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 4,
    strikePrice: 633.6,
    off: 10,
  },
  {
    _id: uuid(),
    name: "Short-sleeve slub cotton shirt",
    brand: "JCREW",
    price: 2121,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BE958_PT1454?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    rating: 3,
    strikePrice: 2545.2,
    off: 20,
  },
  {
    _id: uuid(),
    name: "Leather billfold wallet",
    brand: "Reebok",
    price: 373,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BA766_PP2015?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    rating: 1,
    strikePrice: 484.9,
    off: 30,
  },
  {
    _id: uuid(),
    name: "Ludlow Classic-fit suit jacket in Italian stretch four-season wool",
    brand: "JCREW",
    price: 2505,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/J3274_WW8804_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 4,
    strikePrice: 3757.5,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Ludlow Classic-fit tuxedo pant in Italian wool",
    brand: "JCREW",
    price: 889,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/C3309_BK0001_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 4,
    strikePrice: 1244.6,
    off: 40,
  },
  {
    _id: uuid(),
    name: "Ludlow Slim-fit unstructured suit pant in Irish cotton-linen",
    brand: "Reebok",
    price: 189,
    categoryName: "Men's Clothing",
    image_url:
      "https://www.jcrew.com/s7-img-facade/BC552_WZ1778_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    rating: 2,
    strikePrice: 226.8,
    off: 20,
  },
  {
    _id: uuid(),
    name: "sublimation plain kids tank",
    brand: "Soft Cotton",
    description: "sublimation plain kids tank tops wholesale",
    price: 665,
    categoryName: "Kids Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BQ485_KF6238?hei=540&crop=0,0,680,0",
    rating: 2,
    strikePrice: 997.5,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Kids' Denim Shorts",
    brand: "Cool Kids",
    price: 500,
    categoryName: "Kids Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/AI454_GR6726?hei=540&crop=0,0,680,0",
    rating: 2,
    strikePrice: 650,
    off: 30,
  },
  {
    _id: uuid(),
    name: "Kids' Printed T-Shirt",
    brand: "Happy Prints",
    price: 400,
    categoryName: "Kids Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BO352_GP0320?hei=540&crop=0,0,680,0",
    rating: 3,
    strikePrice: 480,
    off: 20,
  },
  {
    _id: uuid(),
    name: "Kids' Sportswear Set",
    brand: "Active Kids",
    price: 800,
    categoryName: "Kids Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BC371_KF3439?hei=540&crop=0,0,680,0",
    rating: 5,
    strikePrice: 960,
    off: 20,
  },
  {
    _id: uuid(),
    name: "Comfortable Kids' T-Shirt",
    brand: "Little Explorers",
    price: 250,
    categoryName: "Kids Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/J1960_GY6668_m?hei=540&crop=0,0,680,0",
    rating: 3,
    strikePrice: 375,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Adorable Kids' Dress",
    brand: "Tiny Trends",
    price: 800,
    categoryName: "Kids Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BJ555_KF5019?hei=540&crop=0,0,680,0",
    rating: 5,
    strikePrice: 1200,
    off: 50,
  },
  {
    _id: uuid(),
    name: "Kids' Sweatshirt",
    brand: "Playful Kids",
    price: 600,
    categoryName: "Kids Clothing",
    image_url: "https://www.jcrew.com/s7-img-facade/BJ863_SR0271?hei=540&crop=0,0,680,0",
    rating: 3,
    strikePrice: 900,
    off: 50,
  },
];
