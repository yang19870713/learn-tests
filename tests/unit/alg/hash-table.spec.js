import HashTable from 'algorithms/HashTable';
const expect = chai.expect;

describe('HashTable', () => {

    it('should turn int keys into hashcodes and put them into an array', () => {
        var inputInt = [100032, 223, 11, 3253, 34, 26, 0, -125, -1];
        var hashtable = new HashTable();
        inputInt.forEach((i) => {
            hashtable.put(i);
        })
        console.log(hashtable);
        inputInt.forEach((i) => {
            expect(hashtable.get(i)).to.equal(i);
        })
    })

    it('should turn stirng keys  into hashcodes and put them into an array', () => {
        var inputStr = ['abc', 'bcd', 'cba'];
        var hashtable = new HashTable();
        inputStr.forEach((i) => {
            hashtable.put(i);
        })
        console.log(hashtable);
        inputStr.forEach((i) => {
            expect(hashtable.get(i)).to.equal(i);
        })
    })

    it('should not support keys other than number and string', () => {
        var invalidInputs = [{}, undefined, null, NaN, ''];
        var hashtable = new HashTable();
        invalidInputs.forEach((i) => {
            expect(hashtable.isKeyValid(i)).to.be.false;
        })
    })

})
