//swaps two elements in array
const swapElements = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};

// converts array to number
function arrayToNumber(arr) {
   let result = 0;
   let negat = 1;
   let start = 0;
   if(arr[0] == '-')
   {
    negat = -1;
    start= 1;
   }

   for(let i = start; i<arr.length ;i++)
   {
    result += arr[i] * Math.pow(10, arr.length-i-1);
   }
   return  negat * result;
}











//-------------------------------------
 


let numbers = document.querySelectorAll(".num");
let input = document.querySelector(".input");
let output = document.querySelector(".output");



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



let current_input = [0];
let count = 0;

let isEqualClicked = false;
let isFirst = false;
let isFirstNegative = false; 

let currentSymbol = ""; // current symbol used
let lastMath = ""; //last math symbol

//event lisened for numbers
for(let i = 0; i<10;i++)
{
    numbers[i].addEventListener('click', () =>{
        if(isEqualClicked) //if equal is clicked 
        {
            isEqualClicked = false;
            output.innerHTML = "0";
        }

        current_input.push(i);

        if(currentSymbol == "=") // postavljanje na default
        {
            currentSymbol = ""; 
        }
        
        input.innerHTML = currentSymbol + " " + arrayToNumber(current_input);
    })
}


// event lisener for math operators
math.forEach((element) =>{
    element.addEventListener('click', ()=>{
        
        currentSymbol = element.firstChild.nodeValue;
        if(currentSymbol == "=") // postavljanje na default
        {
            currentSymbol = ""; 
        }

        input.innerHTML = currentSymbol + " " + "0";
        count++;
        
        //if number is first inputed
        if(count == 1)
        {
            isFirst = true;
        }
        //check if first number is negative
        if(element.firstChild.nodeValue == '-' && count == 1)
        {
            isFirstNegative = true;
        }

       
        if(isFirst){ 
            output.innerHTML = arrayToNumber(current_input);
            isFirst = false;
            isFirstNegative = false;
            
        }
        else if(count == 2 && isFirstNegative)
        {
            output.innerHTML = -1 * arrayToNumber(current_input) ;
            
            isFirstNegative = false;
            isFirst = false;

        }
        else{
            
            switch(lastMath){
                case '+': 
                    output.innerHTML =arrayToNumber(output.firstChild.nodeValue) + arrayToNumber(current_input); 
                    break;
                case '-': 
                    output.innerHTML = arrayToNumber(output.firstChild.nodeValue) - Math.abs(arrayToNumber(current_input)); 
                    break;
                case 'x': 
                    output.innerHTML = arrayToNumber(output.firstChild.nodeValue) * arrayToNumber(current_input); 
                    break;
                case '/': 
                    output.innerHTML = arrayToNumber(output.firstChild.nodeValue) / arrayToNumber(current_input); 
                    break;
                default:
                    break;
            }
        }

        // defaulting options
        if(element.firstChild.nodeValue == '='){ 
            count = 0;
            input.innerHTML = 0;
            isEqualClicked = true;
        }
        

       

        lastMath = element.firstChild.nodeValue;
        current_input = [0];
       
    })
})


















