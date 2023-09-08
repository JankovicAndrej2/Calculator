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


function add(a,b)
{
    return a+b;
}


//-------------------------------------
 
let current_input = [0];
let current_output = 0;



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





//event click za brojeve
for(let i = 0; i<numbers.length; i++)
{
    numbers[i].addEventListener('click', () =>{
        //ako je prva znamenka 0 ili ako se vise puta pise 0 da se ne registrira
        if(current_input.length === 1 && current_input[0] === 0)
        {
            current_input.shift();
        }

       if(current_input === [0])
       {
            
        current_input = i; 
       }
       else{
           
            current_input.push(i);
        }


        input.innerHTML = arrayToNumber(current_input);
        console.log(arrayToNumber(current_input));
        console.log(output.firstChild.textContent);
    });
}



plus.addEventListener('click', () =>{
    
    current_output = arrayToNumber(current_input) + Number(output.firstChild.textContent);
    output.innerHTML = current_output;
    input.innerHTML = 0;
    current_input = [0];
})



















