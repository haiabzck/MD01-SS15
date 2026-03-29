let str = prompt('Mời bạn nhập chuỗi ');
let arr = str.split('');

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    if(arr[i]==='-'){
        arr[i]='_';
    }
}
console.log(arr.join(''));