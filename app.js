
function Calculate() {
    let one = document.getElementById("Money").value;
    let two = document.getElementById("Gold").value;
    let three = document.getElementById("Silver").value;
    for (let i = 0; i < Number(two.length); i++) {
        if (two[i] <= Number(two)) {
            two = 300000 * Number(two);
        }
    }
    for (let i = 0; i < Number(three.length); i++) {
        if (three[i] <= Number(three)) {
            three = 150000 * Number(three);
        }
    }
    let final = Number(one) + Number(two) + Number(three);
    document.getElementById("result").innerHTML = " Zakat Amount = " + Math.floor(final / 40);
}

