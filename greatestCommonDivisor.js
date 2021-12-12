function gcd(a, b) {
  let gcd = 0
  let min = Math.min(a, b)
  if (a % min == 0 && b % min == 0) {
    return min
  }
  for (let i = 1; i <= min / 2; i++) {
    if (a % i == 0 && b % i == 0 && i > gcd) {
      gcd = i
    }
  }
  return gcd
}
