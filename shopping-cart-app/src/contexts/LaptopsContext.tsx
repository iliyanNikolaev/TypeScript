import { createContext, ReactElement, useContext } from 'react';

export interface ILaptop {
    id: number,
    title: string,
    price: number,
    img: string
}

interface LaptopsContextProps {
    getLaptops: () => Promise<ILaptop[]>,
}

const initValue: LaptopsContextProps = { 
    getLaptops: () => new Promise(resolve => resolve([]))
};

const LaptopsContext = createContext<LaptopsContextProps>(initValue);

export const LaptopsContextProvider = ({ children }: { children: ReactElement | ReactElement[]}) => {

    async function getLaptops(): Promise<ILaptop[]> {
        const res = await fetch('http://localhost:6161/laptops');
        return res.json();
    }

    const ctx = {
        getLaptops
    }

    return (
        <LaptopsContext.Provider value={ctx}>
            {children}
        </LaptopsContext.Provider>
    )
}

export const useLaptopContext = (): LaptopsContextProps => {
    const ctx = useContext(LaptopsContext)
    return ctx;
}


