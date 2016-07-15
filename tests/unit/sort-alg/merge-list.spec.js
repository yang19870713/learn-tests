import {genData} from 'test-helper';
const expect = chai.expect;
function ListNode(val){
    this.val = val;
    this.next = null;
}

function appendList(head, node){
    if(!head){
        throw('List does not exsit, cannot append node to it!');
        return;
    }
    if(!node){
        return head;
    }
    while(head.next){
        head = head.next;
    }
    head.next = node;
}

function mergeSortList(head){

}


function sort(input){
    let head = new ListNode(input[0]);
    for(let i = 1; i < input.length; i++){
        append(head, new ListNode(input[i]));
    }

    mergeSortList(head);

    let i = 0;
    while(head.next){
        input[i++] = head.val;
        head = head.next;
    }
}

describe('merge sort linked list', () => {
    it('should sort the list', () => {

    })

    it('should return [] when input is []', () => {

    })
})
