let graph;

graph = new Graph();

// Hàm cài đặt sẵn một đồ thị làm ví dụ nhanh
function addSampleVertex() {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'F');
    graph.addEdge('E', 'F');

    printGraphInfo();
}

// Hiển thị ra Đồ thị
function printGraphInfo() {
    document.getElementById('result').innerHTML = graph.getInfor();
}

// DFS
function DFS() {
    const vertexNameStart = document.getElementById('xp').value;
    const vertexNameEnd = document.getElementById('dich').value;
    if (vertexNameStart.trim() === '' || vertexNameEnd.trim() === '') return;
    graph.callDFS(vertexNameStart.trim(), vertexNameEnd.trim());
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

