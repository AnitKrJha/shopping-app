import { useContext } from "react";
import './shop.styles.scss'
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/Product-card/product-card.component";

const Shop = () => {
  const { Products: SHOP_DATA } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
