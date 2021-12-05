function spinWords(string) {
  return string
    .split(" ")
    .map(string => {
      if (string.length >= 5) {
        return string
          .split("")
          .reverse()
          .join("")
      }
      return string
    })
    .join(" ")
}
