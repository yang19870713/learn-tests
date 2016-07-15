import {runTest} from './test-helper';
const expect = chai.expect;

function topDownMergeSort(array, start=0, end=array.length-1){
    if(array.length === 0)
        return array;

    if(start >= end)
        return array;

    let mid = Math.floor((end - start + 1)/2) + start -1;

    topDownMergeSort(array, start, mid);
    topDownMergeSort(array, mid+1, end);
    merge(array, start, mid, mid + 1, end);
    return array;
}


function bottomUpMergeSort(array){
    if(array.length < 2){
        return array;
    }

    let step = 1,
        left,
        right;

    while(step <= array.length){
        left = 0;
        right = step;

        while(right + step <= array.length){
            merge(array, left, left + step - 1, right, right + step - 1);
            left = right + step;
            right = left + step;
        }
        if(right < array.length){
            merge(array, left, left + step - 1, right, array.length - 1);
        }
        step *= 2;
    }

    return array;
}

function merge(array, leftStart, leftEnd, rightStart, rightEnd){
    let temp = array.slice(leftStart, leftEnd + 1);
    let i = 0,
        j = rightStart,
        k = leftStart;
    while(i<=leftEnd-leftStart && j<=rightEnd){
        array[k++] = array[j] < temp[i] ? array[j++] : temp[i++];
    }
    while(i <= leftEnd-leftStart){
        array[k++] = temp[i++];
    }
}

describe('TopDown Merge sort', () => {
    it('should sort array', () => {
        let result = runTest(topDownMergeSort);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(topDownMergeSort(input)).to.deep.equal([]);
    })

})
describe('Bottom Up Merge sort', () => {
    it('should sort array', () => {
        let result = runTest(bottomUpMergeSort, 10000);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(bottomUpMergeSort(input)).to.deep.equal([]);
    })

})
