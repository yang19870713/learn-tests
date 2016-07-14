import {runTest} from './test-helper';
const expect = chai.expect;

function insertSort(array){
    let j, temp;
    for(let i = 1; i < array.length; i++){
        j = i;
        temp = array[j];
        while(j > 0 && array[j-1] > temp){
            array[j] = array[j-1];
            j --;
        }
        array[j] = temp
    }
    return array;
}

describe('insert sort', () => {
    it('should sort the array', () => {
        let result = runTest(insertSort);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(insertSort(input)).to.deep.equal([]);
    })
})
