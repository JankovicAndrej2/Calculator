const swapElements = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};

let current_input = [0];

let numbers = document.querySelectorAll(".num");
let input = document.querySelector(".input");
let output = document.querySelector(".output")

let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multyply");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let equal = document.querySelector(".equal");


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

       console.log(i);
       console.log(current_input);
    });
}









