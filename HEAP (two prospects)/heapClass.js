class Heap{
  constructor() {
    this.heap = [];
  }

  get lenght(){
    return this.heap.length;
  }

  push(item) {
    return this.heap.push(item);
  }

  pop(){
    return this.heap.pop();
  }

  peek() {
    return this.heap[this.length -1];
  }

  isEmpty() {
    return this.length === 0 ? "Heap is empty!" : "Heap is no empty!"
  }
};
