import "./App.css";
import Product from "./components/Product";
import Footer from "./pages/Footer";

import Headers from "./pages/Headers";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Headers />
      <Home />
      <Product />
      <Footer />
    </>
  );
}

export default App;
