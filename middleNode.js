class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
    add(val) {
        let current = this
        while (current.next) {
            current = current.next
        }
        current.next = new ListNode(val)
    }
}


var middleNode = function(head) {
    let finalNode = head
    let middleNode = head

    while (finalNode && finalNode.next) {
        finalNode = finalNode.next.next
        middleNode = middleNode.next
    }
    return middleNode.val
};

const node1 = new ListNode(1)
node1.add(2)
node1.add(3)
node1.add(4)
node1.add(5)

console.log(middleNode(node1)) // 3

