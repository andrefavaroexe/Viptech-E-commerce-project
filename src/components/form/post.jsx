import React from "react";
import { useForm } from "react-hook-form";
import "./post.css";
import Photobox from "../../images/photobox.svg";
export function Post() {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();
  const addPost = (data) => console.log(data);

  return (
    <main>
      <div className="card-post">
        <div className="line-post"></div>

        <div className="card-body-post">
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <fieldset>
                <legend>Nome do produto</legend>
                <input
                  required
                  placeholder="Nome do produto"
                  type="text"
                  name="title"
                  {...register("title")}
                />
              </fieldset>
            </div>

            <div className="fields">
              <fieldset>
                <legend>Marca do produto</legend>
                <input
                  required
                  placeholder="Marca do produto"
                  type="text"
                  name="brand"
                  {...register("brand")}
                />
              </fieldset>
            </div>

            <div className="fields">
              <fieldset className="value">
                <legend>Valor</legend>
                <span>R&#36;</span>
                <input
                  required
                  placeholder="Insira o valor"
                  type="number"
                  name="value"
                  {...register("value")}
                ></input>
              </fieldset>
            </div>

            <div className="fields">
              <fieldset className="value">
                <legend>Selecione a cor do produto</legend>
                <select className="options">
                  <option value="selecione a cor">Selecione a cor</option>
                  <option value="branco">branco</option>
                  <option value=" preto"> preto</option>
                  <option value=" cinza"> cinza</option>
                </select>
              </fieldset>
            </div>
            <div className="fields">
              <fieldset className="value">
                <legend>Data de cadastro</legend>
                <input
                  className="data"
                  value="2022-07-15"
                  required
                  type="date"
                />
              </fieldset>
            </div>

            <div className="photobox">
              <img src={Photobox}></img>
              <p className="description">Adicionar fotos</p>
              <input className="photoinput" type="file" required />
            </div>

            <div className="btn-post ">
              <button type="submit">Adicionar Produto</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Post;
