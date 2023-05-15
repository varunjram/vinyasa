import {v4 as uuid} from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men's Clothing",
    description: "Explore a wide range of clothing options for men.",
  },
  {
    _id: uuid(),
    categoryName: "Women's Clothing",
    description: "Discover the latest trends and styles for women.",
  },
  {
    _id: uuid(),
    categoryName: "Kids' Clothing",
    description: "Find comfortable and fashionable clothing for kids.",
  },
  {
    _id: uuid(),
    categoryName: "Shoes",
    description: "Discover a collection of stylish and comfortable shoes.",
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    description: "Enhance your outfits with trendy accessories.",
  },
];

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: "fiction",
//     description:
//       "literature in the form of prose, especially novels, that describes imaginary events and people",
//   },
//   {
//     _id: uuid(),
//     categoryName: "non-fiction",
//     description:
//       "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
//   },
//   {
//     _id: uuid(),
//     categoryName: "horror",
//     description:
//       "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
//   },
// ];
