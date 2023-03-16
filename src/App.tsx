import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";

function Page() {
  return (
    <div className="center">
      <div className="conc">
      <h1 className="hello">Hello World!</h1>
      <Button />
      </div>
    </div>
  );
}

export default Page;
