function expandedForm(num) {
    return num
        .toString()
        .split("")
        .map((num, index, arr) => num.padEnd(arr.length - index, "0"))
        .join("+");
}
