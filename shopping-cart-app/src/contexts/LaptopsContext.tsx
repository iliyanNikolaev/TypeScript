import { createContext, ReactElement, useEffect, useState } from 'react';

export interface ILaptop {
    id: number,
    title: string,
    price: number,
    img: string
}

interface LaptopsContextProps {
    getLaptops: () => ILaptop[],
}

const initValue: LaptopsContextProps = { 
    getLaptops: () => []
};

const LaptopsContext = createContext<LaptopsContextProps>(initValue);

export const LaptopsContextProvider = ({ children }: { children: ReactElement | ReactElement[]}) => {
    
    const [laptops, setLaptops] = useState<ILaptop[]>([]);

    useEffect(() => {
        async function fetchLaptops(): Promise<ILaptop[]> {
            const response = await fetch('http://localhost:6161/laptops');
            const data = await response.json();
            return data;
        }

        fetchLaptops()
            .then(data => setLaptops(data))
            .catch(err => console.log(err.message));
    }, [])

    function getLaptops(): ILaptop[] {
        return laptops;
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


