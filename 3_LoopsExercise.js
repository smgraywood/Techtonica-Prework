// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
while (0<i && i<5){
console.log(i++)
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
do {
console.log(i++)
}
while(0 < i &&  i < 5)
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i=0; 0 < i && i < 5; i++){
    console.log(i++)
}
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
while (0<i && i<5){
    console.log(i--)
    }

do {
     console.log(i--)
     }
     while(0 < i &&  i < 5)
        
for (let i=5; 0 < i && i < 5; i++){
    console.log(i--)
    }

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
while (7<i && i<27){
    console.log(i++)
    }

do {
     console.log(i++)
     }
     while(7 < i &&  i < 27)
        
for (let i=7; 7 < i && i < 27; i++){
    console.log(i++)
    }



// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
while (0<i && i<100){
    console.log(i+10)
    }

do {
     console.log(i+10)
     }
     while(0 < i &&  i < 100)
        
for (let i=0; 0 < i && i < 100; i+10){
    console.log(i+10)
    }


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

//The loop will run infinitely because there is no stopping point, it will run as long as there are numbers less than 2 (infinitely).

let counterFour = 1;
while (counterFour < 2 && counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let numberILove= 73
while (numberILove <73 && numberILove >0){
    console.log(numberILove++)
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let numberILove= 73
while (numberILove <73 && numberILove >0){
    console.log(numberILove++)
    if (i !== numberILove){
        console.log(i + " not my favorite number")
    }
    else{console.log(i + " My favorite number!")}
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

//while loops are useful when you want something to continue until a specific condition is met. For loops are useful
//if you have a specific number of times you want an action performed. Do while loops seem like they would be useful
//if your focus was on the action rather than on the mechanism by which an action was performed, but I'm less sure about 
//why you would use a do while loop over a while loop.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
function counter(){
    for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
      console.log("counting down from " + outsideCounter);
    
      for (let insideCounter = outsideCounter; insideCounter <= 3 && insideCounter > 0; insideCounter--) {
        console.log("inside " + insideCounter);
      }
      console.log("***********************************");
    }
    }
    counter()

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

//For the most part I found it fairly easy. I used W3S as a reference for the do while loops and it was very helpful!

// Email your file to us or commit your file to GitHub and email us a link.
