import { useEffect, useState } from "react"
import FormSection from "./FormSection.jsx"

function Form(props) {

    const [data, setData] = useState({})
    const [cep, setCep] = useState("")

    useEffect(()=>{
        if(cep.length < 8) return

        async function fetchCep(){
            const fetchData = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const dataFetch = await fetchData.json()

            setData(dataFetch)
        }

        fetchCep()
    }, [cep])

    function submitData(e){
        e.preventDefault()
        const form = e.target

        const formData = new FormData(form)
        const dataForm = Object.fromEntries(formData)

        const a = JSON.stringify(dataForm)
    }

    return (
        <>
            <form onSubmit={(e)=>{submitData(e)}} className="p-4">
                <h2></h2>
                <FormSection valorCep={cep} onSetCep={setCep} data={data} titulo="Informações de entrega" />
                <button>manda</button>
            </form>
        </>
    )
}

export default Form