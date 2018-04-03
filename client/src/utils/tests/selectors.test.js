import selectors from '../selectors'

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
    expect(selectors.getFilters({mysteries})).toEqual(['1998', '1925'])
  })
})

describe('getActiveMysteries', () => {
  it('returns all mysteries if activeFilter is All', () => {
    expect(selectors.getActiveMysteries({mysteries, activeFilter: 'All'})).toEqual(mysteries)
  })

  it('returns only mysteries where activeFilter matches year', () => {
    expect(selectors.getActiveMysteries({mysteries, activeFilter: '1998'})).toEqual([mysteries[0], mysteries[1]])
  })
})
