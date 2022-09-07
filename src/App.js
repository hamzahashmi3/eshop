import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login.js/Login";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Header />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes> */}
      <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">    
            <Header />
            <Home />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
