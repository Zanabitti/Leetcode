
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const answer = new ListNode(0);
    let workingNode = answer;
    while (l1 || l2) {
        workingNode.next = new ListNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + Math.floor(workingNode.val / 10));
        workingNode.val = workingNode.val % 10;
        workingNode = workingNode.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    if (workingNode.val > 9) {
        workingNode.next = new ListNode(1);
        workingNode.val = workingNode.val % 10;
    }
    
    return answer.next;
};