let secret = Math.floor(math.random()* 10) + 1;
let count = 0;

while (true) {
    let guess = prompt("too taa nuu");
    guess = Number(guess);

    count++;

    if(guess == secret) {
        console.log("zuv baina");
        break;
    } else if (guess < secret) {
        console.log("arai baga baina");
    } else {
        console.log("arai ih baina");
    }
}

console.log("niit orldlogo",count);