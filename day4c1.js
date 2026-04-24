let secret = Math.floor(Math.random() *10) +1;
let count = 0;

function checkGuess() {
    let btn = document.getElementById("guessBtn");
    if (btn.disabled) return;

    let input = document.getElementById("guessInput").value;
    let guess = Number(input);

    count++;

    if (guess === secret) {
        document.getElementById("result").innerText = "zuv baina"
        let btn = document.getElementById("guessBtn");
        btn.disabled = true;
    } else if (guess < secret){
        document.getElementById("result").innerText = "arai baga baina"
    } else {
        document.getElementById("result").innerText = "arai ih baina"
    } if (count === 5) {
        document.getElementById("result").innerText = "hojigdloo"
        let btn = document.getElementById("guessBtn");
        btn.disabled = true;
    }
    document.getElementById("count").innerText = "orldlogo" + count;
}

function restartGame() {
    secret = Math.floor(Math.random() *10) +1;
    count = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("count").innerText = "";
    document.getElementById("guessInput").value = "";
        let btn = document.getElementById("guessBtn");
        btn.disabled = false;
}
