import { Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import Product from "./pages/Product";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Authentication from "./pages/Authentication";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/product" element={<Product />} />
        <Route path="/product/*" element={<Product />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/auth" element={<Authentication />} />

        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
