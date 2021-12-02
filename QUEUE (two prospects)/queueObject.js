function Queue(){
  this.data = [];
};

Queue.prototype.enqueue = function(elem) {
  this.data.push(elem);
};

Queue.prototype.dequeue = function() {
  return this.data.shift();
};

Queue.prototype.view = function(){
  return this.data.join(', ');
};

Queue.prototype.first = function(){
  return this.data[0];
};

Queue.prototype.howLength = function(){
  return this.data.length;
};

Queue.prototype.isEmpty = function(){
  return this.data === 0 ? "Queue is empty" : "Queue is no empty";
};
