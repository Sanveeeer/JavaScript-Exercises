// Number Exercise 1: Age Logger

let age = 25;
 
console.log(age);

// Number Excerise 2: So Many Rabbits

let numberOfRabbits = 2;
numberOfRabbits = numberOfRabbits * 3;

console.log(numberOfRabbits);

// Number Exercise 3: BODMAS

let bodmasExample = 3;
bodmasExample = bodmasExample + 5 / 6;

console.log(bodmasExample);

// Number Exercise 4: Random Number Generator

let randomNumber = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber);

// String Exercise 1: Log your country

let myCountry = "England"

console.log(myCountry);

// String Exercise 2: String Length

console.log(myCountry.length);

// String Exercise 3: Upper Case

let favouriteFood = "Pizza"

console.log(favouriteFood.toUpperCase());

// String Exercise 4: Lower Case

console.log(favouriteFood.toLowerCase());

// String Exercise 5: Concatenation

let firstName = "Sanveer";
let myAge = 25;

let message = "What is your name?\n" + "Hello my name is " + firstName + " and I am " + myAge + " years old.";

console.log(message);

// String Exercise 6: Template Literals

let lastName = "Singh";

let welcomeFullName = `Welcome ${firstName} ${lastName},\nHow can i help you?`;

console.log(welcomeFullName);

// String || exercise: Find and Replace

function findAndReplace(str, strFind, strReplace) {
    
    str.includes(strFind)
    let replacedString = str.replace(strFind, strReplace);

    console.log(replacedString);
}

findAndReplace("Hi, how are you?", "Hi", "Hello");

// Control Flow Exercise 1: Password Check

let password = "password";

if (password.length > 7) {
    console.log(true); 
} 

else {
    console.log(false);
  }

// Control Flow Exercise 2: Height Test

let height = 150 ;

if (typeof height !== "number") {
    console.log("Please enter a number"); 
} 

else if (height >= 150) {
    console.log("You can go on the ride"); 
}

else {
    console.log("Sorry you are not tall enough");
}

// If Statement Project: Dice Prize​

let dice1 = Math.floor(Math.random() * 6 ) + 1;
let dice2 = Math.floor(Math.random() * 6 ) + 1;

if (dice1 === 6 && dice2 === 6) {
    console.log ("You won a top prize! A Bear!")
    }

    else if (dice1 === dice2) {
    console.log ("You win three free throws!")
    }

    else if ((dice1 && dice2) %2 === 0) {
    console.log ("You win one free throw!")
    }

    else {
    console.log ("You lose the game")}

    console.log(`You threw ${dice1} and ${dice2}`)


    