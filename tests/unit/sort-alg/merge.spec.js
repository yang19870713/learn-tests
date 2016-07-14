const expect = chai.expect;

let mergeSort = (array, start=0, end=array.length-1) => {
    if(array.length === 0)
        return array;

    if(start >= end )
        return [array[start]];

    let mid = Math.floor((end - start + 1)/2) + start;

    let left = mergeSort(array, start, mid-1);
    let right = mergeSort(array, mid, end);

    return merge(left, right);
}

let merge = (left, right) => {
    let i = 0,
        j = 0,
        temp = [];
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            temp.push(left[i]);
            i++;
        }
        else{
            temp.push(right[j]);
            j++;
        }
    }
    while(i<left.length){
        temp.push(left[i]);
        i++;
    }
    while(j<right.length){
        temp.push(right[j]);
        j++;
    }
    return temp;
}

describe('Merge sort', () => {
    it('should sort array', () => {
        let input = [1, 4, 2, 9, 20, 12, 3];
        expect(mergeSort(input)).to.deep.equal([1, 2, 3, 4, 9, 12, 20]);
        input = [];
        expect(mergeSort(input)).to.deep.equal([]);
    })

})
