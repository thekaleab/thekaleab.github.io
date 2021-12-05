function printNumbers(from, to){
    let first =from
    let timer = setInterval(function(){
        alert(first);
        if(first==to){
            clearInterval(timer)
        }
        first++;
    },1000)
}
