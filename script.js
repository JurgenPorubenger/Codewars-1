// var count = null
// function persistence (num) {
//   function arr (a) {
//     const s = ('' + a).split('')
//     return s
//   }
//   function mult (a) {
//     let f1 = 1
//     const s = a.forEach((item) => { f1 *= item })
//     return f1
//   }
//   if (num < 10) {
//     return 1
//   } else {
//     count++
//     const spl = arr(num)
//     const res = mult(spl)
//     persistence(res)
//   }
//   return count
// }
// console.log(persistence(1224))

function list (names) {
  // your code here
    const a = [...names];
    let str='';
    if (a.length===0) return str;
    if (a.length===1) return str = a[0].name;
    const lastName = a.pop().name;
    const firstNames = a.map((item)=>item.name).join(', ');
    return `${str} ${firstNames} & ${lastName}`;
}
console.log(list([{name: 'Bart'}]));
