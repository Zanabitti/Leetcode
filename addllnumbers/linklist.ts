
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return;
};
//l1 = [2,4,3], l2 = [5,6,4]
let l1 = new ListNode(2,
    new ListNode(4,
        new ListNode(3)));