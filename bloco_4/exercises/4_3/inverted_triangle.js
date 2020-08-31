let base = 6;

function makeString(tam){
    let string = []
    let result = ""

    for (let j = 0; j < (6-tam); j+=1) {
        string.push(" ")
    }
    for (let i = 0; i < tam; i++) {
        string.push("*");
    }
    result = string.join(" ");
    return result;
}

let cont = 0;
for (let i = 0; i < base; i+=1) {
    cont += 1
    console.log(makeString(cont))
}

