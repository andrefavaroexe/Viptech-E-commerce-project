import camera3 from "../../images/camera3.svg";
import camera1 from "../../images/camera1.svg";
import camera2 from "../../images/camera2.svg";
import carrinho from "../../images/carrinho.png";
import editar from "../../images/editar.png";
import excluir from "../../images/excluir.png";
import "./Product.css";
export function Product() {
  return (
    <div className="listaProduto">
      <div className="informacoesProduto">
        <img src={camera1} alt="camera1"></img>

        <div className="productBox">
          <h1 className="nomeProduto">
            Câmera interna inteligente WI-FI Full HD IM3
          </h1>
          <p className="marcaProduto">intelbras</p>
          <p className="precoProduto">R$300,00</p>
          <p className="corProduto">cor:branco</p>
        </div>
      </div>

      <div className="icones">
        <a href="#">
          {" "}
          <img src={carrinho} alt="carrinho" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={editar} alt="editar" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={excluir} alt="excluir" />{" "}
        </a>
      </div>
    </div>
  );
}

export function Product2() {
  return (
    <div className="listaProduto">
      <div className="informacoesProduto">
        <img src={camera2} alt="camera2"></img>

        <div className="productBox">
          <h1 className="nomeProduto">
            Câmera DS-2CD 2583G2-l
          </h1>
          <p className="marcaProduto">HilkVision</p>
          <p className="precoProduto">R$645,00</p>
          <p className="corProduto">cor:branco</p>
        </div>
      </div>

      <div className="icones">
        <a href="#">
          {" "}
          <img src={carrinho} alt="carrinho" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={editar} alt="editar" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={excluir} alt="excluir" />{" "}
        </a>
      </div>
    </div>
  );
}

export function Product3() {
  return (
    <div className="listaProduto">
      <div className="informacoesProduto">
        <img src={camera3} alt="camera3"></img>

        <div className="productBox">
          <h1 className="nomeProduto">
            Câmera interna inteligente WI-FI Full HD IM4
          </h1>
          <p className="marcaProduto">intelbras</p>
          <p className="precoProduto">R$349,00</p>
          <p className="corProduto">cor:branco</p>
        </div>
      </div>

      <div className="icones">
        <a href="#">
          {" "}
          <img src={carrinho} alt="carrinho" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={editar} alt="editar" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={excluir} alt="excluir" />{" "}
        </a>
      </div>
    </div>
  );
}
