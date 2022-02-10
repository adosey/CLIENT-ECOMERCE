import { useEffect } from "react";
import { useState } from "react";
// import { popularProducts } from "../data";
import Product from "../Product/Product";
import axios from "axios";
import { Container } from "./Products.style";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/products?category=${cat}`
            : "http://localhost:8000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([Key, value]) =>
            item[Key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;

// useEffect(() => {
//     if (sort === "newest") {
//         setFilteredProducts((prev) => {
//             [...prev].sort((a, b) => a.createdAt - b.createdAt)
//         })
//     } else if (sort === "asc") {
//         setFilteredProducts((prev) => {
//             [...prev].sort((a, b) => a.price - b.price)
//         })
//     } else {
//         setFilteredProducts((prev) => {
//             [...prev].sort((a, b) => b.price - a.price)
//         })
//     }
// }, [sort])

// console.log(sort);
