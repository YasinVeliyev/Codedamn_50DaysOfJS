const valid = (string) => {
    let arr = string
        .replace(/\s/g, "")
        .split("")
        .map((num, index) => {
            if (index % 2 === 0) {
                if (num * 2 > 9) {
                    return num * 2 - 9;
                }
                return num * 2;
            }
            return +num;
        });

    return arr.reduce((a, b) => a + b) % 10 === 0;
};
