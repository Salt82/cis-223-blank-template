let buttonMakker = document.createElement("BUTTON");

buttonMakker.innerText="Synthesize";

document.querySelector("p").appendChild(buttonMakker);

function pressSpeak()
{
    let inputText = prompt("What text should be synthesised?")

    const utterThis = new SpeechSynthesisUtterance(inputText);

    speechSynthesis.speak(utterThis);
}

buttonMakker.addEventListener("click",pressSpeak);