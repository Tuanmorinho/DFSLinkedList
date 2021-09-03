// Node của đồ thị, kế thừa lớp Node định nghĩa cho node trong danh sách liên kết
class Vertex extends Node {
    // Các thuộc tính của Vertex là childList - tập Child(S) và biến boolean check node đồ thị đã duyệt qua
    constructor(name) {
        super(name);
        this.childList = new LinkedList();
        this.visited = false;
    }

    // Hàm lấy ra giá trị trong childList với hàm getList() được định nghĩa bởi lớp LinkedList.
    getChildList() {
        return this.childList.getList();
    }
}