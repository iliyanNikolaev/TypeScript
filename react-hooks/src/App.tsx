import { useEffect, useState } from "react";
import { Counter } from "./components/Counter"
import { Heading } from "./components/Heading"
import { InputRef } from "./components/InputRef";

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('mounting');

    return () => console.log('unmouting');
  }, [])
  
  return (
    <>
     <Heading title="React Props with Typescript Example"/>
     <Counter setCounter={setCounter}>The count value is: {counter}</Counter>
     <InputRef />
    </>
  )
}
