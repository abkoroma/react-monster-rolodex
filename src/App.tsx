import { useState, useEffect, ChangeEvent } from 'react';
import SearchBox from './components/search-box/SearchBox';
import CardList from './components/card-list/CardList';
import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
    id: string;
    name: string;
    email: string;
}

export default function AppTS() {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);
    
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users);
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box" 
          placeholder="search monsters" 
          onChangeHandler={onSearchChange}
         />
        <CardList monsters={filteredMonsters} />
      </div>
    );
}