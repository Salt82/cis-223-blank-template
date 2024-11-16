let buttonMakker = document.createElement("BUTTON");

buttonMakker.innerText="Synthesize";

document.body.appendChild(buttonMakker);

function pressSpeak()
{
    let inputText = prompt("What text should be synthesised?")

    const utterThis = new SpeechSynthesisUtterance(inputText);

    speechSynthesis.speak(utterThis);
}