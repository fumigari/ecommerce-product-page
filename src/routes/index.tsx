 import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= {} element= {}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes;

// React Router: lib para controle de rotas que permite configurar as rotas utilizando o formato JSX.
// BrowserRouter: componente que informar à aplicação que teremos um roteamento de componentes, por isso fica em volta dos componentes <Route>.
// Route: associa a rota ao componente.