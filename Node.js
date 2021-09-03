// Node của LinkedList
class Node {
    // Thuộc tính của LinkedList gồm data và móc nối .next
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    // Hàm lấy ra data của Node LinkList
    getName() {
        return this.data;
    }
}