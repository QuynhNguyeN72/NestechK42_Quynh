function calBMI(){
    var he = parseFloat(document.getElementById("he").value);
    var we = document.getElementById("we").value;
    let bmi = we / (he*he);
    let inter;

    if (he === '' || isNaN(he)) {
        alert("Vui lòng nhập chiều cao")
        return;
    }else if (we === '' || isNaN(we)){
        alert("Vui lòng nhập cân nặng")
        return;
    }else if( bmi < 18.5)
    {
        inter = "Underweight";
    }else if( bmi >= 18.5 && bmi < 25.0)
    {
        inter = "Normal";
    }else if( bmi >= 25.0 && bmi < 30.0)
    {
        inter = "Overweight";
    }else{
        inter = "Obese";
    }
    document.getElementById("result").innerHTML = "Kết quả BMI: " + bmi.toFixed(1) + " => Đánh giá BMI: " + inter;
}


function day(){
    var month = parseInt(document.getElementById("month").value);
    let day;
    switch(month){
        case(1): day = "31";
        break;
        case(2): day = "28 hoặc 29";
        break;
        case(3): day = "31";
        break;
        case(4): day = "30";
        break;
        case(5): day = "31";
        break;
        case(6): day = "30";
        break;
        case(7): day = "31";
        break;
        case(8): day = "31";
        break;
        case(9): day = "30";
        break;
        case(10): day = "31";
        break;
        case(11): day = "30";
        break;
        case(12): day = "31";
        break;
        default: 
        alert("Nhập sai!!!");
        break;
    }
    document.getElementById("ans-day").innerHTML = "Tháng " + month + " có " + day + " ngày";
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}


window.onload = function () {
    //canvas init
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  
    //snowflake particles
    var mp = 25; //max particles
    var particles = [];
    for (var i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W, //x-coordinate
        y: Math.random() * H, //y-coordinate
        r: Math.random() * 4 + 1, //radius
        d: Math.random() * mp, //density
      });
    }
  
    //Lets draw the flakes
    function draw() {
      ctx.clearRect(0, 0, W, H);
  
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    }
  
    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    var angle = 0;
    function update() {
      angle += 0.01;
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        //Updating X and Y coordinates
        //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
        //Every particle has its own density which can be used to make the downward movement different for each flake
        //Lets make it more random by adding in the radius
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;
  
        //Sending flakes back from the top when it exits
        //Lets make it a bit more organic and let flakes enter from the left and right also.
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
          if (i % 3 > 0) {
            //66.67% of the flakes
            particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
          } else {
            //If the flake is exitting from the right
            if (Math.sin(angle) > 0) {
              //Enter from the left
              particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
            } else {
              //Enter from the right
              particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
            }
          }
        }
      }
    }
  
    //animation loop
    setInterval(draw, 33);
  };
function yesClick() {
    alert("Nice!");
}
  
function noHover() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
}