 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

const AppRoutes = {
  Home: '/',
  NotFound: '*',
}
const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= {AppRoutes.Home} element= {<Home />}/>
        <Route path= {AppRoutes.NotFound} element= {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes;

// React Router: lib para controle de rotas que permite configurar as rotas utilizando o formato JSX.
// BrowserRouter: componente que informar à aplicação que teremos um roteamento de componentes, por isso fica em volta dos componentes <Route>.
// Route: associa a rota ao componente.