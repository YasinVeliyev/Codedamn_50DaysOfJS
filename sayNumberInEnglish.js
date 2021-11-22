let numbers = new Map([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "13"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
    [60, "sixty"],
    [70, "seventy"],
    [80, "eighty"],
    [90, "ninety"],
    [100, "hundred"],
    [1000, "thousand"],
    [1000000, "million"],
    [1000000000, "billion"],
]);
let spell = (num) => {
    let spell = [];
    let arr = num[0]
        .split("")
        .reverse()
        .map((num, i) => [num, Math.pow(10, i)]);
    let index = 0;
    if (arr.length === 1) {
        spell.push(numbers.get(arr[index][0] * arr[index][1]));
        index++;
    } else if (numbers.has(parseInt(arr[1][0] + arr[0][0]))) {
        spell.push(numbers.get(parseInt(arr[1][0] + arr[0][0])));
        index = 2;
    }

    while (index < arr.length) {
        if (numbers.has(arr[index][0] * arr[index][1])) {
            spell.push(numbers.get(arr[index][0] * arr[index][1]));
            index++;
        } else {
            spell.push(numbers.get(parseInt(arr[index][0])) + " " + numbers.get(arr[index][1]));
            index++;
        }
    }
    spell.reverse();
    if (spell.length === 3) {
        return spell[0] + " " + spell[1] + "-" + spell[2];
    }
    return spell.join(" ");
};

const sayNumberInEnglish = (n) => {
    if (n < 0 || n > 999999999999) {
        return "Out of range";
    }
    let arr = n.toString().split("").reverse();
    let numArr = [];
    for (let i = 0; i < arr.length; i += 3) {
        numArr.push([
            arr
                .slice(i, i + 3)
                .reverse()
                .join(""),
            Math.pow(10, i),
        ]);
    }
    let returnArr = numArr.map((num) => {
        if (num[1] == 1) {
            return spell(num);
        } else {
            return spell(num) + " " + numbers.get(num[1]);
        }
    });

    return returnArr.reverse().join(" ");
};

console.log(`1323 in english is: ${sayNumberInEnglish(1323)}`);
