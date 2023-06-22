// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.getElementById('speakButton');
let textToSpeak = 'This is the text string that you will generate with your script';
// Create phrase buttons DOM
const buttonPhrase = document.querySelectorAll('button');
// Create reset button DOM
const resetButton = document.getElementById('resetButton');
// Create generate a random story button DOM
const storyButton = document.getElementById('storyButton');

// Create a paragraph DOM element
const paragraph = document.createElement('p');
document.body.appendChild(paragraph);

// Create five arrays of words to choose from each button
const subjects = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']; 
/* Functions
-------------------------------------------------- */
// Generate a random word from each array when the button is clicked
function generateWord(buttonTarget) {
	switch(buttonTarget) {
		case 0: textToSpeak += subjects[(Math.floor(Math.random() * subjects.length))] + ' ';
			break;
		case 1: textToSpeak += verbs[(Math.floor(Math.random() * verbs.length))] + ' ';
			break;
		case 2: textToSpeak += adjectives[(Math.floor(Math.random() * adjectives.length))] + ' ';
			break;
		case 3: textToSpeak += nouns[(Math.floor(Math.random() * nouns.length))] + ' ';
			break;
		case 4: textToSpeak += places[(Math.floor(Math.random() * places.length))] + ' ';
			break;
	}
}

// Generate a story via click the storyButton
function generateStory() {
	reset();
	for(let i = 0; i < buttonPhrase.length - 2; i++) {
		generateWord(i);
	}
}

// reset function, clears the textToSpeak content
function reset() {
	textToSpeak = '';
}

// show the textToSpeak content in the paragraph
function showText() {
	paragraph.textContent = textToSpeak;
}

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
// itterates through each button except the speak button
for (let i = 0; i < buttonPhrase.length - 1; i++) {
	// Add a click event listener except the speak button
	if (i !== 5) { 
	  buttonPhrase[i].addEventListener('click', function() {
		generateWord(i), showText();
	  });
	}
  }
	// speakButton --- Add a click event listener
speakButton.addEventListener('click', function () {
	speakNow(textToSpeak), showText();
});

// storyButton --- Add a click event listener
storyButton.addEventListener('click', function() {
	generateStory(), showText();
})

// resetButton --- Add a click event listener
resetButton.addEventListener('click', function() {
	reset(), showText();
});

