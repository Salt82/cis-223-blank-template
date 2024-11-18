


let buttonMakker = document.createElement("BUTTON");






buttonMakker.innerText="Synthesize";

let textBox = document.createElement("textarea");

textBox.style.minWidth = "50vw";

textBox.style.minHeight = "10vh"

textBox.style.borderRadius = "20px";

textBox.style.padding = "10px";

textBox.style.resize = "horizontal";

textBox.type = "text";

textBox.id = "textBox";

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

    document.body.style.backgroundImage = "url('waveformgif.gif')";

    if (utterThis.addEventListener("end",backgroundColor));
}

buttonMakker.addEventListener("click",pressSpeak);








function backgroundColor()
{
    document.body.style.backgroundColor = "black"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundImage = "url('basicwaveform.jpg')";
    document.body.style.backgroundPositionY = "-10vh";
}

window.addEventListener("load",backgroundColor);
