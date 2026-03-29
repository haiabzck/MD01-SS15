
let arr = [ 'c', 's', 'c', '2', '6', '1' ];
let dem=0;
for(let i =0;i<arr.length;i++){
    if(arr[i]>= '0' && arr[i]<= '9'){
            dem++;
    }
}
console.log(`Ký tự số có trong mảng là :` ,dem);
