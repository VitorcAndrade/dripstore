import Card from "./Card.jsx"
import img from '../assets/tenis.svg'
import produtos from "../utilities/produtos.js"

function ProductSection() {
    const listaCards = []
    for (let i = 0; i < produtos.length; i++) {
        const item = produtos[i]
        listaCards.push(<Card key={item.id} desconto={item.desconto} src={img} alt={item.alt} tipo={item.tipo} produto={item.produto} genero={item.genero} preco={item.preco} id={item.id} />)
    }

    return (
        <>
            <div className="flex gap-[5%] flex-wrap items-center justify-center">
                {listaCards}
            </div>
        </>
    )
}

export default ProductSection