import {genData} from './test-helper.js';

const expect = chai.expect;

const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellSort(array){
    let start = new Date();
    let temp, j, gap;
    for(let g = 0; g < gaps.length; g ++){
        gap = gaps[g];
        for(let i = gap; i < array.length; i ++){
                temp = array[i];
                j = i;
                while(j > 0 && array[j-gap] > temp){
                    array[j]=array[j-gap];
                    j -= gap;
                }
                array[j] = temp;
                console.log(array);
        }
    }

    console.log(`runtime of shell sort: ${new Date() -start}`)
    return array;
}



describe('shell sort', () => {
    it('should sort the array from smart to large', () => {
        let input = genData(10);
        let expectOutput = input.slice().sort((a,b) => {
            return a - b;
        })
        let output = shellSort(input);
        expect(output).to.deep.equal(expectOutput);
    })
})
