console.log('Hello!');
const button = document.getElementById('button');
button.addEventListener('click', () => {
handleSubmitform();
});

export function handleSubmitform() {
const question1= document.querySelector(
    'input [name= "question"]:checked'
    ).value;
    
    if(question1 === "T-rex") {
        console.log("You Got It Right")
    }
    else {
        console.log("Sorry, try again.")
    }
}

    