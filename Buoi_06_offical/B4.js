//Bài 1
let Ly = 9;
let Hoa = 10;
let Sinh = 6;
let avg = (Ly + Hoa + Sinh)/3;
let sum = Ly + Hoa + Sinh;
console.log("Điểm trung bình là: ",avg.toFixed(2));
console.log("Tổng điểm là: ",sum);

//Bài 2

function CsangF(doC){
    let doF = ( 9 * doC )/5 + 32;
    console.log(doF);
}
let doC = 40;
console.log(doC, "độ C chuyển sang độ F là: ");
CsangF(doC);

//Bài 3

let r = 8;
let dienTichHinhTron = r*r*3.14;
console.log("Với bán kính ",r," có diện tích hình tròn là: ", dienTichHinhTron);

//Bài 4

let chuViHinhTron = r*2*3.14;
console.log("Với bán kính ",r," có chu vi hình tròn là: ", chuViHinhTron);


//Tính bình phương
function bp(a){
    binhphuong = a*a;
    console.log("Bình phương của " + a + " là " + binhphuong);
}
bp(8);

//Tính giai thừa
function gt(b){
    let giaithua = 1;
    if (b == 0)
        {
            giaithua = 1;
        }
    for(let i = 1; i <= b; i++)
        {
            giaithua = giaithua * i;
        }
    console.log(b + "! = " + giaithua);
}
gt(6);

//Xác định phải kí tự số không
function xdnumber(c){
    const char = c.toString();
    if (!isNaN(char)) {
        console.log('true');
    } else {
        console.log('false');
    }
}
xdnumber('hii');

//Tính số nhỏ nhất
function min(x,y,z){
    let min = x;
    if(y < min)
        {
            min = y;
        }
    else if(z < min)
        {
            min = z;
        }
    console.log("Số nhỏ nhất trong: " + x + ", " + y + ", " + z + " là " + min );
}

min(10000, 155, 666)
