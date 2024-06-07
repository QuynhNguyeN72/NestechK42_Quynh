//Bài 1
function sumOfOddNumbers (arr){
    var sum = 0;
    var sole = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 != 0)
        {
            sum = sum + arr[i];
            console.log(arr[i]);
        }
    }
    console.log("Tổng các số lẻ trong mảng: ", sum);
}

let arr = [3, 4, 15, 8];
sumOfOddNumbers(arr);


//Bài 2
function removeDuplicates(arr1){
    var arrBS = [];
    for(let i = 0; i < arr1.length; i++)
    {  
        if(arr1.indexOf(arr1[i]) == i)
        {
            arrBS.push(arr1[i]);
        }
        }
    console.log("Mảng sau khi loại bỏ phần tử lặp: ", arrBS);
}

let arr1 = [2, 4, 2, 3, 4, 7, 2, 4];
removeDuplicates(arr1);

//Bài 3
function isIncreasingArray(arr2){
    console.log("Mảng ",arr2, " có phải mảng tăng dần không?");
    for(let i = 0; i < arr.length; i++)
    {
        var flag = 0;
        if(arr2[i] < arr2[i+1])
        {
            flag = 1;
        }
        else
        {
            flag = 0;
        }
    }
    if (flag == 1)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}

let arr2 = [6, 7, 8, 9, 10];
isIncreasingArray(arr2);

