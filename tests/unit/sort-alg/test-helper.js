export function genData(length){
    var array = [];
    while(length>0){
        array.push( Math.floor(Math.random() * length)) ;
        length --;
    }
    return array;
}

export function runTest(sortFuc, dataLen = 10000){
    let input = genData(dataLen);
    let expectOutput = input.slice().sort((a,b) => {
        return a - b;
    })
    let start = new Date();
    let output = sortFuc.call(null, input);


    return {
        output,
        expectOutput,
        runtime: `runtime of ${sortFuc.name} for ${dataLen} data is: ${new Date() -start}`
    }
}
