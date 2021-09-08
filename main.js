let graph;

graph = new Graph();

// Hàm cài đặt sẵn một đồ thị làm ví dụ nhanh
function addSampleVertex() {
    // graph.addVertex('A');
    // graph.addVertex('B');
    // graph.addVertex('C');
    // graph.addVertex('D');
    // graph.addVertex('E');
    // graph.addVertex('F');
    // graph.addEdge('A', 'B');
    // graph.addEdge('A', 'C');
    // graph.addEdge('A', 'D');
    // graph.addEdge('B', 'E');
    // graph.addEdge('C', 'D');
    // graph.addEdge('C', 'F');
    // graph.addEdge('E', 'F');

    // graph.addVertex('S');
    // graph.addVertex('A');
    // graph.addVertex('B');
    // graph.addVertex('C');
    // graph.addVertex('D');
    // graph.addEdge('S', 'A');
    // graph.addEdge('S', 'B');
    // graph.addEdge('S', 'C');
    // graph.addEdge('D', 'A');
    // graph.addEdge('D', 'B');
    // graph.addEdge('D', 'C');

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');

    graph.addEdge('B', 'E');
    graph.addEdge('C', 'E');

    graph.addEdge('D', 'F');

    graph.addEdge('C', 'F');
    graph.addEdge('F', 'G');
    graph.addEdge('G', 'H');

    printGraphInfo();
}

// Hiển thị ra Đồ thị
function printGraphInfo() {
    document.getElementById('result').innerHTML = graph.getInfor();
}

function DFS() {
    const vertexNameStart = document.getElementById('xp').value;
    if (vertexNameStart.trim() === '') return;
    graph.callDFS(vertexNameStart.trim());
}

// Thêm đỉnh đồ thị
function addVertex() {
    const vertexName = document.getElementById('vertex').value;
    if (vertexName.trim() === '') return;
    graph.addVertex(vertexName.trim());

    printGraphInfo();
}

// Thêm cạnh
function addEdge() {
    const vertexAName = document.getElementById('vertexA').value;
    const vertexBName = document.getElementById('vertexB').value;
    if (vertexAName.trim() === '') return;
    if (vertexBName.trim() === '') return;
    graph.addEdge(vertexAName.trim(), vertexBName.trim());

    printGraphInfo();
}

// Xóa đỉnh
function removeVertex() {
    const vertexName = document.getElementById('vertex').value;
    if (vertexName.trim() === '') return;
    graph.removeVertex(vertexName.trim());

    printGraphInfo();
}

// Xóa cạnh
function removeEgde() {
    const vertexAName = document.getElementById('vertexA').value;
    const vertexBName = document.getElementById('vertexB').value;
    if (vertexAName.trim() === '') return;
    if (vertexBName.trim() === '') return;
    graph.removeEdge(vertexAName.trim(), vertexBName.trim());

    printGraphInfo();
}

