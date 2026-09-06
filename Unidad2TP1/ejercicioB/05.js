let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];

    for (let i = 0; i < arr.length; i++) {
        menor = menor < arr[i] ? menor : arr[i];
        mayor = mayor > arr[i] ? mayor : arr[i];
    }
    
    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
