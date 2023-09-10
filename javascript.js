const swapElements = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};


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
let isEqualClicked = false;
let count = 0;
let isFirst = false;
let isFirstNegative = false;
let lastMath = "";


for(let i = 0; i<10;i++)
{
    
    numbers[i].addEventListener('click', () =>{
        if(isEqualClicked)
        {
            isEqualClicked = false;
            output.innerHTML = "0";
        }
        current_input.push(i);
        if(currentSymbol == "=")
        {
            currentSymbol = ""; 
        }
        
        input.innerHTML = currentSymbol + " " + arrayToNumber(current_input);
    })
}



math.forEach((element) =>{
    element.addEventListener('click', ()=>{
        
        currentSymbol = element.firstChild.nodeValue;
        if(currentSymbol == "=")
        {
            currentSymbol = ""; 
        }

        input.innerHTML = currentSymbol + " " +"0";
        count++;
        let x; 
        
        if(count == 1)
        {
            isFirst = true;
        }

        if(element.firstChild.nodeValue == '-' && count == 1)
         {
            isFirstNegative = true;
         }

       
        if(isFirst){
            output.innerHTML = arrayToNumber(current_input);
            isFirst = false;
            isFirstNegative = false;
            //input.innerHTML = "0";
        }
        else if(count == 2 && isFirstNegative)
        {
            output.innerHTML = -1 * arrayToNumber(current_input) ;
            //input.innerHTML = "0";
            isFirstNegative = false;
            isFirst = false;

        }
        else{
            //if(output.firstChild.nodeValue == "")
            //{
             //   output.innerHTML = 0;
            //}
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


        if(element.firstChild.nodeValue == '='){
            count = 0;
            input.innerHTML = 0;
            isEqualClicked = true;
        }
        

       

        lastMath = element.firstChild.nodeValue;
        current_input = [0];
       
    })
})


















