Array.prototype.even = function(){
    return this.filter(x=>(x%2==0))
}

Array.prototype.odd = function(){
    return this.filter(x=>(x%2==1))
}