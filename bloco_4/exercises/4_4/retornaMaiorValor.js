let array = [2,3,6,7,10,1];

function retornaIndiceDoMaiorValor(array){
    let aux = array;
    let maxValue = 0;
    let indexmax
    for (const key in aux) {
        if(aux[key]>maxValue){
            indexmax = key;
            maxValue =aux[key]
        }
    }

    return indexmax;
}

console.log(retornaIndiceDoMaiorValor(array))

