import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadNews from "./pages/CadNews";
import Header from "./Components/Header";
import Sobre from "./pages/Sobre";
import Listagem from "./pages/Listagem";

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<CadNews />} />
            <Route path="/listagem" element={<Listagem/>}/>
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;