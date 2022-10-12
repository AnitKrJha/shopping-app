import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/naviation.component";
import Authentication from "./routes/Authentcation/Authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<div>I am shop</div>}></Route>
        <Route path="auth" element={<Authentication/>}></Route>
      </Route>
    </Routes>
  );
};
export default App;
