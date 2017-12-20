import React, { Component } from 'react';
import detective from './detective.png';
import './App.css';

class App extends Component {
  state = { mysteries: [] }

  componentDidMount() {
    fetch('/mysteries')
      .then(res => res.json())
      .then(mysteries => this.setState({ mysteries }))
  }

  render() {
    const { mysteries } = this.state
    const { title } = this.props

    console.log('title', title);
    

    return (
      <div className="app">
        <header className="header">
          <img src={detective} className="header__detective" alt="Detective" />
          <h1 className="header__title">{title}</h1>
        </header>
        <div className="mysteries">
          <h2 className="mysteries__title">Closed Cases</h2><hr/>
          {mysteries.map(({id, name, year, culprit, quote}) => {
            return (
              <div key={id}>
                <p className="mysteries__name">{name} | {year}</p>
                <p>Culprit: {culprit}</p>
                <p>{quote}</p>
                <hr/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;