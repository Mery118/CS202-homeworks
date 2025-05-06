let birinci = prompt("Birinci ededi daxil edin:");
let ikinci = prompt("Ikinci ededi daxil edin (quvvet):");


birinci = Number(birinci);
ikinci = Number(ikinci);


function quvvetYukselt(a, b) {
    return a ** b;
}


let netice = quvvetYukselt(birinci, ikinci);
alert(`${birinci} ^ ${ikinci} = ${netice}`);