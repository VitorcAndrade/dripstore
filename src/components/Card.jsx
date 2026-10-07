//desconto=20%
//0.2

import { Link } from "react-router"

function Card({ desconto, src, alt, tipo, produto, genero, preco, id }) {
    return (
        <>
            <Link to={`product-description/${id}`}>
                <div className="flex flex-col w-48 bg-amber-400">
                    {desconto && (
                        <span className="tag">{desconto * 100}% OFF</span>
                    )}
                    <img src={src} alt={alt} />
                    <span className="tipo">{tipo}</span>
                    <span className="produto-genero">
                        {produto} - {genero}
                    </span>
                    <span className="preco">{preco}</span>
                    {desconto && (
                        <span className="preco-desconto">{preco - preco * desconto}</span>
                    )}
                </div>
            </Link>
        </>
    )
}

export default Card