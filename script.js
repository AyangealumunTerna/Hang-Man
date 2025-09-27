
// DRY (Don’t Repeat Yourself) principle reminder

let correctGuesses = [];  
const displayedWord = document.getElementById("displayed-word");  
let chosenWord = pickRandomWord();  
let keyboard = document.querySelectorAll(".btn-primary");  

// Connect HTML buttons to guesses
keyboard.forEach(button => {
    button.addEventListener("click", ()=> {
        let guessedLetter = button.textContent;  // Store the clicked button’s text (the guessed letter)
        makeGuess(guessedLetter); 
    });
});

function pickRandomWord(){
    let words = ["array", "food", "trial", "twenty"];
    let randomIndex = Math.floor(Math.random() * words.length); // Generate a random number between 0 and words.length - 1
    let pickedWord = words[randomIndex];   // Select the word at that random index
    return pickedWord;
}

function updateDisplayedWord(word, arr = [correctGuesses]){
    let splitWord = word.split(""); // Split word into letters, e.g. "food" → ["f","o","o","d"]
    let convertWord = splitWord.map(letter => {
        if (arr.includes(letter)) return letter;  
        else return "_";  
        // If the letter has been guessed, show it; otherwise show an underscore
    });
    let joinedWord = convertWord.join(" "); // Join the letters/underscores back with spaces (e.g. f _ o d)
    displayedWord.innerHTML = joinedWord;   // Display the current word progress on screen
    return joinedWord;
}

function verifyingString(str){
    let givenWord = chosenWord.split("");
    let sortingWord = givenWord.includes(str); // Check if the chosen word contains the guessed letter
    return sortingWord;
}

function makeGuess(letter){
    if(!letter) return; // Ignore empty guesses

    if(verifyingString(letter)){ // Check if guessed letter exists in the chosen word
        if(!correctGuesses.includes(letter)){
            correctGuesses.push(letter); // Add new correct letter if not guessed before
        } else {
            alert("You have already guessed that letter"); // Letter was guessed earlier
        } 
        console.log("Correct guess:", letter);
    }  else {
        alert("Wrong guess, try again!"); // Letter does not exist in the chosen word
    }
    updateDisplayedWord(chosenWord, correctGuesses); // Refresh the displayed word
    checkWin(); // Check if the player has won after each guess
}


function checkWin(){
    let currentWord =updateDisplayedWord(chosenWord, correctGuesses).replace(/\s/g, ''); // Remove spaces for win check
    if(currentWord === chosenWord){
        alert("Congratulations! You've guessed the word!");
        correctGuesses = []; // Reset for a new game
        chosenWord = pickRandomWord(); // Pick a new word
        updateDisplayedWord(chosenWord, correctGuesses); // Update display for new word
    }
}
// Example testing (not needed in final game)
// makeGuess();

// // Initial code before applying DRY principle    


// // DRY
// // let userLetter = "f";
// let correctGuesses = [];
// const displayedWord = document.getElementById("displayed-word");
// let chosenWord = pickRandomWord();
// let keyboard = document.querySelectorAll(".btn-primary");

// // Connect HTML buttons to guesses
// keyboard.forEach(button => {
//     button.addEventListener("click", ()=> {
//         let guessedLetter = button.textContent;  // The clicked button text content is stored in guessedLetter
//         makeGuess(guessedLetter); 
//     });
// });

// function pickRandomWord(){
//     let words = ["array", "food", "trial", "twenty"];
//     let randomIndex = Math.floor(Math.random() * words.length); // This line is to generate numbers from 0-3 (meaning the number of items in the words array)
//     let pickedWord = words[randomIndex];   // This line selects randomly a word from the words array (i.e words[1] which is food)
//     return pickedWord;

// }

// function updateDisplayedWord(word, arr=[correctGuesses]){
//     let splitWord = word.split(""); // As the word split implies to separate the word e.g food.split("") = f o o d
//     let convertWord = splitWord.map(letter => {
//         if (arr.includes(letter)) return letter
//         else return "_"
//         // This lines of code is where the entered letter is checked and confirmed if it meets any splinted letter and if not the word returns _
//     });
//     let joinedWord = convertWord.join(" "); // After confirming the letter this line joins the splinted letters back 
//     displayedWord.innerHTML = joinedWord; // This line displays the joined word for the user to see
//     return joinedWord;
// }

// function verifyingString(str){
//     let givenWord = chosenWord.split("");
//     let sortingWord = givenWord.includes(str);
//     // if (sortingWord){
        
//     //     console.log(givenWord.map(letter => letter = "o"))
//     // }
//     // return sortingWord;
//     return sortingWord
// }
// function makeGuess(letter){
//     if(verifyingString(letter)){ // This line checks if the letter the user enters is one among the word e.g is "a" part of "food"? 
//         if(!correctGuesses.includes(letter)){
//             // If yes and you haven't guessed it before then store it in correctGuesses
//             correctGuesses.push(letter); // add new correct letter
//         } else {
//             // else alert the user that the letter has been guessed
//             alert("You have already guessed that letter")
//         } 
//         console.log("Correct guess:", letter);
//     }  else {
//         // if the guessed letter is not among the given word then alert the user (wrong guess, try again!)
//         alert("Wrong guess, try again!")
//     }
//     updateDisplayedWord(chosenWord, correctGuesses); // always update display
// }



// // console.log(verifyingString("f") )
// // updateDisplayedWord(chosenWord, correctGuesses);
// // console.log(updateDisplayedWord(pickedWord, correctGuesses))
// // console.log(verifyingString(correctGuesses))
// makeGuess(keyboard);