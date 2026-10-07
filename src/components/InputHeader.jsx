import { useContext } from "react"
import { TermoBusca } from "../customHooks/useBusca"
import { useNavigate } from "react-router";

function InputHeader() {
    const { busca, setBusca } = useContext(TermoBusca);
    const navigate = useNavigate();

    return (
        <>
            <form onSubmit={()=> navigate(`product-list/${busca}`)}>
                <input type="text" className="bg-gray-200" value={busca} onInput={(e) => { setBusca(e.target.value) }} />
                <button>E</button>
                <input id="ch" type="checkbox" className="" />
            </form>
        </>
    )
}

export default InputHeader