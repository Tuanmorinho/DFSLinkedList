class Graph {
    constructor() {
        this.vertexList = new LinkedList();
    }

    addVertex(vertexName) {
        if (!this.vertexList.searchNode(vertexName)) {
            const newVertex = new Vertex(vertexName);
            this.vertexList.insertNode(newVertex);
        }
    }

    addEdge(vertexAName, vertexBName) {
        if (vertexAName === vertexBName) return;

        const vertexA = this.vertexList.searchNode(vertexAName);
        const vertexB = this.vertexList.searchNode(vertexBName);
        if (vertexA && vertexB) {
            const newEdgeAB = new Edge(vertexAName, vertexBName);
            const newEdgeBA = new Edge(vertexBName, vertexAName);

            const edgeA = vertexA.childList.searchNode(vertexBName);
            const edgeB = vertexB.childList.searchNode(vertexAName);
            if (!edgeA) {
                vertexA.childList.insertNode(newEdgeAB);
            }
            if (!edgeB) {
                vertexB.childList.insertNode(newEdgeBA);
            }
        }
    }

    hasEdge(vertexAName, vertexBName) {
        if (vertexAName === vertexBName) return false;

        const vertexA = this.vertexList.searchNode(vertexAName);
        const vertexB = this.vertexList.searchNode(vertexBName);
        if (vertexA && vertexB) {
            if (vertexA.childList.searchNode(vertexBName)) {
                return true;
            }
        }
        return false;
    }

    removeEdge(vertexAName, vertexBName) {
        if (vertexAName === vertexBName) return;

        const vertexA = this.vertexList.searchNode(vertexAName);
        const vertexB = this.vertexList.searchNode(vertexBName);
        console.log(vertexA, vertexB);
        if (vertexA && vertexB) {
            vertexA.childList.deleteNode(vertexBName);
            vertexB.childList.deleteNode(vertexAName);
        }
    }

    removeVertex(vertexName) {
        const vertex = this.vertexList.searchNode(vertexName);
        if (vertex) {
            let temp = vertex.childList.head;
            while (temp) {
                this.removeEdge(vertex.getName(), temp.getName());
                temp = vertex.childList.head;
            }
            this.vertexList.deleteNode(vertexName);
        }
    }

    resetVisited() {
        let temp = this.vertexList.head;
        while (temp) {
            temp.visited = false;
            temp = temp.next;
        }
    }

    getInfor() {
        let vertexList = 'Danh sách đỉnh: ' + this.vertexList.size + ' đỉnh <br/>' + this.vertexList.getList();
        vertexList += '<br/><br/>';

        let childList = '';
        let temp = this.vertexList.head;
        let count = this.vertexList.size;
        while (temp) {
            childList = count-- + '.&ensp;' + temp.getName() + '&nbsp;<span style="color: brown; font-weight: 400; font-style: italic;">(' + temp.childList.size + ' đỉnh kề):&ensp;</span>' + temp.getChildList() + '<br/>' + childList;
            temp = temp.next;
        }

        return vertexList + 'Danh sách đỉnh: <br/>' + childList;
    }
}