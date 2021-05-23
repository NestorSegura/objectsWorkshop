
module.exports = processResults = (data) => {
    // realiza un ciclo de 100 iteraciones (loop)
    // utiliza tu función de fizzBuzz para saber si el resultado es fizz, buzz, o fizzBuzz
    // lee y extrae en un Objeto, cuantas veces se obtiene fizz, cuantas buzz y cuantas su combinación fizzBuzz
    // devuelve el resultado 

    const personas = [
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

    if (!data) {
        data = personas
    }

    const nuevasPersonas = data.map(persona => {
        const direction = Object.entries(persona.direccion)
            .filter(entry => { // ["calle", "abc"], ["numero", "1"]...
                const key = entry[0]
                const value = entry[1]
                return !!value
            })
        const nuevaDireccion = Object.fromEntries(direction)

        return {
            ...persona, 
            direccion: nuevaDireccion
        }
    })

    return nuevasPersonas
}

function abc(objeto) {
    objeto.nombre = 'nuevo nombre'
}

