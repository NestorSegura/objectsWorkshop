const processResults = require('./process-results');

describe("testing process-results function", () => {
    test("process result, success", () => {

        const expectativa = [
            {
                nombre: 'Nestor',
                apellido: 'Segura',
                direccion: {
                    calle: 'abc',
                    numbero: 1,
                    ciudad: 'Elmshorn',
                }
            },
            {
                nombre: 'Luis',
                apellido: 'Delgado',
                direccion: {
                    calle: 'abc',
                    numbero: 1,
                    ciudad: 'Santiago',
                    pais: 'Chile'
                }
            }
        ]

        const data = [
            {
                nombre: 'Nestor',
                apellido: 'Segura',
                direccion: {
                    calle: 'abc',
                    numbero: 1,
                    ciudad: 'Elmshorn',
                    pais: null
                }
            },
            {
                nombre: 'Luis',
                apellido: 'Delgado',
                direccion: {
                    calle: 'abc',
                    numbero: 1,
                    ciudad: 'Santiago',
                    pais: 'Chile'
                }
            }
        ]
        
        expect(processResults(data)).toEqual(expectativa);
        
    })

})