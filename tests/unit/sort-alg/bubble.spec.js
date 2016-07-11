const expect = chai.expect;

describe('bubble sorting', () => {
    let bubbleSort = (input) => {
        for(let i = 0; i < input.length-1; i++){
            let swapped = false;
            for(let j = input.length-1; j> i; j--){
                if(input[j] <= input[j-1]){
                    // no extra memory
                    // input[j] = input[j] + input[j-1];
                    // input[j-1] = input[j] - input[j-1];
                    // input[j] = input[j] - input[j-1];
                    let temp = input[j];
                    input[j] = input[j-1];
                    input[j-1] = temp;
                    swapped = true;
                }
            }
            if(!swapped)
                break;
        }
        return input;
    }

    it('should sort an input array', ()=> {
        let input = [1, 4, 2, 9, 20, 12, 3];
        expect(bubbleSort(input)).to.deep.equal([1, 2, 3, 4, 9, 12, 20]);
    })

    it('should run only once when the array is softed', () => {
        let input = [1, 2, 3, 4, 5, 6, 7];
        bubbleSort(input);
    })
})
