function accum(s) {
    return s
        .split("")
        .map((str, index) => str.toUpperCase().padEnd(index + 1, str.toLowerCase()))
        .join("-");
}
