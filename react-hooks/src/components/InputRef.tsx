import { useRef } from "react"

export const InputRef = () => {

    const inputReference = useRef<HTMLInputElement>(null);

    const logRefValue = () => { 
        console.log(inputReference.current) 
        console.log(inputReference?.current?.value)
    }
    
    return (
        <>
            <button onClick={logRefValue}>
                Click
            </button>
            <input type="text" ref={inputReference} />
        </>
    )
}
