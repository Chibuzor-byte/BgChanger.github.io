// ALGORITHM


// STEP 1
/*
There are 16 possible characters in the hexadecimal number 
system but we only need six characters to make a hex colour. 
Let's have an array of all 16 characters:
*/


// STEP 2

/*
Secondly, if you look at the HTML code you'll see that
 we'll need to grab hold of the button 
and colour containers using their class and ID respectively,
*/

// STEP 3

/* Now, let's have a function that will generate a random 
number based on the length of the hex array. 
You can learn how to generate a random number from this*/


// STEP 4

/* Next, we'll need to add an event listener to the button. 
The event listener will take an event called 'click', and an event handler 
that will perform an operation when the button is clicked.*/
const hexValue = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const bgContainer = document.querySelector('.bg-container');


function generateHexValue() {
    return Math.floor(Math.random() * hexValue.length);
}





btn.addEventListener("click", () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        let generatedNumber = generateHexValue();
        hexColor += hexValue[generatedNumber];  
    }

    bgContainer.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})