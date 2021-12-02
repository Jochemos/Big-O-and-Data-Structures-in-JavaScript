function Heap() {
  this.data = [];
  this.top = 0;
};

Heap.prototype.push = function(element){
  this.data[this.top++] = element;
};

Heap.prototype.size = function(){
  return this.top;
};

Heap.prototype.pop = function(){
  return this.data[this.top -1];
};

Heap.prototype.reset = function(){
  this.top = 0;
  this.data.length = 0;
};

Heap.prototype.isEmpty = function(){
  return this.top === 0 ? "Heap is empty !" : "Heap is no empty !"
};
