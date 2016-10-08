import SinglyLinkedList from 'stl/SinglyLinkedList';
import {printKthToLast} from 'algorithms/LinkedListAlg';
const expect = chai.expect;

function arrayToList(array){
    if(!array.length)
        return null;
    var list;
    array.forEach((d, i) => {
        if(i === 0){
            list = new SinglyLinkedList(d);
        }
        else {
            list.appendToTail(d);
        }
    })
    return list;
}

function listToArray(list){
    var array = [];
    var node = list.headnode;
    while(node.next !== null){
        array.push(node.value);
        node = node.next;
    }
    array.push(node.value);
    return array;
}


describe('Singly Linked List', () => {
    it('should add a new node to the tail when appended', () => {
        var input = [1, 2, 3];
        var list = arrayToList(input);
        list.appendToTail(4);
        var output = listToArray(list);
        expect(output).to.deep.equal([1,2,3,4]);
    })

    it('should remove a node by value when deleted', () => {
        var input = [1, 2, 3, 4];
        var list = arrayToList(input);
        list.deleteNode(2);
        var output = listToArray(list);
        expect(output).to.deep.equal([1,3,4]);
        list.deleteNode(1);
        output = listToArray(list);
        expect(output).to.deep.equal([3,4]);
    })
})

describe('Kth To Last', () => {
    describe('printKthToLast', () => {
        it('should print kth to last node of the list', () => {
            var input = [1, 2, 3, 4, 5, 6];
            var list = arrayToList(input);
            var result = {
                val: undefined
            }
            printKthToLast(list.headnode, 2, result);
            expect(result.val).to.equal(5);

        })
    });
});
