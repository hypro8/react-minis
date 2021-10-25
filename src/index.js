import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import "./App.css";

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

import TabsApp from "./06-tabs/App";
import "./06-tabs/index.css";

function App() {
  return (
    <>
      {/* <BirthdayReminder /> */}
      {/* <ToursApp /> */}
      {/* <ReviewsApp /> */}
      {/* <Accordian /> */}
      {/* <Menu /> */}
      <TabsApp />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
