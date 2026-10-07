import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home.jsx"
import Register from "../pages/Register.jsx"
import Layout from "../components/Layout.jsx"
import ProductDescription from "../pages/ProductDescription.jsx"
import { UseBusca } from "../customHooks/useBusca.jsx"
import ProductList from "../pages/ProductList.jsx"

function Rotas() {
    return (
        <>
            <UseBusca>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="cadastrar" element={<Register />} />
                            <Route path="product-list/:termoBusca" element={<ProductList />} />
                            <Route path="product-description/:id" element={<ProductDescription />} />
                        </Route>
                        <Route path="*" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </UseBusca>
        </>
    )
}

export default Rotas