import "./category.styles.scss";

const Category = ({ title, imageUrl }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default Category;
