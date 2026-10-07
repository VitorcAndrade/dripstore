import ProductSection from "../components/ProductSection"
import { useParams } from "react-router"

function ProductList(){
    const {termoBusca} = useParams()
    return(
        <>
            {termoBusca}
            <ProductSection />
        </>
    )
}

export default ProductList