import uniq from 'lodash.uniq'

function getFilters(state) {
  const { mysteries } = state
  return uniq(mysteries.map(mystery => mystery.year))
}

function getActiveMysteries(state) {
  const { activeFilter, mysteries } = state
  return activeFilter === 'All' ? mysteries : mysteries.filter(mystery => mystery.year === activeFilter)
}

const selectors = { getFilters, getActiveMysteries }

export default selectors
