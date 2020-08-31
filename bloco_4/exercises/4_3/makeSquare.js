let lados = 5;

function makeString(lados){
    let string = []
    let result = ""
    for (let i = 0; i < lados; i++) {
        string.push("*");
    }
    result = string.join(" ");
    return result;
}


for (let i = 0; i < lados; i+=1) {
    
    console.log(makeString(lados));
}