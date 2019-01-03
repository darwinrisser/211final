import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    mediaQuestion : null,
    mediaAnswer : null,
    sportsQuestion : null,
    sportsAnswer : null,
    politicsQuestion : null,
    politicsAnswer : null
  }

  setQuestionAndAnswerMedia=()=>{
    fetch('https://opentdb.com/api.php?amount=10&category=11')
    .then(response => response.json())
    .then(data => {
      this.setState({mediaQuestion : data.results[0].question})
      this.setState({mediaAnswer : data.results[0].correct_answer})
    })
  }  

  setQuestionAndAnswerSports=()=>{
    fetch('https://opentdb.com/api.php?amount=10&category=21')
    .then(response => response.json())
    .then(data => {
      this.setState({sportsQuestion : data.results[0].question})
      this.setState({sportsAnswer : data.results[0].correct_answer})
    })
  }

  setQuestionAndAnswerPolitics=()=>{
    fetch('https://opentdb.com/api.php?amount=10&category=24')
    .then(response => response.json())
    .then(data => {
      this.setState({politicsQuestion : data.results[0].question})
      this.setState({politicsAnswer : data.results[0].correct_answer})
    })
  }

  
  
  render() {
    return (
      <div className="App">
        <h1>Easy Trivia!</h1>
        <div className="container">
          <ul>
            <li>
              <button onClick={this.setQuestionAndAnswerMedia}>Movies</button>
              <p>{this.state.mediaQuestion}</p>
              <p className="hover">Hover over answer:</p>
              <p className="answer">{this.state.mediaAnswer}</p>
            </li>
            <li>
              <button onClick={this.setQuestionAndAnswerSports}>Sports</button>
              <p>{this.state.sportsQuestion}</p>
              <p className="hover">Hover over answer:</p>
              <p className="answer">{this.state.sportsAnswer}</p>
            </li>
            <li>
              <button onClick={this.setQuestionAndAnswerPolitics}>Politics</button>
              <p>{this.state.politicsQuestion}</p>
              <p className="hover">Hover over answer:</p>
              <p className="answer">{this.state.politicsAnswer}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
