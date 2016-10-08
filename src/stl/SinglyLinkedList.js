export default class SinglyLinkedList {
    constructor(val){
        this.headnode = new Node(val);
    }
    appendToTail(val){
        this.headnode.appendToTail(val);
    }
    deleteNode(val){
        if(val === this.headnode.value){
            this.headnode = this.headnode.next;
        }
        var n = this.headnode;
        while(n.next !== null){
            if(n.next.value === val){
                n.next = n.next.next;
            }
            n = n.next;
        }
    }
}

export class Node{
    constructor(val){
        this.next = null;
        this.value = val;
    }
    appendToTail(val){
        var newNode = new Node(val);
        var tail = this;
        while(tail.next !== null){
            tail = tail.next;
        }
        tail.next = newNode;
    }
}
