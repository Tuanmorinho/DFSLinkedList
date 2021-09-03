class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(node) {
        this.size++;
        node.next = this.head;
        this.head = node;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        this.size--;
        let temp = this.head;
        this.head = this.head.next;
        return temp;
    }

    // Hàm lấy giá trị trên cùng của stack
    peek() {
        return this.head;
    }

    // Check stack rỗng
    isEmpty() {
        return this.size === 0;
    }

    // Hàm in ra stack
    print() {
        let temp = this.head;
        let output = '';
        while (temp) {
            output = temp.data.getName() + ', ' + output;
            temp = temp.next;
        }
        return output.substring(0, output.length - 2);
    }
}