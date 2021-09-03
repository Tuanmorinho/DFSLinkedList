class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertNode(node) {
        node.next = this.head;
        this.head = node;
        this.size++;
    }

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

    getNode(index) {
        let temp = this.head;
        let i = 1;
        while (temp && i++ < index) {
            temp = temp.next;
        }
        return temp;
    }

    getList() {
        let temp = this.head;
        let output = '';
        while (temp) {
            output = temp.getName() + ', ' + output;
            temp = temp.next;
        }
        return output.substring(0, output.length - 2);
    }
}