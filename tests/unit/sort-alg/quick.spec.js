import {runTest} from './test-helper';
const expect = chai.expect;

describe('quick sorting', () => {
    let quickSort = (input) => {
        if(input.length <=1 )
            return input;

        let left = [];
        let right = [];
        let base = input[0];
        for(let i = 1; i< input.length; i++){
            if(input[i] <= base){
                left.push(input[i]);
            }
            else{
                right.push(input[i]);
            }
        }

        return  [...quickSort(left), base, ...quickSort(right)];
    }



    it('should sort an input array', ()=> {
        let input = [1, 4, 2, 9, 20, 12, 3];
        expect(quickSort(input)).to.deep.equal(input.sort((a,b)=>{
            return a - b;
        }));
    })

    it('should return [] when input is []', () => {
        let input =[];
        expect(quickSort([])).to.deep.equal([]);
    })
})

describe('quick sorting --- swap', () => {
    function quickSort(array, ptr_l, ptr_r){
        //console.log(`sort array ${array}, from ${ptr_l} to ${ptr_r}`)
        if(typeof ptr_l !== 'number')
            ptr_l = 0;
        if(typeof ptr_r !== 'number')
            ptr_r = array.length - 1;

        if(ptr_l >= ptr_r){
            return array;
        }

        let ptr_mid = partition(array, ptr_l, ptr_r);
        //partition
        quickSort(array, ptr_l, ptr_mid-1);
        quickSort(array, ptr_mid+1, ptr_r);

        return array;
    }

    function partition(array, ptr_l, ptr_r){
        let ptr_mid = ptr_r;
        let markIndex = ptr_l;
        for(var i = ptr_l; i < ptr_mid; i++ ){
            if(array[i] < array[ptr_mid]){
                swap(array, i, markIndex);
                markIndex ++;
            }
        }
        swap(array, markIndex, ptr_mid);
        return markIndex;
    }

    function swap(array, x, y){
        //debugger
        var temp = array[x];
        array[x] = array[y];
        array[y] = temp;

    }

    it('should sort an input array', ()=> {
        let result = runTest(quickSort);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(quickSort(input)).to.deep.equal([]);
    })

    it('should return [] when input is []', () => {
        let input =[];
        expect(quickSort([])).to.deep.equal([]);
    })

})
