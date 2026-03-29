
let msonguyen = [];
let dem = 0; 
for(let i = 0; i < 10 ;i++){
    num = Number(prompt('Mời bạn nhập vào số nguyên: '));
    msonguyen.push(num);
    if(num >= 10){
        dem++;
    }
}
alert("Có "+ dem + " số nguyên lớn hơn bằng 10")
console.log(msonguyen);
