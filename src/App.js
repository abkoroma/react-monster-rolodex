import { Component } from 'react';
import SearchBox from './components/search-box/SearchBox';
import CardList from './components/card-list/CardList';
import './App.css';

class  App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {
          monsters: users,
        }
      },
      () => {
        console.log(this.state);
      }))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField
      };
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter(monster => 
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box" 
          placeholder="search monsters" 
          onChangeHandler={onSearchChange}
         />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
