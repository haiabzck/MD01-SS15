
let msonguyen = [];

while (msonguyen.length < 10) {
    let num = Number(prompt(`Nhập phần tử thứ ${msonguyen.length + 1}:`));

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên!");
    } else {
        msonguyen.push(num);
    }
}

let tim= Number(prompt(`Nhập số nguyên bất kì :`));

        if(msonguyen.includes(tim)){
            console.log("Number X is in the array");

        }else{
            console.log(`Number X is not in the array`);
        }
       


