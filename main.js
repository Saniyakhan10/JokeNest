let h2 = document.getElementById("setup");
let h3 = document.getElementById("punchline");

function getJokes() {
    fetch("saniya.json")
        .then((response) => response.json())
        .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const { setup, punchline } = data[randomIndex];
            h2.innerText = setup;
            h3.innerText = punchline;
            console.log(setup, punchline);
        })
        .catch((error) => {
            console.error("Error fetching the joke:", error);
        })
}