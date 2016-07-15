import {runTest} from './test-helper';
const expect = chai.expect;
function swap(array, x, y){
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

function selectSort(array){
    let min;
    for(let i = 0; i<array.length-1; i ++){
        min = i;
        for(let j = i+1; j<array.length; j++){
            if(array[j] < array[min]){
                min = j
            }
        }
        if(min !== i){
            swap(array, i, min);
        }
    }
    return array;
}

describe('select sort', () => {
    it('should sort the array', () => {
        let result = runTest(selectSort);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(selectSort(input)).to.deep.equal([]);

    })


});
