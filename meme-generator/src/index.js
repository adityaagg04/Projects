import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./style.css";

// Components
import Header from "./header";
import Input from "./input";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Input />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
