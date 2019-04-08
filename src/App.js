import React, { Component } from 'react';
import basketcards from './basketcards.json';
import Wrapper from './components/wrapper/wrapper'
import './App.css';
import Card from "./components/card/card";

class App extends Component {
state = {
  basketcards,
  score: 0,
  highscore: 0
};
handleIncorrect = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log(this.state.highscore);
      alert(`new highscore: ${this.state.score}`);
      this.setState({score: 0});
    });
  }
this.state.basketcards.forEach(basketcard => {
  basketcard.count = 0;
});
alert(`your score was: ${this.state.score}`);
return true;
}

handleCorrect = id => {
  // eslint-disable-next-line array-callback-return
  this.state.basketcards.find((o, i) => {
    if (o.id === id) {
      if(basketcards[i].count === 0){
        basketcards[i].count = basketcards[i].count + 1;
        this.setState({score: this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.basketcards.sort(() => Math.random() - 0.5)
        return true;
      } else { this.handleIncorrect();
      }
    }
  });
}

  render() {
    return (
      <Wrapper>

{this.state.basketcards.map(basketcard => (
  <card 
    clickCount={this.handlecorrect}
    id={basketcard.id}
    key={basketcard.id}
    image={basketcard.image}
    />
))}
      </Wrapper>
    );
  }
}

export default App;
