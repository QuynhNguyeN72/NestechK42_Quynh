function showResult(){
    var Number = document.getElementById("inputNumber").value;
    let randomValue = parseInt(Math.random()*100);

    if(Number.length == 0)
    {
        alert("Vui lòng nhập số ngẫu nhiên");
    }else if(Number == randomValue)
    {
        alert("Đáp án đúng!");
    }else if(Number < randomValue && Number >= 0){
        alert("Số của bạn nhỏ hơn đáp án!");
    }else if(Number > randomValue && Number <= 100){
        alert("Số của bạn lớn hơn đáp án!");
    }else{
        alert("Số của bạn đã nằm ngoài phạm vi!");
    }
}

function Add(){
    var Number1 = document.getElementById("input1").value;
    var Number2 = document.getElementById("input2").value;

    let add = Number(Number1) + Number(Number2);
    alert(add);
}

function Sub(){
    var Number1 = document.getElementById("input1").value;
    var Number2 = document.getElementById("input2").value;

    let sub = Number1 - Number2;
    alert(sub);
}

function Mul(){
    var Number1 = document.getElementById("input1").value;
    var Number2 = document.getElementById("input2").value;

    let mul = Number1 * Number2;
    alert(mul);
}

function Div(){
    var Number1 = document.getElementById("input1").value;
    var Number2 = document.getElementById("input2").value;

    let div = Number1 / Number2;
    alert(div);
}
var count = 0;
var symbol = "X";
var endGame = false;

function Fun(){
    for(let i = 1; i <= 9; i++)
    {
        document.getElementById(i.toString()).addEventListener("click", function () 
        { 
            if (this.innerHTML === "" && !endGame) 
            {
                this.innerHTML = symbol; 

                if(symbol === "X")
                {
                    symbol = "O";
                    count ++;
                }else{
                    symbol = "X";
                    count ++;
                }
            checkWin(symbol,endGame);
            }

        })
    }
}

    var viTriWin = [
        [1, 2, 3], [4, 5, 6], 
        [7, 8, 9], [1, 4, 7], 
        [2, 5, 8], [3, 6, 9], 
        [1, 5, 9], [3, 5, 7], ];
    
    function checkWin(symbol,endGame) {
        for (let i = 0; i < viTriWin.length; i++) {
            if (
                document.getElementById(viTriWin[i][0]).innerHTML === symbol &&
                document.getElementById(viTriWin[i][1]).innerHTML === symbol &&
                document.getElementById(viTriWin[i][2]).innerHTML === symbol
                ) {
                    endGame = true;
                    alert(symbol + " win!");
                    location.reload();

                }else if (count == 9){
                    endGame = true;
                    alert("draw!");
                    location.reload();
                }

        }
    }
    document.addEventListener("DOMContentLoaded", Fun);