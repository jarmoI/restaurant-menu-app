import React, { useState } from "react";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Pizzas/Meals";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./store/CartProvider";


function App() {
  const [showModal, setShowModal] = useState(false);

  const showCardHandler = () => {
    setShowModal(true);
  };

  const hideCardHandler = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
     {showModal && <Cart onClose={hideCardHandler} />} 
      <Header onShowCard={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
