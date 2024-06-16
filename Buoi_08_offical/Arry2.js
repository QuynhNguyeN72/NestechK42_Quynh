document.addEventListener('DOMContentLoaded', (event) => {
    const fixedText = "Vương Dịch yêu Châu Thi Vũ!!! 👉👈 Thi tình họa dịch is real" ;
    let index = 0;

    const inputField = document.getElementById('input');
    const displayField = document.getElementById('display');

    inputField.addEventListener('keydown', (event) => {
        event.preventDefault();  // Ngăn không cho ký tự thực sự được nhập vào

        // Hiển thị từng ký tự của chuỗi cố định
        if (index < fixedText.length) {
            displayField.textContent += fixedText[index];
            index++;
        }
    });
});


const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
randomArray.push(randomNumber);


let a = [];
let count = 0;
let vitri = 0;
let max = 0;
let sum = 0;
let avg = 0;
let count_am = 0;
let V = 72;
let flag = false;
let ss;

let c = [];

for (let i = 0; i < 10; i++)
    {    
        const randomNumber = Math.floor(Math.random() * (80 - (70) + 1)) + (70); 
        a.push(randomNumber);
        if (a[i] >= 10)
            {
                count ++;
            }
        if (a[i] > max)
            {
                max = a[i];
                vitri = i + 1;
            }
        sum = sum + a[i];
        avg = sum / a.length;
        if (a[i] < 0)
            {
                count_am ++;
            }
        if (a[i] == V)
            {
                flag = true;
            }
}

let b = a.slice(); //Tạo bản sao
for (let i = 0; i < b.length - 1; i++) {
    for (let j = 0; j < b.length - 1 - i; j++) {
        if (b[j + 1] > b[j]) {
            ss = b[j];
            b[j] = b[j + 1];
            b[j + 1] = ss;      
        }
    }
}

for (let i = 0; i < 10; i++)
    {    
        const randomNumber = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100); 
        c.push(randomNumber);
    }

let d = [];
d = d.concat(a, c);

// concat: nối hai mảng lại với nhau

console.log(a);
console.log(c);

console.log("Số phần tử lớn hơn hoặc bằng 10 là " + count);
console.log("Phần tử lớn nhất trong mảng là " + max + ", vị trí của phần tử " + max + " là " +  vitri);
console.log("Giá trị trung bình các phần tử trong mảng là " + avg);
console.log("Số phần tử nguyên âm là " + count_am);
console.log("Mảng sau khi sắp xếp theo thứ tự giảm dần " + b.join(", "));

console.log(d);

if(flag == true)
    {
        console.log("V is in the array");
        let index = a.indexOf(V);
        while (index !== -1) {
            for (let i = index; i < a.length - 1; i++) {
                a[i] = a[i + 1];
            }
            a[a.length - 1] = 0; // Gán phần tử cuối cùng bằng 0
            index = a.indexOf(V); // Tìm vị trí tiếp theo của V
        }
        console.log("Mảng sau khi loại bỏ V " + a.join(", "));
    }
else{
        console.log("V is not in the array");
}







