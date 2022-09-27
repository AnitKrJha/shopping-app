import Category from "../Category/category.component";
import { categories } from "../../assets/categories";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return <Category title={title} imageUrl={imageUrl} key={id} />;
      })}
    </div>
  );
};

export default Directory;
