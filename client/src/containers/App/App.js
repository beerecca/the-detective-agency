import React, { Component } from 'react'
import './App.css'
import Mystery from '../../components/Mystery/Mystery'
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'
import selectors from '../../utils/selectors'
import mysteryService from '../../services/mystery-service'

class App extends Component {
  state = { mysteries: [], filters: [], activeFilter: 'All' }

  async componentDidMount() {
    const mysteries = await mysteryService.getMysteries()
    this.setState({ 
      mysteries,
      filters: selectors.getFilters({mysteries})
    })
  }

  handleFilterClick = (year) => (e) => {
    this.setState({ activeFilter: year })
  }
  
  render() {
    const { filters, activeFilter } = this.state
    const activeMysteries = selectors.getActiveMysteries(this.state)

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