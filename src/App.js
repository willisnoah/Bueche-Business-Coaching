import React from "react";
import About from "./routes/about";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Navbar from "./navbar";
import Services from "./routes/services";
import Home from "./routes/home";
// import { Route, Routes } from "react-router-dom";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/signup":
      component = <Signup />
      break
    case "/login":
      component = <Login />
      break
    case "/services":
      component = <Services />
  }
  return (
    <>
    <Navbar />
    {component}
    </>
  )
}

export default App;
