const processResults = require('./process-results');

describe("testing process-results function", () => {
    test("process result, success", () => {
        
        expect(processResults()).toEqual(1);
        
    })

})