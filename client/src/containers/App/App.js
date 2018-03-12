import React, { Component } from 'react' //TODO: prettier to get rid of ;
import detective from '../../resources/detective.png'
import './App.css'
import Mystery from '../../components/Mystery/Mystery' //TODO: get rid of double dots
import Header from '../../components/Header/Header'
import MysteryService from '../../services/mystery-service'
const mysteryService = new MysteryService(); //should be in component did mount? shouldnt even be a class?

class App extends Component {
  state = { mysteries: [] }

  componentDidMount() {    
    mysteryService.getMysteries()
      .then(mysteries => this.setState({ mysteries }))
  }

  render() {
    const { mysteries } = this.state
    const { title } = this.props

    return (
      <div className="app">
        <Header detective={detective} title={title} />
        <div className="mysteries">
          <h2 className="mysteries__title">Closed Cases</h2><hr/>
          {mysteries.map(({id, ...props}) => <Mystery key={id} {...props} />)}
        </div>
      </div>
    );
  }
}

export default App;