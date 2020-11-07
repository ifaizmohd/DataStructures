/**
 * This is the basic implementation of queue data structure.
 */
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /**
     * enque method add the element to the queue.
     */
    enqueue(data) {
        const node = new Node(data);
        if (this.size === 0) {
            this.first = node;
            this.first.next = this.last;
            this.size++;
            return this.size;
        }
        var temp = this.first;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = node;
        this.last = node;
        this.size++;
        return this.size;
    }
    /**
     * dequeue method removes the element first from the queue. 
     */
    dequeue() {
        if (this.size === 0) return null;
        var data = this.first.data;
        this.first = this.first.next;
        this.size--;
        return data;
    }
    /**
     * to array method converts the queue into the array from first to last.
     */
    toArray() {
        const array = [];
        var temp = this.first;
        while (temp.next) {
            array.push(temp.data);
            temp = temp.next;
        }
        array.push(temp.data);
        return array;
    }

}