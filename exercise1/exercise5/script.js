let str = prompt('Nhập vào một chuỗi: ');
let arr = str.split('');
let dem = 0;
const ngyam = ['a', 'e', 'i', 'o', 'u'];
for(let i = 0; i < arr.length; i++){
    if(ngyam.includes(arr[i])){
            dem++;
        }
       
}
console.log(arr);
console.log('Số nguyên âm có trong chuỗi là :' + dem)
alert('Số nguyên âm có trong chuỗi là :' + dem);
