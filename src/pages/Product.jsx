import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [product, setProduct] = useState();
  const {id} = useParams();
  console.log("id: ", id);

  const fetchProduct = async () => {
    try {
      const response = await axios(`/api/products/:${id}`);
      setProduct(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      Single Product Page - {id}
    </div>
  );
}
