class Graph{
    constructor(){
        this.noOfNodes = 0;
        this.adjacentList = {};
    }
     addVertex(node){
         this.adjacentList[node] = [];
         this.noOfNodes++;
     }

     addEdge(node1, node2){
         this.adjacentList[node1].push(node2);
         this.adjacentList[node2].push(node1);
     }

     showConnections(){
         const allNodes = Object.keys(this.adjacentList);
         for(let node of allNodes){
             let nodeConnections = this.adjacentList[node];
             let connections = "";
             let vertex;
             for (vertex of nodeConnections){
                 connections += vertex + " ";
             }
             console.log(node + "-->" + connections);
         }
         console.log(this.noOfNodes);
     }

     showAdjacentList(){
         console.log(this.adjacentList);
     }
}
const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.showAdjacentList();
myGraph.addEdge("0","1");
myGraph.addEdge("0","2");
myGraph.addEdge("1","3");
myGraph.addEdge("1","2");
myGraph.addEdge("2","4");
myGraph.addEdge("3","4");
myGraph.addEdge("4","5");
myGraph.addEdge("5","6");
myGraph.showAdjacentList();
myGraph.showConnections();