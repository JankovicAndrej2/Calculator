const swapElements = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};

function arrayToNumber(arr) {
   let result = 0;

   for(let i = 0; i<arr.length ;i++)
   {
    result += arr[i] * Math.pow(10, arr.length-i-1);
   }
   return result;
}











//-------------------------------------
 


let numbers = document.querySelectorAll(".num");
let input = document.querySelector(".input");
let output = document.querySelector(".output");

let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let equal = document.querySelector(".equal");

let math = [...document.querySelectorAll(".math")];



//fixing id of numbers 
numbers = [...numbers];
swapElements(numbers,0,7);
swapElements(numbers,0,9);
swapElements(numbers,1,8);
swapElements(numbers,1,3);
swapElements(numbers,1,4);
swapElements(numbers,1,5);
swapElements(numbers,1,6);
swapElements(numbers,2,9);


let currentSymbol = "";
let current_input = [0];

for(let i = 0; i<10;i++)
{
    numbers[i].addEventListener('click', () =>{
        current_input.push(i);
        input.innerHTML = currentSymbol + " " + arrayToNumber(current_input);
    })
}

let count = 0;
let isFirst = false;
let isFirstNegative = false;
let lastMath = "";
math.forEach((element) =>{
    element.addEventListener('click', ()=>{
        currentSymbol = element.firstChild.nodeValue;
        input.innerHTML = element.firstChild.nodeValue + " " +"0";
        count++;
        let x; 
        console.log(current_input);
        if(count == 1)
        {
            isFirst = true;

            if(element.firstChild.nodeValue == '-')
            {
                isFirstNegative = true;
            }
        }

        if(count == 2 && isFirstNegative)
        {
            output.innerHTML = Math.abs(arrayToNumber(current_input));
            //input.innerHTML = "0";
            isFirstNegative = false;

        }
        else if(count == 1){
            output.innerHTML = arrayToNumber(current_input);
            //input.innerHTML = "0";
        }
        else{
            switch(lastMath){
                case '+': 
                    output.innerHTML =arrayToNumber(output.firstChild.nodeValue) + arrayToNumber(current_input); 
                    break;
                case '-': 
                    output.innerHTML = arrayToNumber(output.firstChild.nodeValue) - arrayToNumber(current_input); 
                    break;
                case 'x': 
                    output.innerHTML = arrayToNumber(output.firstChild.nodeValue) * arrayToNumber(current_input); 
                    break;
                case '/': 
                    output.innerHTML = arrayToNumber(output.firstChild.nodeValue) / arrayToNumber(current_input); 
                    break;
                

            }
        }
       
        

        console.log(output.firstChild.nodeValue);
        

        console.log(lastMath);

        lastMath = element.firstChild.nodeValue;
        current_input = [0];
       
    })
})


















