import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanjiList from './modules/KanjiList';
import KanjiForm from './modules/KanjiForm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:[]
    }
  }

  //KANJI API

  getKanjis = () => {
    let fetchObject = {
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/json"
      }
    }
    fetch("/api/kanjis").then((response) => {
      if(response.ok){
        response.json().then((data) => {
          this.setState({
            list:data
          })
        }).catch((error) => {
          console.log(error)
        })
      } else {
        console.log("Server responded with status:"+response.status)
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <div className="App">
          <KanjiForm />
      </div>
    );
  }
}

export default App;
