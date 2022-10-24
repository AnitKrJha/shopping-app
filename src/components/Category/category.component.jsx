import "./category.styles.scss";
import { Link } from "react-router-dom";
const Category = ({ title, imageUrl }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link
        to={`/shop/${title.toLowerCase()}`}
        className="category-body-container"
      >
        <h1>{title}</h1>
        <p>shop now</p>
      </Link>
    </div>
  );
};

export default Category;
