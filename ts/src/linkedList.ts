interface NewNode {
    value: number,
    next: NewNode | null
}
interface LinkedList {
    head: NewNode;
    tail: NewNode;
    length: number;
}

class NewNode implements NewNode {
    constructor(value: number){
        this.value =  value
        this.next = null;
    }
}

class LinkedList implements LinkedList { 
    constructor(value: number){
        this.head = {value: value, next: null}
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number): LinkedList{
        const newNode = new NewNode(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
}

const linkedList = new LinkedList(1);