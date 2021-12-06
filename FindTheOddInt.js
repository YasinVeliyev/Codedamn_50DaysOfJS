function findOdd(arr) {
  let map = new Map()
  for (let i of arr) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1)
    } else {
      map.set(i, 1)
    }
  }
  for (let i of map) {
    if (i[1] % 2 === 1) {
      return i[0]
    }
  }
}
