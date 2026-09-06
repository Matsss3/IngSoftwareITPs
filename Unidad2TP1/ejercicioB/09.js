let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito'
}];

function toCollection(arr) {
    let collection = [];

    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];
        collection[i] = elemento[1];
        collection[i].id = elemento[0];
    }
    
    return collection;
}

let resultado = toCollection(array);
console.log(resultado);
