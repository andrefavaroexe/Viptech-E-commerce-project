import React from "react";
import { Post } from "../form/post";
import { Header } from "../header/Header";
import App from "../../App";

export function Edit () {
    return (
        <>
        
      <Header />
      <div className="littleHome">
        <p className="homezinha">
          <a href="/" onClick={App}>Home</a>
        </p>
        <p> &#187; Editar Produto</p>
      </div>
      <div>
        <h1 className="tittle">Editar Produto</h1>
      </div>
      <div>
        <Post/>
      </div>
      <div>
    
      </div>

        </>
    )
}