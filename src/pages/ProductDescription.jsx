import Card from "../components/Card.jsx"
import img from '../assets/tenis.svg'
import produtos from "../utilities/produtos.js"
import { useParams } from "react-router"

function ProductDescription(){
    const { id } = useParams()

    const encontrado = produtos.find( item => item.id == id)

    return (
        <>
            <Card desconto={encontrado.desconto} src={img} alt={encontrado.alt} tipo={encontrado.tipo} produto={encontrado.produto} genero={encontrado.genero} preco={encontrado.preco}/>
        </>
    )
}

export default ProductDescription