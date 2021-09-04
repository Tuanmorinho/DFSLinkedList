// Đỉnh của đồ thị, kế thừa lớp Node
class Vertex extends Node {
    // Các thuộc tính của Vertex là edgeList (danh sách các cạnh của đỉnh) và biến boolean check đỉnh đồ thị đã duyệt qua
    constructor(name) {
        super(name);
        this.edgeList = new LinkedList();
        this.visited = false;
    }

    // Hàm lấy ra edgeList
    getEdgeList() {
        return this.edgeList.getList();
    }
}