const fizzbuzz = (x, y) => {
    let xc = 0;
    let yc = 0;
    for (let i = 1; i <= 100; i++) {
        let cout_s = "";
        xc++;
        yc++;
        if (i % x == 0) cout_s += "Foo";
        if (i % y == 0) cout_s += "Bar";
        if (cout_s === "") cout_s = i;
        console.log(cout_s);
    }
}

module.exports = fizzbuzz;