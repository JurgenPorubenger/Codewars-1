function persistence(num) {
    let n = num;
    function arr(a) {
        let s = ('' + a).split('');
        return s;
    }
    function mult(a) {
        let f1= 1;
        let s = a.forEach((item)=>{f1*=item});
        return f1;
    }
    let count = 0;
    let spl = arr(n);
    if (spl.length>1) {
        let res = mult(spl);
        n = res;
        count++;
        return count;
    } else {
        return spl[0];

    }
    // forEach((item)=>{first*=item});
}
console.log(persistence(244));
