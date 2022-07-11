import App from "../../App";
import { Header } from "../header/Header";
import "./Page2.css";
export function Adicionar() {
  return (
    <>
      <Header />

      <div className="littleHome">
        <p className="homezinha">
          <a href="home" onClick={App}>Home</a>
        </p>
        <p> > Adicionar Produtos</p>
      </div>

      <div>
        <h1 className="tittle">Adicionar Produto</h1>
      </div>


    </>
  );
}
