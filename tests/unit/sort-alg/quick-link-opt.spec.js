import {runTest} from './test-helper';
const expect = chai.expect;

function ListNode(val){
    this.val = val;
    this.next = null;
}

function append(head, node){
    if(!head){
        return;
    }
    if(!node){
        return;
    }
    while(head.next){
        head = head.next;
    }
    head.next = node;
}

function popHead(head){
    let newHead = head.next;
    head.next = null;

    return newHead;
}

function removeNode(head, node){
    if(!head || !node)
        return;

    let pre = null;

    while(head){
        if(head === node){
            if(!pre){
                throw('node is the head, should call popHead')
            }
            else {
                head = head.next;
                pre.next = node.next;
                node.next = null;
            }
            break;
        }
        else {
            if(pre){
                pre = pre.next;
            }
            else {
                pre = head;
            }
            head = head.next;
        }

    }
}

function quickSort(head){
    if(!head || !head.next)
        return head;

    //debugger;

    let pivot = head;
    head = popHead(head);

    //use pivot as the head of right list
    let cur = head;

    while(cur){
        if(cur.val > pivot.val){
            //if cur is the head
            if(cur === head){
                head = popHead(head);
                append(pivot, cur);
                cur = head;
            }
            else{
                let temp = cur.next;
                removeNode(head, cur);
                append(pivot, cur);
                cur = temp;
            }
        }
        else {
            cur = cur.next;
        }
    }

    //debugger;
    let right = popHead(pivot);
    if(head){
        head = quickSort(head);
        append(head, pivot);
        append(head, quickSort(right));
        //console.log(head);
        return head;
    }
    else{
        append(pivot, quickSort(right));
        //console.log(pivot);
        return pivot;
    }
}

function sort(input){
    if(input.length <= 1){
        return input;
    }

    let head = new ListNode(input[0]);
    for(let i = 1; i < input.length; i++){
        append(head, new ListNode(input[i]));
    }

    head = quickSort(head);
    //debugger;

    let i = 0;
    while(head){
        input[i++] = head.val;
        head = head.next;
    }
    return input;
}


describe('optimize quick sort for linked list', () => {
    let result = runTest(sort, 10000);

    expect(result.output).to.deep.equal(result.expectOutput);
    console.log(result.runtime);

    let input = [];
    expect(sort(input)).to.deep.equal([]);
})
