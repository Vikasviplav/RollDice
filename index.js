function rollDice() {
    let m1 = document.getElementById("1");
    let m2 = document.getElementById("2");
    let m3 = document.getElementById("3");

    let d1 = document.getElementById("dice1");
    let d2 = document.getElementById("dice2");
    let d3 = document.getElementById("dice3");

    m1.innerText = Math.floor((Math.random() * 6) + 1);
    m2.innerText = Math.floor((Math.random() * 6) + 1);
    m3.innerText = Math.floor((Math.random() * 6) + 1);

    let a = m1.innerText;
    let b = m2.innerText;
    let c = m3.innerText;

    let winner = 0
    if (a > b && a > c) {
        d1.style.backgroundColor = "green";
        winner = 1

    } else if (b > c && b > a) {
        d2.style.backgroundColor = "green";
        winner = 2
    } else {
        d3.style.backgroundColor = "green";
        winner = 3
    }

    if (a < b && a < c) {
        d1.style.backgroundColor = "red";
    } else if (b < c && b < a) {
        d2.style.backgroundColor = "red";
    } else {
        d3.style.backgroundColor = "red";
    }

    if ((a > b && a < c) || (a < b && a > c)) {
        d1.style.backgroundColor = "yellow";
    } else if ((b > c && b < a) || (b < c && b > a)) {
        d2.style.backgroundColor = "yellow";
    } else {
        d3.style.backgroundColor = "yellow";
    }


    if (a == b && a == c) {
        d1.style.backgroundColor = "blue";
        d2.style.backgroundColor = "blue";
        d3.style.backgroundColor = "blue";
        winner = "all"
    } else if (a == b) {
        d1.style.backgroundColor = "blue";
        d2.style.backgroundColor = "blue";
        if (a < c) {
            d3.style.backgroundColor = "green";
            winner = 3
        } else {
            winner = "both 1 & 2"
        }
    } else if (a == c) {
        d1.style.backgroundColor = "blue";
        d3.style.backgroundColor = "blue";
        if (b > a) {
            d2.style.backgroundColor = "green";
            winner = 2
        } else {
            winner = "both 1 & 3"
        }

    } else if (b == c) {
        if (a > b) {
            d1.style.backgroundColor = "green";
            winner = 1
        } else {
            winner = "both 2 & 3"
        }
        d2.style.backgroundColor = "blue";
        d3.style.backgroundColor = "blue";
    }

    let h1 = document.getElementById("winner")
    h1.innerText = `Member ${winner} is winner`

}