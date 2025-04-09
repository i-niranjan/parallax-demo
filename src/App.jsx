import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
