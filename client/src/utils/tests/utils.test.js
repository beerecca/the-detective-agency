import utils from '../utils'

const mysteries = [
  {
    name: 'foo',
    year: '1998'
  },
  {
    name: 'bar',
    year: '1998'
  },
  {
    name: 'baz',
    year: '1925'
  }
]

describe('getFilters', () => {
  it('returns a unique list of mystery years', () => {
    expect(utils.getFilters({mysteries})).toEqual(['1998', '1925'])
  })
})

describe('getActiveMysteries', () => {
  it('returns all mysteries if activeFilter is All', () => {
    expect(utils.getActiveMysteries({mysteries, activeFilter: 'All'})).toEqual(mysteries)
  })

  it('returns only mysteries where activeFilter matches year', () => {
    expect(utils.getActiveMysteries({mysteries, activeFilter: '1998'})).toEqual([mysteries[0], mysteries[1]])
  })
})
