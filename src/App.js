  import React, {Component} from 'react';
  import {CardList} from "./components/card-list/card-list.component"
  import './App.css';
  import {SearchBox} from "./components/search-box/search-box.component"


// pour lancer l'appli en dev 
// cd monsters
// npm start

// pour publier sur github
// cd monsters
// git init
// git remote add origin git@github.com:thebenimou/monsters-react.git
// npm install gh-pages --save
// modifier le package.json :
//          "homepage": "https://thebenimou.github.io/monsters-react",
//          ajouter  dans scripts "predeploy": "yarn build", "deploy":"gh-pages -d build"
// yarn build
// git add -A
// git commit -m "adding files for github pages"
// ssh-keygen -t rsa
// set the key on github https://github.com/settings/keys
// git push origin master

  class App extends Component {

    constructor(){
      super();
      this.state = {
          monsters: [],
          searchField: ""
      }
    }

    render(){
      // on recréé des variables locales
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
      return (
        <div className="App">
        <h1>Monsters App</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filteredMonsters}>
        </CardList> 
      
        </div>
      ); 
    }

    componentDidMount(){
      fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
    }




  }

  export default App;
