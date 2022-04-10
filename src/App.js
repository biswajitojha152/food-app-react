import React, { useContext } from "react";
import Navbar from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";

import MealContext from "./store";

function App() {
  const ctx = useContext(MealContext);

  return (
    <React.Fragment>
      <Navbar />
      <Home />
      {ctx.showCart && <Modal />}
    </React.Fragment>
  );
}

export default App;
