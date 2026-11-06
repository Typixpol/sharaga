let x = [];
for (let i = 0; i < 3; i++) {
    x[i] = [];
    for (let e = 0; e < 3; e++) {
        console.log((i+e)/3 + " - " + (i+e)%3)
        x[i][e] = ((i + e) % 3) + 1;
    }
}
for (let i = x.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = x[i];
    x[i] = x[j];
    x[j] = temp;
}
for (let i = 2; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    for (let r = 0; r < 3; r++) {
        let temp = x[r][i];
        x[r][i] = x[r][j];
        x[r][j] = temp;
    }
}
console.table(x);
