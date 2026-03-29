
let msonguyen = [];

while (msonguyen.length < 10) {
    let num = Number(prompt(`Nhập phần tử thứ ${msonguyen.length + 1}:`));

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên!");
    } else {
        msonguyen.push(num);
    }
}
msonguyen.sort((a, b) => b - a);
console.log(msonguyen);


