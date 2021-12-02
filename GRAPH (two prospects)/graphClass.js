class Graph {
  constructor(v){
    this.vertices = v;
    this.list = [];
    for(let i=0; i<this.vertices; i++){
      this.list[i] = [];
    };
  };

  newEdge(v, w){
    this.list[v].push(w);
    this.list[w].push(v);
  };

  printGraph(){
    for(let i=0; i<this.vertices; i++) {
    console.log(i + ": " + this.list[i])
    };
  };
};

let myGraph = new Graph(5);

myGraph.newEdge(0,1);
myGraph.newEdge(0,2);
myGraph.newEdge(2,3);
myGraph.newEdge(2,4);
myGraph.newEdge(3,4);

myGraph.printGraph();
