let a = [4, 6, 100, 8, 15, 28, 30, 99, 101, 41, 42, 2, 1];
let first = 0;
let last = a.length - 1;
while(first < last){
    let change = a[first];
    a[first] = a[last];
    a[last] = change;
    first ++;
    last --;
}
console.log(a);


let b = 30;
let vitri = 0;

for(let i = 0; i <= a.length; i ++)
    {
        vitri ++;
        if(a[i] == b)
            {
                console.log("Tìm thấy " + b + " ở vị trí " + vitri + " trong mảng!!");
            }
    }
    
let max = a[0];
for(let j = 0; j <= a.length; j ++)
    {
        if(a[j] > max)
            {
                max = a[j];
            }
    }
    console.log("Giá trị lớn nhất trong mảng " + a.join(", ") + " là " + max);



var str = 'Happy Birthday';

var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    
var result = [];
    
for (var x = 0; x < str.length; x++) {
    if (UPPER.indexOf(str[x]) !== -1) {

        result.push(str[x].toLowerCase());
    }

    else if (LOWER.indexOf(str[x]) !== -1) {

        result.push(str[x].toUpperCase());
    }

    else {
        result.push(str[x]);
    }
}

    console.log(result.join(''));