//megasena



function generateNumbersMega() {
    let megaSenaNumbers = []

    for(let i=0; i < 6; i+=1){
        let randomNumber = Math.random()*60
        megaSenaNumbers.push(Math.ceil(randomNumber))
        console.log(megaSenaNumbers[i])
    }

    return megaSenaNumbers;

}