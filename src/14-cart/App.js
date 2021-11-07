import React from "react";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";

function CartApp() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default CartApp;
