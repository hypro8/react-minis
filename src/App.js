import React from "react";
import BirthdayReminder from "./01-birthday-reminder/App";
import ToursApp from "./02-tours/App";
import ReviewsApp from "./03-Reviews/App";
import "./App.css";

function App() {
    return (
        <div className="container">
            {/* <BirthdayReminder /> */}
            {/* <ToursApp /> */}
            <ReviewsApp />
        </div>
    );
}

export default App;
