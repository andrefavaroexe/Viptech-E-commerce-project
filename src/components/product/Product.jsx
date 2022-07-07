import camera1 from "../../images/camera1.svg";
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
          <h1 className="nomeProduto">Nome do produto</h1>
          <p className="marcaProduto">intelbras</p>
          <p className="precoProduto">R$300,00</p>
          <p className="corProduto">cor:branco</p>

        </div>
      </div>

      <div className="icones">
        
        <a href="#"> <img src={carrinho} alt="carrinho" /> </a>
        <a href="#"> <img src={editar} alt="editar" /> </a>
        <a href="#"> <img src={excluir} alt="excluir" /> </a> 
        
      </div>
    </div>
  );
}
