import { MouseEvent, ReactNode } from "react"

interface CounterProps {
    setCounter: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

export const Counter = ({ setCounter, children }: CounterProps) => {
    const decrease = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.target)
        setCounter(prev => prev - 1);
    }
    const reset = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.target)
        setCounter(0);
    }
    const increase = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.target)
        setCounter(prev => prev + 1);
    }

  return (
    <div>
        <h2>{children}</h2>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={increase}>+</button>
    </div>
  )
}
