const expect = chai.expect;

function ListNode(val){
    this.val = val;
    this.next = null;
}

function append(head, node){
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

function popHead(head){
    let newHead = head.next;
    head.next = null;

    return newHead;
}

function removeNode(head, node){
    let pre = null;

    while(head){
        if(head === node){
            if(!pre){
                popHead(head);
            }
            else {
                pre.next = node.next;
                node.next = null;
            }
        }
    }
}

function partition(head, tail, parentPivot=null){

}

function quickSort(head){
    if(!head || !head.next)
        return head;

    let pivot = head;
    let newHead = popHead(head);

    //use pivot as the head of right list
    let cur = newHead;

    while(cur){
        if(cur.val > pivot.val){
            //if cur is the head
            if(cur === newHead){

            }
            //if cur is in the middle

            //append cur into right list
        }
    }

}

function sort(input){
    let head = new ListNode(input[0]);
    for(let i = 1; i < input.length; i++){
        append(head, new ListNode(input[i]));
    }

    quickSort(head);

    let i = 0;
    while(head.next){
        input[i++] = head.val;
        head = head.next;
    }
}


describe('optimize quick sort for linked list', () => {
    let result = runTest(sort);

    expect(result.output).to.deep.equal(result.expectOutput);
    console.log(result.runtime);

    let input = [];
    expect(sort(input)).to.deep.equal([]);
})
