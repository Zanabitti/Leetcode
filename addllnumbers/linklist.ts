
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   
    
    let l1result: string = calclist(l1);
    let l2result: string = calclist(l2);
    console.log(l1result);
    console.log(l2result);
    let rounds: number = 0;
    l1result.length >= l2result.length ? rounds = l1result.length : rounds = l2result.length;

    let l3result: string = "";
    let l2c: number, l1c: number, l3c: number;
    let tens: number = 0;
    for(let i=0; i<rounds; i++){
        if(i<l1result.length) l1c = Number(l1result.charAt(i));
        else l1c = 0;
        if(i<l2result.length) l2c = Number(l2result.charAt(i));
        else l2c = 0;
        
        l3c = l1c+l2c+tens;
        if(l3c > 9) {l3c -= 10; tens = 1;}
        else tens = 0;
        l3result += l3c.toString();
    }
    
    if(tens > 0) l3result += tens.toString();

    let lt = new ListNode();
    let lz = lt;
    for(let i=0; i<l3result.length;i++){
        lt.val = Number(l3result.charAt(i));
        if(i != l3result.length-1) {lt.next = new ListNode();
        lt = lt.next;}
    }

    return lz;

    function calclist(lc1: ListNode): string {
        let b: boolean = true;
        let r: string = "";
        do {
            r += lc1.val.toString();
            lc1.next != null ? lc1 = lc1.next : b = false;
        } while (b);
        return r;
    }
};

//testcase

let l1 = new ListNode(2,
        new ListNode(4,
        new ListNode(9)));
let l2 = new ListNode(5,
        new ListNode(6,
        new ListNode(4,
        new ListNode(9))));
        
let result = addTwoNumbers(l1,l2);

//console.log(result);