const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`masukan total belanja (RP): `, (input) => {
    let totalBelanja = parseFloat(input);
    let diskon = 0;
    
    if (totalBelanja >= 250000) {
        diskon = totalBelanja * 0.10;
    } else if (totalBelanja >= 100000) {
        diskon = totalBelanja * 0.05;
    } else if (totalBelanja >= 50000) {
        diskon = totalBelanja * 0.03;
    } else {
        diskon = 0;
    }
    
    let totalBayar = totalBelanja - diskon;
    
    console.log(`Total belanja: RP ${totalBelanja}`);
    console.log(`Diskon: RP ${diskon}`);
    console.log(`Total bayar: RP ${totalBayar}`);
    
    rl.close();
});