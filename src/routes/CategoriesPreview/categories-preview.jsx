import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import CategoryPreview from "../../components/CategoriesPreview/categories-preview.component";

const CategoriesPreview = () => {
  const { Products } = useContext(ProductsContext);
  console.log(Products);
  return (
    <>
      {Object.keys(Products).map((title) => {
        const products = Products[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
      
    </>
  );
};

export default CategoriesPreview;
