const button = document.querySelector("#button");
const jokeContainer = document.querySelector("#joke");
const URL = "https://v2.jokeapi.dev/joke/Any"

let getJoke = () => {
    fetch(URL)
    .then(data => data.json())
    .then(item => {
        if(item.type === "single") { //processing
            jokeContainer.textContent = `${item.joke}` //output
        } else { //processing
            jokeContainer.textContent = `Setup: ${item.setup} Punchline:  ${item.delivery}`; //output
        } 
    })
}

button.addEventListener("click", getJoke); // input
