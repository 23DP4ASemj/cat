let clickCount = 0;
function incrementClick() {
    clickCount++;
    document.getElementById("click-count").textContent = clickCount;
}

document.addEventListener("DOMContentLoaded", () => {
    const factElement = document.getElementById("fact");
    const button = document.getElementById("new-fact");

    async function fetchCatFact() {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            factElement.textContent = data.fact;
        } catch (error) {
            factElement.textContent = "error";
        }
    }

    button.addEventListener("click", fetchCatFact);


    fetchCatFact();
});

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random-number").textContent = `Nejaušs skaitlis: ${randomNumber}`;
}