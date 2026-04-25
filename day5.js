let secret = Math.floor(Math.random() * 10) + 1;
let count = 0;

function checkGuess() {
    let resultEl = document.getElementById("result");
    let btn = document.getElementById("guessBtn");
    if (btn.disabled) return;

    let input = document.getElementById("guessInput").value;
    let guess = Number(input);

    if (!input) {
        resultEl.innerText = "too oruulna uu";
        return;
    }

    if (guess < 1 || guess > 10) {
        resultEl.innerText = "1-10 hoorond too oruulna uu";
        return;
    }

    count++;

    if (guess === secret) {
        resultEl.innerText = "zuv baina";
        resultEl.style.color = "green";
        btn.disabled = true;
    } else if (guess < secret) {
        resultEl.innerText = "arai baga baina";
        resultEl.style.color = "red";
    } else {
        resultEl.innerText = "arai ih baina";
        resultEl.style.color = "red";
    }

    if (count === 5) {
        resultEl.innerText = "ta hojigdloo, too ni " + secret + " baisan";
        btn.disabled = true;
    }

    document.getElementById("count").innerText = "Oroldlogo: " + count;
    document.getElementById("guessInput").value = "";
}

function restartGame() {
    secret = Math.floor(Math.random() * 10) + 1;
    count = 0;

    document.getElementById("result").innerText = "";
    document.getElementById("count").innerText = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();

    let btn = document.getElementById("guessBtn");
    btn.disabled = false;
}