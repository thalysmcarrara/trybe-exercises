let numbers = [5,9,3,19,70,8,100,2,35,27];
let contImpar = 0;

for(let i=0; i<numbers.length; i+=1){
    if(numbers[i]%3){
        contImpar += 1;
    }
}

if(contImpar==0){
    console.log("não existe nenhum numero primo no vetor")
}else{
    console.log(`existem ${contImpar} numero(s) impares`)
}