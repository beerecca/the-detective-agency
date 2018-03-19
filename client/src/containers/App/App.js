import React, { Component } from 'react'
import './App.css'
import Mystery from '../../components/Mystery/Mystery'
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'
import utils from '../../utils/utils'
import mysteryService from '../../services/mystery-service'

class App extends Component {
  state = { mysteries: [], filters: [], activeFilter: 'All' }

  async componentDidMount() {
    const mysteries = await mysteryService.getMysteries()
    this.setState({ 
      mysteries,
      filters: utils.getFilters({mysteries})
    })
  }

  handleFilterClick = (year) => (e) => {
    this.setState({ activeFilter: year })
  }
  
  render() {
    const { filters, activeFilter } = this.state
    const activeMysteries = utils.getActiveMysteries(this.state)

    return (
      <div className="app">
        <Header />

        <div className="filters">
          <p>Filter by year:</p>
          {['All', ...filters].map(year => {
            return <Filter 
              key={year} 
              year={year} 
              filterClick={this.handleFilterClick(year)} 
              isActive={activeFilter === year}/>
          })}
        </div>
        
        <div className="mysteries">
          {activeMysteries.map(({id, ...props}) => <Mystery key={id} {...props} />)}
        </div>
      </div>
    )
  }
}

export default App