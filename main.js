let graph;

graph = new Graph();

function addSampleVertex() {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'F');
    graph.addEdge('E', 'F');

    printGraphInfo();
}

function printGraphInfo() {
    document.getElementById('result').innerHTML = graph.getInfor();
}

function addVertex() {
    const vertexName = document.getElementById('vertex').value;
    if (vertexName.trim() === '') return;
    graph.addVertex(vertexName.trim());

    printGraphInfo();
}

function addEdge() {
    const vertexAName = document.getElementById('vertexA').value;
    const vertexBName = document.getElementById('vertexB').value;
    if (vertexAName.trim() === '') return;
    if (vertexBName.trim() === '') return;
    graph.addEdge(vertexAName.trim(), vertexBName.trim());

    printGraphInfo();
}

function removeVertex() {
    const vertexName = document.getElementById('vertex').value;
    if (vertexName.trim() === '') return;
    graph.removeVertex(vertexName.trim());

    printGraphInfo();
}

function removeEgde() {
    const vertexAName = document.getElementById('vertexA').value;
    const vertexBName = document.getElementById('vertexB').value;
    if (vertexAName.trim() === '') return;
    if (vertexBName.trim() === '') return;
    graph.removeEdge(vertexAName.trim(), vertexBName.trim());

    printGraphInfo();
}

