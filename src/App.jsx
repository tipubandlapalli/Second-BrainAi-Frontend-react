import { Routes, Route } from "react-router-dom";

import Error from "./components/pages/Error";
import Product from "./components/pages/Product";
import Landing from "./components/pages/Landing";
import AboutUs from "./components/pages/AboutUs";
import Authentication from "./components/pages/Authentication";

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
