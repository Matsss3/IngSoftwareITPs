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

function toPairs(arr) {
    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];
        pairs[i] = [elemento.id, elemento];

    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
