
const { fizzBuzz } = require('./fizz-buzz')

describe("testing fizzbuzz function", () => {

    test("test buzz", () => {
        const expected = 'buzz'
        expect(fizzBuzz(5)).toBe(expected)
        expect(fizzBuzz(25)).toBe(expected)
        expect(fizzBuzz(50)).toBe(expected)
        expect(fizzBuzz(35)).toBe(expected)
    
    })

    test("test fizz", () => {
        const expected = 'fizz'

        expect(fizzBuzz(18)).toBe(expected)
        expect(fizzBuzz(3)).toBe(expected)
        expect(fizzBuzz(21)).toBe(expected)
    })

    test("test fizzBuzz", () => {
        const expected = 'fizzBuzz'
        expect(fizzBuzz(60)).toBe(expected)
        expect(fizzBuzz(15)).toBe(expected)
        expect(fizzBuzz(30)).toBe(expected)
        expect(fizzBuzz(3000)).toBe(expected)
        expect(fizzBuzz(75)).toBe(expected)
        
    })

})