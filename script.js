var count=null;
function persistence(num) {
    function arr(a) {
        let s = ('' + a).split('');
        return s;
    }
    function mult(a) {
        let f1= 1;
        let s = a.forEach((item)=>{f1*=item});
        return f1;
    }
    if (num<10) {
        return 1;
    } else {
        count++;
        let spl = arr(num);
        let res = mult(spl);
        persistence(res);
        }
    return count;
    }
console.log(persistence(1224));
