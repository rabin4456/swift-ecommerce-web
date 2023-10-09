import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import NavigationBar from "../components/ui/navigationBar";
import ProductCard from "../components/ui/productCard";
import Cart from "../components/ui/cart";
import { useState } from "react";

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  const closeCart = () => {
    setShowCart(false);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <div style={{ zIndex: 1 }} onClick={closeCart}>
        <NavigationBar />
        <ProductCard />
      </div>
      <div
        className='cartCircleContainer'
        onClick={toggleCart}
        style={{ zIndex: 2 }}
      >
        <ShoppingCartIcon className='cartIcon' />
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Home;
