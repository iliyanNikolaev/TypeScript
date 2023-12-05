import { useEffect, useState } from 'react';
import { ILaptop, useLaptopContext } from '../contexts/LaptopsContext';
import { DashbooardItem } from './DashbooardItem';

export const Dashboard = () => {
    const [laptops, setLaptops] = useState<ILaptop[] | null>(null)

    const { getLaptops } = useLaptopContext()

    useEffect(() => {
        getLaptops()
            .then(data => setLaptops(data))
            .catch(err => alert(err.message))
    }, []);

    return (
        <section>
            <h1>Dashboard</h1>
            {laptops
                ? <div className='list-container'>
                    {laptops.map(laptop => <DashbooardItem key={laptop.id} laptop={laptop}/>)}
                </div>
                : <p>Loading...</p>}
        </section>
    )
}
