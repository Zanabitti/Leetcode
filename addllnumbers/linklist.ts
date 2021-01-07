
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    getVal(){ return this.val;}
    getNext(){ return this.next;}
}
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   
    
    let l3 = new ListNode(calclist(l1)+calclist(l2));
    return l3;

    function calclist(lc1: ListNode): number {
        let b: boolean = true;
        let r: number = 0;
        let x: number = 0;
        do {
            r += lc1.getVal() * (10 ** x);
            x++;
            lc1.getNext() != null ? lc1 = lc1.getNext() : b = false;
        } while (b);
        return r;
    }
};

//testcase

//l1 = [2,4,0,3], l2 = [5,6,4], out = [3507]
let l1 = new ListNode(2,
        new ListNode(4,
        new ListNode(0,
        new ListNode(3))));
let l2 = new ListNode(5,
        new ListNode(6,
        new ListNode(4)));
        
let result = addTwoNumbers(l1,l2);

console.log(result.getVal());