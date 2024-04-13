import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Circles } from "react-loader-spinner";
import NotFound from "./NotFound";
import "../styles/SearchApp.css";

function SearchApp() {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async function () {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response?.data.length) {
        setAllProducts(response.data);
        setFilterProducts(response.data);
      }
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = function (e) {
    setSearch(e.target.value);

    let userInput = e.target.value.toLowerCase();

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(userInput)
    );
    setFilterProducts(filtered);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="search-app">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
        className="input-field"
      />

      {loading ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          className="loader"
        />
      ) : filterProducts.length ? (
        <div className="products-container">
          {filterProducts.map(({ title, image, description, price, id }) => (
            <Card
              title={title}
              image={image}
              desc={description}
              price={price}
              key={id}
            />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default SearchApp;
