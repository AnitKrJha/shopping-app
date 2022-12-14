import "./shop.styles.scss";
import CategoriesPreview from "../CategoriesPreview/categories-preview";
import Category from "../Category/category.component";
import { Routes,Route } from "react-router-dom";

const Shop = () => {

  return (
   <Routes>

    <Route index element={<CategoriesPreview/>}/>
    <Route path=":category" element={<Category />}/>

   </Routes>
  );
};

export default Shop;
