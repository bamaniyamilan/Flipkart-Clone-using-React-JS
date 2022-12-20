import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Product = () => {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>
          <center>Top Products just for you</center>
        </h2>
        <div className="row">
          {product.map((prod) => {
            return (
              <div className="col-md-3">
                <ProductItem image={prod.image} category={prod.category} title={prod.title} description={prod.description} price={prod.price} />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
