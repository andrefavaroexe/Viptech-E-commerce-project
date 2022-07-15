import App from "../../App";
import { Header } from "../header/Header";
import "./Page2.css";
import { Post } from "../form/post";
import { Calendario } from "../calender/Calendar"

export function Adicionar() {
  return (
    <>
      <Header />
      <div className="littleHome">
        <p className="homezinha">
          <a href="/" onClick={App}>Home</a>
        </p>
        <p> > Adicionar Produtos</p>
      </div>
      <div>
        <h1 className="tittle">Adicionar Produto</h1>
      </div>
      <div>
        <Post/>
      </div>
      <div>
      <Calendario/>
      </div>

    </>
  );
}
