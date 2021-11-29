function shortest(x,y,z){
        let array = [x,y,z];
        let final =array[0];
        for(let i=0;i<array.length;i++){
            if(array[i].length<final.length){
               final= array[i];
            }
        }
    return final;
    }
console.log(shortest("zz", "z", "bye"));

