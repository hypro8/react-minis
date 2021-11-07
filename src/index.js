import React from "react";
import ReactDOM from "react-dom";

// import CounterReducerApp from "./00-playground/Counter_reducer";
// import TodoReducerApp from "./00-playground/Todo_reducer";

// import BirthdayReminder from "./01-birthday-reminder/App";
// import "./01-birthday-reminder/index.css";
// import ToursApp from "./02-tours/App";
// import "./02-tours/index.css";
// import ReviewsApp from "./03-Reviews/App";
// import "./03-Reviews/index.css";
// import Accordian from "./04-accordian/App";
// import "./04-accordian/index.css";
// import Menu from "./05-Menu/src/App";
// import "./05-Menu/src/index.css";

// import TabsApp from "./06-tabs/App";
// import "./06-tabs/index.css";

// import "./07-slicer/index.css";
// import ReviewSlicerApp from "./07-slicer/App";
// import ReviewSlicerApp_2 from "./07-slicer/App2";

// import "./08-Lorem-Ipsum/index.css";
// import LoremIpsum from "./08-Lorem-Ipsum/App";

// import "./09-color-generator/index.css";
// import ColorGenerator from "./09-color-generator/App";

// import "./10-grocery-bud/index.css";
// import GroceryBudApp from "./10-grocery-bud/App";

// import "./11-navbar/index.css";
// import NavbarApp from "./11-navbar/App";

// import "./12-sidebar-modal/index.css";
// import SideBarModal from "./12-sidebar-modal/App";
// import { AppProvider } from "./12-sidebar-modal/Context";

// import "./13-Stripe-submenus/index.css";
// import StripeApp from "./13-Stripe-submenus/App";
// import { AppProvider } from "./13-Stripe-submenus/Context";

// import "./14-cart/index.css";
// import { AppProvider } from "./14-cart/context";
// import CartApp from "./14-cart/App";

import "./15-CocktailBar/index.css";
import { AppProvider } from "./context";
import CocktailApp from "./15-CocktailBar/App";

function App() {
  return (
    <>
      {/* <CounterReducerApp /> */}
      {/* <TodoReducerApp /> */}
      {/* <BirthdayReminder /> */}
      {/* <ToursApp /> */}
      {/* <ReviewsApp /> */}
      {/* <Accordian /> */}
      {/* <Menu /> */}
      {/* <TabsApp /> */}
      {/* <ReviewSlicerApp /> */}
      {/* <ReviewSlicerApp_2 /> */}
      {/* <LoremIpsum /> */}
      {/* <ColorGenerator /> */}
      {/* <GroceryBudApp /> */}
      {/* <NavbarApp /> */}
      {/* <SideBarModal /> */}
      {/* <StripeApp /> */}
      {/* <CartApp /> */}
      <CocktailApp />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
