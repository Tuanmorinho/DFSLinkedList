class Vertex extends Node {
    constructor(name) {
        super(name);
        this.childList = new LinkedList();
        this.visited = false;
    }

    getChildList() {
        return this.childList.getList();
    }
}