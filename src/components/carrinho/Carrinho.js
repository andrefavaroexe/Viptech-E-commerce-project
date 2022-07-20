import App from "../../App";
import { Header } from "../header/Header";
import "../paginas/Page2.css";
import "../carrinho/Carrinho.css";
import camera1 from "../../images/camera1.svg";
import { Counter } from "./Counter";
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
      <div className="PaiDeTodos">
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
          <hr width="95%" />
          <div className="CounterBox">
            <div className="QuantidadeCarrinho">
              <p>Quantidade:</p>
              <Counter />
              <p className="ValorCounter">Valor:R$300,00</p>
            </div>
          </div>
        </div>


        <div className="ResumoPedido">
          <div className="InformacoesPedido">
            <p className="TextPedido">Subtotal (1 item) </p>
            <p className="ValoresPedido">R$300,00</p>
          </div>
          <hr width="90%" />

          <div className="InformacoesPedido">
            <p className="TextPedido">Frete </p>
            <p className="ValoresPedido">R$30,00</p>
          </div>
          <hr width="90%" />

          <div className="InformacoesPedido">
            <p className="TextPedido">Valor total </p>
            <p className="ValoresPedido">R$330,00</p>
          </div>
          <div className="BotaoResumo">
          <button className="Button">PAGAR</button>
          </div>         
        </div>
      </div>
        
        <div className="NotaPedido">
        <p className="pagamentorealizadotitle">Pagamento Realizado com Sucesso!</p>
        <p className="pagamentorealizado">Este pagamento foi realizado com:</p>
        <p className="pagamentorealizado">3 Cedulas de R$100,00</p>
        <p className="pagamentorealizado">1 Cédula de R$20,00</p>
        <p className="pagamentorealizado">1 Cédula de R$10,00</p>
        </div>

    </>
  );
}
