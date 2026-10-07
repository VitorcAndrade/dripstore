import { createContext, useState } from "react"

const TermoBusca = createContext(null)

function UseBusca({children}){
    const [busca, setBusca] = useState("");
    
    return(
        <>
            <TermoBusca value={{busca, setBusca}}>
                {children}
            </TermoBusca>
        </>
    )
}

export {
    UseBusca,
    TermoBusca
}