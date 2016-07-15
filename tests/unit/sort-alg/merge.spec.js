import {runTest} from './test-helper';
const expect = chai.expect;

function mergeSort(array, start=0, end=array.length-1){
    if(array.length === 0)
        return array;

    if(start >= end)
        return array;

    let mid = Math.floor((end - start + 1)/2) + start -1;

    mergeSort(array, start, mid);
    mergeSort(array, mid+1, end);
    merge(array, start, mid, end);
    return array;
}

function merge(array, start, mid, end){
    //console.log(`merge array [${start} ${mid}] and [${mid+1} ${end}] `);
    var temp = array.slice(0, mid + 1);
    let i = start,
        j = mid + 1,
        k = start;
    while(i <= mid && j <= end){
        array[k++] = array[j] < temp[i]? array[j++] : temp[i++];
    }
    while(i <= mid){
        array[k++] = temp[i++];
    }
}

describe('Merge sort', () => {
    it('should sort array', () => {
        let result = runTest(mergeSort);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(mergeSort(input)).to.deep.equal([]);
    })

})
