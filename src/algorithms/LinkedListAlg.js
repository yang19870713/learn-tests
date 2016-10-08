import {Node} from 'stl/SinglyLinkedList';

export function printKthToLast(head, k, result){
    if(head == null){
        return 0;
    }

    var index = printKthToLast(head.next, k, result) + 1;
    if(index === k){
        console.log(`${k}th to last node is ${head.value}`);
        result.val = head.value;
    }
    return index;
}
