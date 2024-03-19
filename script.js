console.log('Hello!');
const button = document.getElementById('button');
button.addEventListener('click', () => {
handleSubmitform();
});

export function handleSubmitform() {
const question1= document.querySelector(
    'input[name="question1"]:checked'
    ).value;

    const soreTxt = document.getElementById("score")

    if(question1 === "T-rex") {
        console.log("You Got It Right")
        soreTxt.innerHTML = "That is correct!"
    }
    else {
        console.log("Sorry, try again.")
    }
}

    