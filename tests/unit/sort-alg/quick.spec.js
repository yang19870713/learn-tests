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
            return a > b;
        }));
    })

    it('should return [] when input is []', () => {
        let input =[];
        expect(quickSort([])).to.deep.equal([]);
    })
})
