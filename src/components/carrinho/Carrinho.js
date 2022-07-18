import App from "../../App";
import { Header } from "../header/Header";
import "../paginas/Page2.css";
import "../carrinho/Carrinho.css";
import camera1 from "../../images/camera1.svg";

export function CarrinhoCompra() {
  return (
    <>
      <Header />
      <div className="littleHome">
        <p className="homezinha">
          <a href="/" onClick={App}>
            Home
          </a>
        </p>
        <p> &#187; Carrinho</p>
      </div>

      <div className="paititulo">
        <h1 className="tittle">Carrinho</h1>
        <h1 className="tittle">Resumo do Pedido</h1>
      </div>
      <div className="CarrinhoNcounter">
        <div className="CarrinhoBox">
          <div className="listaProduto">
            <div className="informacoesProduto">
              <img src={camera1} alt="camera1"></img>

              <div className="productBox">
                <h1 className="nomeProdutoCarrinho">
                  Câmera interna inteligente WI-FI Full HD IM3
                </h1>
                <p className="marcaProduto">intelbras</p>

                <p className="corProdutoCarrinho">cor:branco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
