import {runTest} from './test-helper';
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
        let result = runTest(bubbleSort);

        expect(result.output).to.deep.equal(result.expectOutput);
        console.log(result.runtime);

        let input = [];
        expect(bubbleSort(input)).to.deep.equal([]);
    })
})
