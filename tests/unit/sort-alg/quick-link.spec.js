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

function mergeLists(...lists){
    var mergedList = lists.reduce((pre, cur) => {
        return insertNode(pre, cur);
    })
    return mergedList;
}

describe('insertNode function', () => {
    it('should add new node in to a list', () => {
        var head = new ListNode(1);
        var node = new ListNode(2);
        expect(insertNode(head, node).next).to.deep.equal(node);
    });
})

describe('mergeLists function', () => {
    it('should merge lists', () => {
        var list1 = {
            val:1,
            next: {
                val:2,
                next: null
            }
        },
        list2 = {
            val:3,
            next: {
                val:4,
                next: null
            }
        },
        list3 = {
            val:5,
            next: {
                val:6,
                next: null
            }
        };
        console.log(mergeLists(list1, list2, list3));
    })
})

describe('quick sorting for singly-linked list', () => {
    let compare_cont = 0;
    let soft_cont = 0;

    function quickSortLink(head){
        //check if done
        if(!head || !head.next){
            return head;
        }

        soft_cont ++ ;
        //set a base
        var base = head.val,
            left,
            right,
            mid = new ListNode(base);

        //fill left list and right list
        var ptr = head.next;
        while(ptr){
            var node = new ListNode(ptr.val);
            if(ptr.val < base){
                if(!left){
                    left = node;
                }
                else{
                    insertNode(left, node);
                }
            }
            else if(ptr.val === base){
                insertNode(mid, node);
            }
            else {
                if(!right){
                    right = node;
                }
                else{
                    insertNode(right, node);
                }
            }
            ptr = ptr.next;
            compare_cont ++;
        }
        //recursively sort left and right
        //merge
        return mergeLists(quickSortLink(left), mid, quickSortLink(right));
    }

    it('should sort the list', () => {
        compare_cont = 0;
        var data = [10, 1, 3, 4, 1, 5, 2, 5, 5, 5];
        var head;
        data.forEach((d) => {
            if(!head)
                head = new ListNode(d);
            else {
                insertNode(head, new ListNode(d));
            }
        })

        var sortedLink = quickSortLink(head);
        var result = [];
        var ptr = sortedLink;

        while(ptr){

            result.push(ptr.val);
            ptr = ptr.next;
        }
        expect(result).to.deep.equal(data.sort((a, b) => {return a>b; }));
        console.log(`compare ${compare_cont} times`);
        console.log(`sort ${soft_cont} times`);
    });
})


describe('quick sorting for singly-linked list, by swap', () => {
    function quickSortLink(head){

    }


    describe('swap nodes', () => {
        it('should swap two nodes', () => {

        });
    })


    it('should sort the list', () => {
        // var data = [12, 3, 4, 2];
        // var head;
        // data.forEach((d) => {
        //     if(!head)
        //         head = new ListNode(d);
        //     else {
        //         insertNode(head, new ListNode(d));
        //     }
        // })
        //
        // var sortedLink = quickSortLink(head);
        // var result = [];
        // var ptr = sortedLink;
        //
        // while(ptr){
        //
        //     result.push(ptr.val);
        //     ptr = ptr.next;
        // }
        //expect(result).to.deep.equal(data.sort((a, b) => {return a>b; }));
    });
})
