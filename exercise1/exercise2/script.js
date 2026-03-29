
let msonguyen = [];

while (msonguyen.length < 10) {
    let num = Number(prompt(`Nhập phần tử thứ ${msonguyen.length + 1}:`));

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên!");
    } else if (msonguyen.includes(num)) {
        alert("Số này đã tồn tại, vui lòng nhập số khác!");
    } else {
        msonguyen.push(num);
    }
}
let max = Number(msonguyen[0]);
let vitri = 0; 
for (let i = 1; i < msonguyen.length; i++) {
    if (msonguyen[i] > max) {
        max = msonguyen[i];
        vitri = i;
    }
}

console.log("Mảng của bạn:", msonguyen);
console.log(`Phần tử lớn nhất là: ${max} tại vị trí index: ${vitri}`);
alert(`Phần tử lớn nhất là: ${max} tại vị trí index: ${vitri}`);