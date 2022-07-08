import { Button } from "./components/button/Button";
import { Header } from "./components/header/Header";
import { Product } from "./components/product/Product";
import { Product2 } from "./components/product/Product";
import { Product3 } from "./components/product/Product";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="produto">
          <h1>Produtos</h1>
          <Button />
        </div>
      </div>

      <div>
        <Product />
        <Product2 />
        <Product3 />
      </div>
    </>
  );
}

export default App;
