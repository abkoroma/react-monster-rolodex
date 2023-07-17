import { Monster } from '../../App';
import './card-list.css';

type CardProps = {
    monster: Monster;
}

export default function Card({ monster }: CardProps) {
    const { name, email, id } = monster;

    return (
        <div className='card-container' key={id}>
            <img 
                alt={`${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=180x180`} 
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
