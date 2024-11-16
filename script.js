


let buttonMakker = document.createElement("BUTTON");

buttonMakker.innerText="Synthesize";


let textBox = document.createElement("input");

textBox.type = "text";

textBox.placeholder = "Text to be synthesized";

document.querySelector("p").appendChild(textBox);




let blankSpace = document.createElement("div");

document.querySelector("p").appendChild(blankSpace);




document.querySelector("p").appendChild(buttonMakker);






document.querySelector("p").style.textAlign = "center";

document.querySelector("p").style.position = "relative";

document.querySelector("p").style.top = "50vh";


function pressSpeak()
{
    let inputText = document.getElementById("textBox").value;

    const utterThis = new SpeechSynthesisUtterance(inputText);

    speechSynthesis.speak(utterThis);
}

buttonMakker.addEventListener("click",pressSpeak);

function backgroundColor()
{
    document.body.style.background = "beige";
}

window.addEventListener("load",backgroundColor);
