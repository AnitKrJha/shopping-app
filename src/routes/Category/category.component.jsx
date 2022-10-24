import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/Product-card/product-card.component";
import { ProductsContext } from "../../context/products.context";
import { useParams } from "react-router-dom";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { Products } = useContext(ProductsContext);
  const [currentProducts, setcurrentProducts] = useState(Products[category]);

  useEffect(() => {
    setcurrentProducts(Products[category]);
  }, [category, Products]);

  return (
    <div className="products-container">
      {currentProducts &&
        currentProducts.map((prod) => {
          return <ProductCard product={prod} key={prod.name} />;
        })}
    </div>
  );
};
export default Category;
