import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { Adicionar } from './components/paginas/Page2';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Edit } from './components/editproduct/EditProduct';
import { Carrinho } from './components/carrinho/CarrinhoDeCompras';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/adicionar" element={<Adicionar/>} />
      <Route path="/editar" element={<Edit/>} />
      <Route path="/carrinho" element={<Carrinho/>} />
      </Routes>
      </BrowserRouter>
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
