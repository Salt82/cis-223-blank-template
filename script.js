
// creates the button creator class
class buttonCreator
{
    // creates a constuctor which takes buttonText as an argument
    constructor(buttonText)
    {
        // creates a button to the button variable
        this.button = document.createElement("BUTTON");

        // sets the button text content to the text passed
        this.button.textContent = buttonText;

        // for pressSpeak it binds the this keyword so that when the "this" key word is called in the listenToUser
        // function it can work properly 
        this.pressSpeak = this.pressSpeak.bind(this);

        // for ListenToUser it binds the this keyword so that when the "this" key word is called in the pressSpeak
        // function it can work properly 
        this.listenToUser = this.listenToUser.bind(this);

        // if the text passed is synthesize it will make it a talker button which calls the press speak function
        if(buttonText==="Synthesize")
        {
            this.button.addEventListener("click",this.pressSpeak);
        }

        // if its anything but synthesize it will call the litsen to user function
        else
        {

            this.button.addEventListener("click", this.listenToUser);
        }
    }

    // creates the pressSpeak function.
    pressSpeak()
    {
        // creates the input text variable and saves the value thats in the text box
        let inputText = document.getElementById("textBox").value;

        // creates a new utterance object which passes the input text
        const utterThis = new SpeechSynthesisUtterance(inputText);
        
        // for the utterThis variable it sets the valume to the volume of the current slider value
        utterThis.volume=volumeSlider.value;

        utterThis.pitch=pitchSlider.value;

        // tells the speech object to speak the text in the textbox
        speechSynthesis.speak(utterThis);
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


// created the talkerButton Object and passed the synthesize string
const talkerButton = new buttonCreator('Synthesize');




// created a variable called textBox and made it a textarea elemnent
let textBox = document.createElement("textarea");

// sets the minimum width of the box 50percent of the viewport width
textBox.style.minWidth = "50vw";

// sets the minimum height of the box 10percent of the viewport height
textBox.style.minHeight = "10vh"

// rounds the coners by 20 pixels
textBox.style.borderRadius = "20px";

// adds 10 pixels of padding so the text isnt coverd by the rounded corners
textBox.style.padding = "10px";

// only allows horizontal resizeing
textBox.style.resize = "horizontal";

// sets the type for our text box to type
textBox.type = "text";

// sets the id of the textbox to textbox
textBox.id = "textBox";

// creates placeholder text 
textBox.placeholder = "Text to be synthesized";

// creates a div element to space out our elements
let blankSpace = document.createElement("div");

// finds the p element in the html file and aligns its "text" to the center 
document.querySelector("p").style.textAlign = "center";

// aligns the "p" elements sets the position relative to the rest of the document in this case the center 
// since the text is in the center 
document.querySelector("p").style.position = "relative";

// sets it to 50percent of the viewport height down
document.querySelector("p").style.top = "50vh";






// creates the volumeslider variable and saves an input element
let volumeSlider  = document.createElement("input");

// sets the type to range or a "slider"
volumeSlider.type = "range"

// sets the minimum slider value as 0
volumeSlider.min = 0;

// sets the maximum slider value to 1
volumeSlider.max = 1;

// makes it so it only goes up by .1
volumeSlider.step = .1;

// creates another blank space
let blankSpace2 = document.createElement("div");




// creates the volumeslider variable and saves an input element
let pitchSlider  = document.createElement("input");

// sets the type to range or a "slider"
pitchSlider.type = "range"

// sets the minimum slider value as 0
pitchSlider.min = 0;

// sets the maximum slider value to 1
pitchSlider.max = 10;

// makes it so it only goes up by .1
pitchSlider.step = .1;

// creates another blank space
let blankSpace4 = document.createElement("div");




// creates a listener button passes the "want me to listen" text 
const listenerButton  = new buttonCreator('Want me to listen?');




// creates the background color function
function backgroundColor()
{
    document.body.style.backgroundColor = "black";
}

// when the site loads it will run the background color function
window.addEventListener("load",backgroundColor);



document.querySelector("p").style.accentColor = "white";

document.querySelector("p").style.color = "white"

// finds the p element and appends the text box
document.querySelector("p").appendChild(textBox);

// appends the blankspace or "div" element to the "p" element
document.querySelector("p").appendChild(blankSpace);

// appends the talker button to the "p" element
document.querySelector("p").appendChild(talkerButton.button);

// appends the listener button to the "p" element aswell without a "div" so they arent on the same line
document.querySelector("p").appendChild(listenerButton.button);

// appends another "div" to "p"
document.querySelector("p").appendChild(blankSpace2);

// appends a speaker emoji to "p" to act as an icon
document.querySelector("p").append("\u{1F508}");

// appends the volume slider to "p"
document.querySelector("p").appendChild(volumeSlider);

// appends another "div" to "p"
document.querySelector("p").appendChild(blankSpace4);

// appends a speaker emoji to "p" to act as an icon
document.querySelector("p").append("\u{21F3}");

// appends the volume slider to "p"
document.querySelector("p").appendChild(pitchSlider);