import React from "react";
import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { useGlobalContext } from "./context/context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
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

export default App;
