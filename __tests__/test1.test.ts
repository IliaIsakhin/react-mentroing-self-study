import constructURL from '../src/utils/utils'

test('construct url', () => {
    expect(constructURL('http://test.com', {1: '1', 2: '2'})).toBe('http://test.com?1=1&2=2')
})