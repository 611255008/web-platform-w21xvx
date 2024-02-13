console.log('Hello!');
const button = document.getElementById('button');
button.addEventListener('click', () => {
handleSubmitform();
});

export function handleSubmitform() {
const question1= document.querySelector(
    'input [name= "question"]:checked'
    ).value;
    console.log(question1)

}
