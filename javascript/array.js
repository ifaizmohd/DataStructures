class Array {
  /**
   * constructor function to initialize the array object.
   * instance variables: length of the array and data inside the array.
   */
  constructor() {
    this.length = 0;
    this.data = {};
  }
  /**
   * getItem method returns the item present at the specified index.
   * @param {number} index
   */
  getItem(index) {
      console.log('item at index: ', index, 'value: ', this.data[index]);
    return this.data[index];
  }
  /**
   * push method push the item at the end of the array.
   * @param {any} item
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    console.log(this.data);
    return this.data;
  }
  /**
   * pop method removes the item from the end of the array and return the removed item.
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    console.log(lastItem);
    return lastItem;
  }

  remove(index) {
    const item = this.data[index];
    this.shift(index);
    console.log(item);
    return item;
  }

  shift(index) {
    for (var i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
