import {runTest} from './test-helper.js';

const expect = chai.expect;

const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellSort(array){
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
                //console.log(array);
        }
    }

    return array;
}

function shellSortWithAdaptiveGap(array){
    let N = array.length;
    let h = 1;
    while(h < N/3){
        h = 3 * h + 1;
    }

    let temp, j;
    while(h >= 1){
        for(let i = h; i<array.length; i++){
            j = i;
            temp = array[i];
            while(j>0 && array[j-h] > temp){
                array[j] = array[j-h];
                j -= h;
            }
            array[j] = temp;
        }
        h = (h-1)/3;
    }
    return array;
}

describe('shell sort', () => {
    it('should sort the array from smart to large', () => {
        let result = runTest(shellSort);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(shellSort(input)).to.deep.equal([]);
    })

    it('should sort the array from smart to large, with a adaptive gap', () => {
        let result = runTest(shellSortWithAdaptiveGap);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(shellSortWithAdaptiveGap(input)).to.deep.equal([]);
    })
})
