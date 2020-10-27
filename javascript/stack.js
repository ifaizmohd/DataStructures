/**
 * this is the basic implementation of the stack data structure.
 */
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    /**
     * Push method of the stack add the given value into the stack. it returns the new size of the stack
     */
    push(val) {
        const node = new Node(val);
        if (this.size === 0) {
            this.top = node;
            this.bottom = this.top;
            this.size++;
            return this.size;
        }
        var temp = node;
        temp.next = this.top;
        this.top = temp;
        this.size++;
        return this.size;
    }

    /**
     * Pop method removes the top elemnt from the stack and return the element removed from the stack.
     */
    pop() {
        if (this.size != 0) {
            const data = this.top.data;
            if (this.size === 1) {
                this.top = null;
                this.size--;
                return data;
            }
            this.top = this.top.next;
            this.size--;
            return data;
        }
        return null;
    }

    /**
     * Peek method returns the top element of the stack.
     */
    peek() {
        if (this.size > 0) {
            return this.top.data;
        } return null;
    }

    /**
     * toArray method converts the stack into the array. direction will be top-to-bottom, i.e. first element of the array will be the top element of the stack.
     */
    toArray() {
        var arr = [];
        var temp = this.top;
        while (temp.next) {
            arr.push(temp.data);
            temp = temp.next;
        }
        arr.push(temp.data);
        return arr;
    }
}
