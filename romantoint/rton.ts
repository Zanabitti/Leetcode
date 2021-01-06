function romanToInt(s: string): number {
    //convert each char to corresponding number
    
    let romans = new Map([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000],
    ]);

    let numerics: Array<number> = [];

    for (let i=0;i<s.length;i++){
        numerics.push(romans.get(s[i]));
    }
    //compare to position x to x+1,
    // if >=, then add to count, continue from x+1
    // else x+1 - x and add to count, continue from x+2

    let count: number = 0;

    for (let i=0;i<numerics.length;i++){
        if(i+1 == numerics.length) count += numerics[i];
        else if(numerics[i] >= numerics[i+1]) count += numerics[i];
        else {
            count += (numerics[i+1] - numerics[i]);
            i++;
        }
    }
    return count;
};

//testings
let tests: string[] = ['III','IV','IX','LVIII','MCMXCIV','MMXX','CXIII','I','MMMCMXCIX'];
for(let i = 0;i<tests.length;i++){
    console.log(
        'In = ' + tests[i] + ', Out = ' +
        romanToInt(tests[i]));
}
