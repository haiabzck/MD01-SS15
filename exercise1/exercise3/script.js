
let msonguyen = [];

while (msonguyen.length < 10) {
    let num = Number(prompt(`Nhập phần tử thứ ${msonguyen.length + 1}:`));

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên!");
    } else {
        msonguyen.push(num);
    }
}
let max = Number(msonguyen[0]);
let tong = 0; 
for (let i = 1; i < msonguyen.length; i++) {
    tong +=msonguyen[i];
    if (msonguyen[i] > max) {
        max = msonguyen[i];
        vitri = i;
    }
}
let gtritb= tong / msonguyen.length;
console.log("Mảng của bạn:", msonguyen);
console.log(`Phần tử lớn nhất là: ${max}`);
console.log(`giá trị trung bình là : ${gtritb}`);
alert(`Phần tử lớn nhất là: ${max} và giá trị trung bình là : ${gtritb}`);