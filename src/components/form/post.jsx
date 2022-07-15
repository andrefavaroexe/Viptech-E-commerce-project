import React from "react";
import { useForm } from "react-hook-form";
import "./post.css";
import { Calenario } from "../calender/Calendar";


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
              <label>Nome do produto</label>
              <input type="text" name="title" {...register("title")} />
            </div>

            <div className="fields">
              <label>Marca do produto</label>
              <input type="text" name="brand" {...register("brand")} />
            </div>

            <div className="fields">
              <label>Valor</label>
              <input type="string" name="value" {...register("value")}></input>
            </div>

            <div className="fields">
              <label>Selecione a cor do produto</label>
              <select {...register("cor:")}>
              <input className="" type="text" name="color" {...register("color")}/>
        <option value="branco">branco</option>
        <option value=" preto"> preto</option>
        <option value=" cinza"> cinza</option>
      </select>
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
