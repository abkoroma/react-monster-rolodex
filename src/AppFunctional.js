import React from "react";
import { useState, useEffect } from "react";
import SearchBoxFunctional from "./functional-components/search-box-functional-component/SearchBoxFunctional";
import CardListFunctional from "./functional-components/card-functional-component/CardListFunctional";
import './App.css';

export default function AppFunctional() {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users)); 
    }, []);

    useEffect(() => {
        const newFilterMonsters = monsters.filter(monster => 
            monster.name.toLocaleLowerCase().includes(searchField)
        );
        setFilteredMonsters(newFilterMonsters);
    }, [monsters, searchField]);

    function onSearchChange(e) {
        setSearchField(e.target.value.toLocaleLowerCase());
    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBoxFunctional
                className="monsters-search-box" 
                placeholder="search monsters" 
                onChangeHandler={onSearchChange}
            />
            <CardListFunctional monsters={filteredMonsters} />
        </div>
    )
}
