import { useEffect, useRef, useState } from "react"

function Slide({ imgs, width, temporizador, showIndice }) {
    const container = useRef(null)
    const [containerLargura, setContainerLargura] = useState(0)
    const [transitionTime, setTransitionTime] = useState(temporizador)
    const [indiceAtivo, setIndiceAtivo] = useState(1)

    const innerImgs = [...imgs]
    const elementos = []
    const ultimoElemento = [...imgs].pop()
    const primeiroElemento = [...imgs].shift()
    innerImgs.push(primeiroElemento)
    innerImgs.unshift(ultimoElemento)

    for (let i = 0; i < innerImgs.length; i++) {
        elementos.push(<img key={i} id={i} src={innerImgs[i]} style={{ minWidth: width }} className="teste bg-red-700 border flex justify-center items-center text-[36px]" />)
    }

    useEffect(() => {
        setContainerLargura(container.current.offsetWidth)
        const leftButton = container.current.querySelector("#left")
        const rightButton = container.current.querySelector("#right")
        leftButton.removeAttribute("disabled")
        rightButton.removeAttribute("disabled")

        if (indiceAtivo < 1) {
            leftButton.setAttribute("disabled", true)
            const timer = setTimeout(() => {
                setTransitionTime(0)
                setIndiceAtivo(innerImgs.length - 2)
            }, temporizador * 1000)

            return () => {
                clearTimeout(timer)
            }
        }

        if (indiceAtivo > innerImgs.length - 2) {
            rightButton.setAttribute("disabled", true)
            const timer = setTimeout(() => {
                setTransitionTime(0)
                setIndiceAtivo(1)
            }, temporizador * 1000)

            return () => {
                clearTimeout(timer)
            }
        }

        setTransitionTime(temporizador)

    }, [container, indiceAtivo])

    const moveSlide = (sentido) => {
        if (sentido === "esquerda") {
            setIndiceAtivo(prev => prev - 1)
        }

        if (sentido === "direita") {
            setIndiceAtivo(prev => prev + 1)
        }
    }

    return (
        <>
            <div ref={container} style={{ width: width }} className="overflow-hidden relative">
                <div className={`flex relative`} style={{ left: `-${containerLargura * indiceAtivo}px`, transitionDuration: `${transitionTime}s` }}>
                    {elementos}
                </div>
                <button id="left" className="w-[15%] absolute left-0 top-0 bottom-0" onClick={() => moveSlide("esquerda")}>{"<"}</button>
                <button id="right" className="w-[15%] absolute right-0 top-0 bottom-0" onClick={() => moveSlide("direita")}>{">"}</button>
            </div>
            {showIndice && (
                <div style={{ width: width }} className="flex gap-2 mt-2 justify-center">
                    {imgs.map((item, i) => <div key={i} className={`h-2 w-2 rounded border ${indiceAtivo === i + 1 && "bg-red-600"}`}></div>)}
                </div>
            )}
        </>
    )
}

export default Slide