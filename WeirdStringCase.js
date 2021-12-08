function toWeirdCase(string) {
  let arr = string.split("")
  return arr
    .map((str, index) => {
      if (index % 2 === 0) {
        return str.toUpperCase()
      }
      return str
    })
    .join("")
}
