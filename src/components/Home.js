import React, { useEffect, useState } from "react";
import HomeItem from "./HomeItem";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          <center>Api Fetching of Users Post</center>
        </h1>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3">
                <HomeItem id={product.id} title={product.title} body={product.body} />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
