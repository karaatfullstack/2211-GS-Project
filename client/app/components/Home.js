import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get("/api/products").then((response) => {
        setProducts(response.data);
      }); 
    }, []);

    const productsMap = products.map((product) => {

        return (
          <li key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <img src={product.imageUrl}/>
                <h5>{product.price}</h5>
            </div>
          </li>
        );
    });

  return (
  <div className="home">
    <h2>Home page - products</h2>
    <div>
        <ul>
        {productsMap}
        </ul>
    </div>
    </div>
    )

};

export default Home;
