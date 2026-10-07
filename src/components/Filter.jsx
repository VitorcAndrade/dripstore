import { useEffect, useRef, useState } from "react"

function Filter() {
    const [change, setChange] = useState(false)
    const formulario = useRef(null)
    useEffect(() => {
        const form = formulario.current
        console.log(form)

    }, [formulario, change])

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
                                <input onChange={() => {setChange((prev) => !prev)}} type="checkbox" id={item} name={item} />
                            </label>
                        ))
                    }
                </form>
            </aside>
        </>
    )
}

export default Filter