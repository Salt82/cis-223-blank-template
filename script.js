


let buttonMakker = document.createElement("BUTTON");

buttonMakker.innerText="Synthesize";

document.querySelector("p").appendChild(buttonMakker);

document.querySelector("p").style.textAlign = "center";

document.querySelector("p").style.position = "relative";

document.querySelector("p").style.top = "50vh";


function pressSpeak()
{
    let inputText = prompt("What text should be synthesised?")

    const utterThis = new SpeechSynthesisUtterance(inputText);

    speechSynthesis.speak(utterThis);
}

buttonMakker.addEventListener("click",pressSpeak);

function backgroundColor()
{
    document.body.style.background = "color";
}

