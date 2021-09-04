// Lớp danh sách móc nối
class LinkedList {
    // Thuộc tính gồm head, size - kích thước
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Hàm chèn Node
    insertNode(node) {
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    //Hàm tìm kiếm Node
    searchNode(value) {
        let temp = this.head;
        let index = 0;
        while (temp) {
            if (temp.getName() === value) {
                return temp;
            }
            index++;
            temp = temp.next;
        }
        return null;
    }

    // Hàm xóa Node
    deleteNode(value) {
        let prevNode = null;
        let temp = this.head;
        while (temp) {
            if (temp.getName() === value) {
                if (prevNode) {
                    prevNode.next = temp.next;
                } else {
                    this.head = temp.next;
                }
                this.size--;
                return;
            }
            prevNode = temp;
            temp = temp.next
        }
    }

    // Hàm lấy Node
    getNode(index) {
        let temp = this.head;
        let i = 1;
        while (temp && i++ < index) {
            temp = temp.next;
        }
        return temp;
    }

    // Hàm lấy danh sách Node
    getList() {
        let temp = this.head;
        let output = '';
        while (temp) {
            output = temp.getName() + ', ' + output;
            temp = temp.next;
        }
        return output.substring(0, output.length - 2);
    }

    // Hàm in ra tập DONG
    print() {
        let temp = this.head;
        let output = '';
        while (temp) {
            output = temp.getName().data + ', ' + output;
            temp = temp.next;
        }
        return output.substring(0, output.length - 2);
    }
}