// Question 1;
function sum(array){
    // let sum = 0;
    // for(let i=0;i<array.length;i++){
    //     sum+=array[i];
    // }
    // return sum;
    return array.filter(t=>t>20).reduce((x,y)=>x+=y,0);
}
console.log(sum([1,2,3,4,20,25,45,90]));
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
    return array2.filter(t=>t.length>5 && t.includes("a"));
}
let xx = ["abebebe","abebe","ab","dfgfgr"];
console.log(getNewArray(xx))
