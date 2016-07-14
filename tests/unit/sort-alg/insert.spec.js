import {genData} from './test-helper';
const expect = chai.expect;

function insertSort(array){
    let start = new Date();
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
    console.log(`runtime of insert sort: ${new Date() -start}`)
    return array;
}

describe('insert sort', () => {
    it('should sort the array', () => {
        let input = genData(1000);

        let expectOutput = input.slice().sort((a,b) => {
            return a-b;
        })
        let output = insertSort(input);
        expect(output).to.deep.equal(expectOutput);
    })
})
