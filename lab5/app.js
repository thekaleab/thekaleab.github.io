// Question 1;
function sum(array){
    // let sum = 0;
    // for(let i=0;i<array.length;i++){
    //     sum+=array[i];
    // }
    // return sum;
    return array.reduce((x,y)=>x+y);
}
console.log(sum([1,2,3,4]));
console.log(sum([1,2]));

// Question 2;
function getNewArray(array2){
    // let array3 = [];
    // for(let a=0;a<array2.length;a++){
    //     if(array2[a].length>5){
    //         array3.push(array2[a]);
    //     }
    // }
    // return array3;
    return array2.filter(t=>t.length>5);
}
let xx = ["abebebe","abebe","ab"];
console.log(getNewArray(xx))
