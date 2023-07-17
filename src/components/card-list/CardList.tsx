import Card from './Card';
import { Monster } from '../../App';
import './card-list.css';

type CardListProps = {
    monsters: Monster[];
}

export default function CardList({ monsters }: CardListProps) {
    return(
        <div className='card-list'>
            {monsters.map(monster => {
                return (
                    <Card key={monster.id} monster={monster} />
                );
            })}
        </div>
    );
}