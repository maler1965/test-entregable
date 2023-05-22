
export const getRandom = (elements) => { // getRandom consigue los datos y los almacena en elements recibe los datos de la base de datos
    const randomIndex = Math.floor(Math.random() * elements.length); //la cantidad de elementos del array se multiplica
    return elements[randomIndex]
}