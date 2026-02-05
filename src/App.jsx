import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Searchbar from "./components/Searchbar";
import Product from "./components/Product";
import Support from "./components/Support";
import Category from "./components/Category";
import PageNotFound from "./components/PageNotFound";
import Food from "./components/Food";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Searchbar />
              <Main />
            </div>
          }
        />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/:id" element={<Food />} />
        {/* <Route path="/support" element={<Support />} /> */}
        {/* <Route path="/category" element={<Category />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
