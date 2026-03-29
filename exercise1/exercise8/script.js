
let a = [];
let b = [];
let c = new Array(20);
while (a.length < 10) {
    let num = Number(prompt(`Nhập phần tử thứ ${a.length + 1} của mảng a:`));

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên!");
    } else {
        a.push(num);
    }
}
while (b.length < 10) {
    let numb = Number(prompt(`Nhập phần tử thứ ${b.length + 1} của mảng b:`));

    if (isNaN(numb)) {
        alert("Vui lòng nhập một số nguyên!");
    } else {
        b.push(numb);
    }
}
c = b.concat(a);
console.log(c);
