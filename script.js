let sozlar = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

let n_bor = [];
let n_yoq = [];

for (let soz of sozlar) {
    if (soz.toLowerCase().includes('n')) {
        n_bor.push(soz);
    } else {
        n_yoq.push(soz);
    }
}

console.log(n_bor, "'n' harfi ishtirok etgan so'zlar");
console.log(n_yoq, "'n' harfi ishtirok etmagan so'zlar");