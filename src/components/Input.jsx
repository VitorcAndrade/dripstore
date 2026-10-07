import { useState } from "react"

function Input({htmlfor, type, label, required, placeholder, valor, readOnly, onChange}){

    const [inputValue, setInputValue] = useState("")

    function handleValue(e){

        if(onChange){
            onChange(e.target.value)
        } else {
            setInputValue(e.target.value)
        }
    }

    return(
        <>
            <label className="flex flex-col text-[12px] font-bold" htmlFor={htmlfor}>
                {label}{required && " *"}
                <input name={htmlfor} readOnly={readOnly} onChange={(e)=>{handleValue(e)}} className="bg-[#4747471f] rounded text-[16px] font-normal" type={type} required={required} placeholder={placeholder} value={valor || inputValue} />
            </label>
        </>
    )
}

export default Input