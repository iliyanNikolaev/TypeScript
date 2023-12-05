import { ILaptop } from '../contexts/LaptopsContext';

export const DashbooardItem = ({ laptop }: { laptop: ILaptop }) => {
  return (
    <div className='dashboard-item-container'>
      <h3>{laptop.title}</h3>
      <img src={laptop.img} alt="laptop" />
      <p>{laptop.price} BGN</p>
    </div>
  )
}
