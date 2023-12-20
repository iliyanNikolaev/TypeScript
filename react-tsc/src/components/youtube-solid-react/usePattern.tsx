import { useState } from "react";

interface usePatternReturnVal {
    value: number,
    last: number | null,
    fncs: {
        increment: () => void,
        decrement: () => void
    }
}

export const usePattern = (): usePatternReturnVal => {
    const [value, setValue] = useState<number>(0);
    const [last, setLast] = useState<number | null>(null);

    const fncs = {
        increment: () => {
            let num: number = Number(Math.random().toString().slice(-3));

            setValue(prev => prev + num);
            setLast(num);
        },
        decrement: () => {
            let num: number = Number(Math.random().toString().slice(-3));

            setValue(prev => prev - num);
            setLast(num);
        }
    }
    return {
        value,
        last,
        fncs
    }
}