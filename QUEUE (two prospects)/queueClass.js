class Queue {
  constructor(){
    this.queue = [];
  };

  enqueue(item){
    return this.queue.push(item);
  };

  dequeue(){
    return this.queue.shift();
  };

  peek(){
    return this.queue[0];
  };

  get length(){
    return this.queue.length;
  };

  isEmpty(){
    return this.queue === 0 ? "Queue is empty !" : "Queue is no empty !";
  }
}
