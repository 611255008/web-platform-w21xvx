
const button = document.getElementById('button');
button.addEventListener('click', () => {
handleSubmitform();
});

export function handleSubmitform() {
const question1= document.querySelector('input[name="a"]:checked').value;

    const soreTxt = document.getElementById("score")

    if(question1 === "T-rex") {
        console.log("You Got It Right")
        soreTxt.innerHTML = "Q1 correct!"
    }
    else {
        console.log("Q1 incorect")
    }
    const question2= document.querySelector('input[name="b"]:checked').value;

    const soreTxt2 = document.getElementById("score")

    if(question2 === "800") {
        console.log("You Got It Right")
        soreTxt2.innerHTML = ("Q2 correct!")
    }
    else {
        console.log("Q2 incorect")
    }
}

    