class LinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    }

    add(value) {
    const node = new Node(value);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
}

    remove() {
    if (!this.head) {
        return null;
    } else if (this.head === this.tail) {
        const value = this.head.value;
        this.head = null;
        this.tail = null;
        return value;
    } else {
        let current = this.head;
        while (current.next !== this.tail) {
        current = current.next;
        }
        const value = this.tail.value;
        this.tail = current;
        this.tail.next = null;
        return value;
    }
    }

    search(value) {
    let current = this.head;
    while (current) {
        if (typeof value === "function" && value(current.value)) {
        return current.value;
        } else if (current.value === value) {
        return current.value;
        }
        current = current.next;
    }
    return null;
    }

    getAll(){
    let current = this.head;
    let array = [];
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    return array;
    }
}

class Node {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.getAll());
