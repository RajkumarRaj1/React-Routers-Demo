import AppHeader from "./components/common/AppHeader";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contacts/Contact";
import Cart from "./components/Carts/Cart";
import AppFooter from "./components/common/AppFooter";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Products/product";
import ProductItem from "./components/Products/ProductItem";

const App = () => {
  return (
    <div className="h-screen container mx-auto">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<ProductItem />} />
        <Route path="/carts" element={<Cart />} />
        <Route
          path="*"
          element={
            <div className="h-full bg-red-400">
              <h1 className="text-3xl font-bold border-2 text-center h-screen">
                something went wrong
              </h1>
            </div>
          }
        />
      </Routes>
      <AppFooter />
    </div>
  );
};

export default App;
