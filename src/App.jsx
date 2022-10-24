import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/naviation.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/Checkout/checkout.component";
import Authentication from "./routes/Authentcation/Authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop/>}></Route>
        <Route path="auth" element={<Authentication/>}></Route>
        <Route path="checkout" element={<CheckOut/>}></Route>
      </Route>
    </Routes>
  );
};
export default App;
