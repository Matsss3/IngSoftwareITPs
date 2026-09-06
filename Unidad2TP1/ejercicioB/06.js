let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    result = arr;
    return result.filter(x => x > 0).length;
}
    
let resultado = cuantosPositivos(array);
console.log(resultado);
