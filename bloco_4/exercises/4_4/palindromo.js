let string = "desenvolvimento";

function verificaPalindromo(string){
    if(string.length%2!=0){
        let cont = string.length-1;
        for(let i =0; i<string.length;i+=1){
            if(string[i]!=string[cont]){
                return false;
            }
            cont -= 1;    
        }
        return true;
    }else{
        return false;
    }
}


if(verificaPalindromo(string)){
    console.log("é palindromo")
}else{
    console.log("não é palindromo")
}