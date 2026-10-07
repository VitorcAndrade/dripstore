import Input from "./Input.jsx"

function FormSection(props) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h3 className="text-[14px] font-bold">{props.titulo}</h3>
                <hr />
                <Input htmlfor="cep" valor={props.valorCep} onChange={props.onSetCep} type="text" label="Cep" required={true} placeholder="Insira seu cep" />
                <Input htmlfor="complemento" type="text" label="Complemento" placeholder="Insira complemento" />
                <Input valor={props.data.logradouro} htmlfor="endereco" type="text" label="Endereco" placeholder="Endereco" required={true} />
                <Input valor={props.data.bairro} htmlfor="bairro" type="text" label="Bairro" placeholder="Bairro" required={true} />
                <Input valor={props.data.localidade} htmlfor="cidade" type="text" label="Cidade" placeholder="Cidade" required={true} />
            </div>

        </>
    )
}

export default FormSection