const containerEl = document.querySelector(".container");

const careers = ["student", "Web developer", "Software Engineer", "Innovator", "Entrepreneur"];


let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;// moves on to the next index .
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;//NOTE: use backticks to interpolate variables.
    if (characterIndex=== careers[careerIndex].length){
        careerIndex++;//moves on to the next item in the array 
        characterIndex = 0;
    }
    setTimeout(updateText,350);

};


