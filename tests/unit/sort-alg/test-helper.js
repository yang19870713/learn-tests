export function genData(length){
    var array = [];
    while(length>0){
        array.push( Math.floor(Math.random() * length)) ;
        length --;
    }
    return array;
}
