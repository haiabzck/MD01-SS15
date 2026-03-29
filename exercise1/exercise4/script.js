
let msonguyen = [];

while (msonguyen.length < 10) {
    let num = Number(prompt(`Nhập phần tử thứ ${msonguyen.length + 1}:`));

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên!");
    } else {
        msonguyen.push(num);
    }
}

let dao= msonguyen.reverse();
console.log("Mảng của bạn:", msonguyen);
console.log(`Mảng sau khi đảo:` ,dao);
