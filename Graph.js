class Graph {
    constructor() {
        this.vertexList = new LinkedList();
    }

    // Thêm đỉnh
    addVertex(vertexName) {
        if (!this.vertexList.searchNode(vertexName)) {
            const newVertex = new Vertex(vertexName);
            this.vertexList.insertNode(newVertex);
        }
    }

    // Thêm cạnh
    addEdge(vertexAName, vertexBName) {
        if (vertexAName === vertexBName) return;

        const vertexA = this.vertexList.searchNode(vertexAName);
        const vertexB = this.vertexList.searchNode(vertexBName);
        if (vertexA && vertexB) {
            const newEdgeAB = new Edge(vertexAName, vertexBName);
            const newEdgeBA = new Edge(vertexBName, vertexAName);

            const edgeA = vertexA.edgeList.searchNode(vertexBName);
            const edgeB = vertexB.edgeList.searchNode(vertexAName);
            if (!edgeA) {
                vertexA.edgeList.insertNode(newEdgeAB);
            }
            if (!edgeB) {
                vertexB.edgeList.insertNode(newEdgeBA);
            }
        }
    }

    // Check cạnh
    hasEdge(vertexAName, vertexBName) {
        if (vertexAName === vertexBName) return false;

        const vertexA = this.vertexList.searchNode(vertexAName);
        const vertexB = this.vertexList.searchNode(vertexBName);
        if (vertexA && vertexB) {
            if (vertexA.edgeList.searchNode(vertexBName)) {
                return true;
            }
        }
        return false;
    }

    // Xóa cạnh
    removeEdge(vertexAName, vertexBName) {
        if (vertexAName === vertexBName) return;

        const vertexA = this.vertexList.searchNode(vertexAName);
        const vertexB = this.vertexList.searchNode(vertexBName);
        console.log(vertexA, vertexB);
        if (vertexA && vertexB) {
            vertexA.edgeList.deleteNode(vertexBName);
            vertexB.edgeList.deleteNode(vertexAName);
        }
    }

    // Xóa đỉnh
    removeVertex(vertexName) {
        const vertex = this.vertexList.searchNode(vertexName);
        if (vertex) {
            let temp = vertex.edgeList.head;
            while (temp) {
                this.removeEdge(vertex.getName(), temp.getName());
                temp = vertex.edgeList.head;
            }
            this.vertexList.deleteNode(vertexName);
        }
    }

    DFS(linkedlist, vertexEnd) {
        const vertex = linkedlist.getNode(1).data;
        vertex.visited = true;
        if (vertex.data !== vertexEnd) {
            for (let i = vertex.edgeList.size; i > 0; i--) {
                const node = vertex.edgeList.getNode(i);
                const vertexB = this.vertexList.searchNode(node.vertexB);
                if (vertexB && !vertexB.visited) {
                    if (vertexB.data === vertexEnd) {
                        linkedlist.insertNode(new Node(vertexB));
                        break;
                    } else {
                        linkedlist.insertNode(new Node(vertexB));
                        this.DFS(linkedlist, vertexEnd);
                    }
                    break;
                }
            }
        }
    }

    callDFS(fromVertex, toVertex) {
        this.resetVisited();
        const vertexStart = this.vertexList.searchNode(fromVertex);
        const vertexEnd = this.vertexList.searchNode(toVertex);
        if (vertexStart && vertexEnd) {
            let linkedlist = new LinkedList();
            linkedlist.insertNode(new Node(vertexStart));
            this.DFS(linkedlist, vertexEnd.data);
            console.log('DONG = { ' + linkedlist.print() + ' }');
        }
    }

    // Reset biến boolean check đỉnh đã duyệt
    resetVisited() {
        let temp = this.vertexList.head;
        while (temp) {
            temp.visited = false;
            temp = temp.next;
        }
    }

    // Hiển thị Đồ thị
    getInfor() {
        let vertexList = 'Danh sách đỉnh: ' + this.vertexList.size + ' đỉnh <br/>' + this.vertexList.getList();
        vertexList += '<br/><br/>';

        let edgeList = '';
        let temp = this.vertexList.head;
        let count = this.vertexList.size;
        while (temp) {
            edgeList = count-- + '.&ensp;' + temp.getName() + '&nbsp;<span style="color: brown; font-weight: 400; font-style: italic;">(' + temp.edgeList.size + ' đỉnh con):&ensp;</span>' + temp.getEdgeList() + '<br/>' + edgeList;
            temp = temp.next;
        }

        return vertexList + 'Danh sách đỉnh con: <br/>' + edgeList;
    }
}