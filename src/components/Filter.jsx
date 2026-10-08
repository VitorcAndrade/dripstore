import { useEffect, useRef, useState } from "react"

function Filter() {
    const [change, setChange] = useState(false)
    const formulario = useRef(null)
    useEffect(() => {
        const form = formulario.current

        const dataForm = new FormData(form)
        const data = Object.fromEntries(dataForm)


    }, [formulario, change])

    function Conversao(palavra = "Esporte e lazer") {
        const novaPalavra = palavra.toLowerCase()
        
        let resultado = "W";

        for (let i = 0; i < novaPalavra.length; i++) {
            const letra = novaPalavra[i];
            if (letra === " ") {
                resultado += novaPalavra(i, 1).toUpperCase();
                i++;
            } else {
                resultado += letra
            }

        }
        return resultado


    }
    Conversao()

    const etiquetas = [
        "Adidas",
        "Calenciaga",
        "K-Swiss",
        "Nike",
        "Puma",
        "Casual",
        "Utilitario",
        "Esporte e lazer",
        "Corrida",
        "Masculino",
        "Feminino",
        "Unissex",
        "Novo",
        "Usado"
    ]

    return (
        <>
            <aside>
                <form ref={formulario} className="flex flex-col items-start">
                    {
                        etiquetas.map((item, i) => (
                            <label htmlFor={item} key={i} className="flex flex-row-reverse gap-1">
                                {item}
                                <input onChange={() => { setChange((prev) => !prev) }} type="checkbox" id={item} name={Conversao} />
                            </label>
                        ))
                    }
                </form>
            </aside>
        </>
    )
}

export default Filter