//Cạnh của đồ thị luôn có 2 điểm tạm gọi là A và B
class Edge extends Node {
    // Các thuộc tính của Edge là điểm A và điểm B
    constructor(vertexA, vertexB) {
        // Khi thay đổi Edge chỉ truyền điểm thứ 2 - điểm B vào;
        super(vertexB);
        this.vertexA = vertexA;
        this.vertexB = vertexB;
    }
}