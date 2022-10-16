import './product-card.styles.scss'
import Button from "../Button/button.component";

const ProductCard = ({product}) => {

    let {name,price,imageUrl}=product;

  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <Button buttonType={'inverted'}>Add to Cart</Button>
        </div>
    </div>
  )
};

export default ProductCard;
