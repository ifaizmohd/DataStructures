/**
 * Basic implementation of the Node used in linked list.
 */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/**
 * Linked list class.
 */

 class Linkedlist {
     constructor() {
         this.head = null;
         this.tail = null;
         this.length = 0;
     }

     /**
      * Push method is used to add the data to the linked list, it add the data to the tail of the linked list.
      */
      push(data) {
          /**
           * first we have to initialize the new node with the data provided by the user.
           */
          if (!data) return;
          const node = new Node(data);
          /**
           * then check is our linked list is empty or not. if yes then add the data to the head if not then add the data to the tail
           * and increase the length of the linked list.
           */
           if (!this.head) {
               this.head = node;
               this.head.next = this.tail;
               this.length++;
               return this;
           }
           var temp = this.head;
           while (temp.next) {
               temp = temp.next;
           }
           temp.next = node;
           this.tail = node;
           this.length++
           return this;
      }

      /**
       * Pop method removes the data from the tail of the linked list and returns the pop item.
       */
      pop() {
          /**
           * if linked list is empty then return null.
           */
          if (this.length === 0) return null;
          /**
           * if we have only head, then remove the head
           */
          if (this.length === 1) {
              const data = this.head.data;
              delete this.head;
              length--;
              return data;
          }
          /**
           * else we havw to remove the tail and decrease the length accordingly.
           */
          var prev = this.head
          var temp = this.head.next;
          while (temp.next) {
              temp = temp.next;
              prev = prev.next
          }
          if (temp.data === this.tail.data) {
              var data = temp.data;
              prev.next = null;
              this.tail = prev;
              this.length--;
              return data;
          }
      }

      /**
       * to array method converts the linked list into an array of equivalent length.
       */
      toArray() {
          /**
           * if linked list is empty then return empty array. Else extract the values from the linked list and add it into the array and the return the array. 
           */
          var arr = [];
          if (this.length === 0) return arr;
          var temp = this.head;
          while (temp.next) {
              arr.push(temp.data);
              temp = temp.next;
          }
          arr.push(temp.data);
          return arr;
      }

      /**
       * include method is a boolean method which check whether the given data is present in linked list or not.
       */
      includes(val) {
          /**
           * if list is empty then return false.
           */
          if(this.length === 0) return false;
          /**
           * else itrate through the list anc check for the value.
           */
          var temp = this.head;
          while(temp.next) {
            if (temp.data === val) return true;
            temp = temp.next;
          }
          if (temp.data === val) return true;
          return false;
      }

      /**
       * removes method remove the given element from the list and returns the length of the list.
       */
      remove(val) {
          /**
           * if the list is empty then return 0;
           */
          if (this.length === 0) return this.length;
          /**
           * if there is only head node exists.
           */
          if (this.head.data === val) {
              delete this.head;
              this.length--;
              return this.length;
          }
          /**
           * else itrate through the list untill we found the given element then return the updated length of the list.
           */
          var prev = this.head;
          var temp = this.head.next;
          while (temp.next) {
              if (temp.data === val) {
                prev.next = temp.next;
                this.length--;
                return this.length;
              }
              prev = prev.next;
              temp = temp.next;
          }
          if (temp.data === val) {
              prev.next = null;
              this.tail = prev
              this.length--;
          }
          return this.length;
      }
 }

