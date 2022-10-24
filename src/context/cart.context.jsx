import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, producttoAdd) => {
  for (let item of cartItems) {
    if (item.id === producttoAdd.id) {
      item.qty++;
      return [...cartItems];
    }
  }
  return [...cartItems, { ...producttoAdd, qty: 1 }];
};

const removeCartItems = (cartItems, productToRemove, deleteFully) => {
  if (deleteFully) {
    let newCartItems = cartItems.filter(
      (item) => item.id !== productToRemove.id
    );
    return [...newCartItems];
  }
  for (let item of cartItems) {
    if (item.id === productToRemove.id) {
      if (item.qty > 1) {
        item.qty--;
        return [...cartItems];
      }

      let newCartItems = cartItems.filter(
        (item) => item.id !== productToRemove.id
      );
      return [...newCartItems];
    }
  }
};



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  cartCount: 0,
  cartTotal:0,
});



export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal,setCartTotal] =useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.qty,
      0
    );
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price*cartItem.qty,
      0
    );
    setCartCount(newCartCount);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemsToCart = (producttoAdd) => {
    setCartItems(addCartItem(cartItems, producttoAdd));
  };

  const removeItemsFromCart = (productToRemove,deleteFully=false) => {
    setCartItems(removeCartItems(cartItems, productToRemove,deleteFully));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    removeItemsFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
