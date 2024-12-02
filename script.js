

class buttonCreator
{
    constructor(buttonText)
    {
        this.button = document.createElement("BUTTON");

        this.button.textContent = buttonText;

        this.pressSpeak = this.pressSpeak.bind(this);

        this.listenToUser = this.listenToUser.bind(this);

        if(buttonText==="Synthesize")
        {
            this.button.addEventListener("click",this.pressSpeak);
        }

        else
        {

            this.button.addEventListener("click", this.listenToUser);
        }
    }

    pressSpeak()
    {
        let inputText = document.getElementById("textBox").value;

        const utterThis = new SpeechSynthesisUtterance(inputText);

        utterThis.volume=volumeSlider.value;

        speechSynthesis.speak(utterThis);

        if (utterThis.addEventListener("end",backgroundColor));
    }

    // Creates a recognition object that listens to what the user has to say. Takes what the user says to is and
    // prints it into the text box, it then calls the pressSpeak function which makes it speak.

    // Code Provided By Mozilla Developer Network!
    listenToUser() 
    {

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        const diagnostic = document.querySelector(".output");

        // starts starts the recognition object, which allows it to listen to what the user is saying
        recognition.start();


        // on the event that the recognition object understands the user it then creates the event function 
        recognition.onresult = (event) => 
            {

                // saves the recognized text
                const speechResult = event.results[0][0].transcript; 
            
                // takes the users speech and places it in the text box
                textBox.value = speechResult;

                setTimeout(this.pressSpeak, 2000);
            };

            
            
    }
}









const talkerButton = new buttonCreator('Synthesize');

let textBox = document.createElement("textarea");

textBox.style.minWidth = "50vw";

textBox.style.minHeight = "10vh"

textBox.style.borderRadius = "20px";

textBox.style.padding = "10px";

textBox.style.resize = "horizontal";

textBox.type = "text";

textBox.id = "textBox";

textBox.placeholder = "Text to be synthesized";

let blankSpace = document.createElement("div");








document.querySelector("p").style.textAlign = "center";

document.querySelector("p").style.position = "relative";

document.querySelector("p").style.top = "50vh";







let volumeSlider  = document.createElement("input");

volumeSlider.type = "range"

volumeSlider.min = 0;

volumeSlider.max = 1;

volumeSlider.step = .1;

let blankSpace2 = document.createElement("div");


const listenerButton  = new buttonCreator('Want me to listen?');



function backgroundColor()
{
    document.body.style.backgroundColor = "black";
}

window.addEventListener("load",backgroundColor);




document.querySelector("p").appendChild(textBox);

document.querySelector("p").appendChild(blankSpace);

document.querySelector("p").appendChild(talkerButton.button);

document.querySelector("p").appendChild(listenerButton.button);

document.querySelector("p").appendChild(blankSpace2);

document.querySelector("p").append("\u{1F508}");

document.querySelector("p").appendChild(volumeSlider);