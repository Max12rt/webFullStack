function checkDivision(start = 1, end = 60){
    console.log(`*** Range is ${start} - ${end} checkDivision(${start},${end}) ***`);
    for (let i = start; i <= end; i++) {
        let info = `The number ${i} -`;

        if (i % 2 === 0)
            info += " is divisible by 2";

        if (i % 3 === 0)
            info += (info.endsWith("2") ? "," : "") + " is divisible by 3";

        if (i % 10 === 0)
            info += (info.endsWith("2") || info.endsWith("3") ? "," : "") + " is divisible by 10";

        console.log(info);
    }
}

module.exports = { checkDivision };
