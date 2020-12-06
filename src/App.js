import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {}
    );
  };

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.onChange}
          value={this.state.searchText}
          placeholder="search monsters"
          name="searchText"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
