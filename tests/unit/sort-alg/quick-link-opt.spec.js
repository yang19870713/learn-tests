const expect = chai.expect;

function ListNode(val){
    this.val = val;
    this.next = null;
}

function insertNode(head, node){
    if(!head){
        return node;
    }
    if(!node){
        return head;
    }
    var tail = head;
    while(tail.next){
        tail = tail.next;
    }
    tail.next = node;
    return head;
}


function getTail(head){
    while(head && head.next){
        head = head.next;
    }
    return head;
}

function partition(head, tail, parentPivot=null){
    var pivot = tail;
    var pre = null;
    var cur = head;

    while(cur!== pivot){
        if(cur.val > pivot){
            //if cur is in the middle
            if(pre){
                pre.next = cur.next;
            }
            //if cur is the first on
            else {
                //change head
                head.val = cur.next.val;
                head.next = cur.next.next;
            }

            //move cur after pivot
            cur.next = parentPivot;
        }
        else{
            if(!pre){
                pre = head;
            }
            else{
                pre = pre.next;
            }
            cur = cur.next;
        }
    }

    return pivot;
}

function quickSort(head, tail){
    if(!head || head === tail){
        return head;
    }
debugger;
    var pivot = partition(head, tail);
    console.log(head);
    console.log(pivot);

}

describe('optimize quick sort for linked list', () => {
    var data = [10, 1, 3, 4];
    var head;
    data.forEach((d) => {
        if(!head)
            head = new ListNode(d);
        else {
            insertNode(head, new ListNode(d));
        }
    })

    var sortedLink = quickSort(head, getTail(head));
    var result = [];
    var ptr = sortedLink;

    while(ptr){

        result.push(ptr.val);
        ptr = ptr.next;
    }
    expect(result).to.deep.equal(data.sort((a, b) => {return a-b; }));
})
