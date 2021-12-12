function gcd(a, b) {
  let gcd = 0
  if (a % b == 0) {
    return b
  }
  if (b % a == 0) {
    return a
  }
  for (let i = 1; i <= Math.min(a, b) / 2; i++) {
    if (a % i == 0 && b % i == 0 && i > gcd) {
      gcd = i
    }
  }
  return gcd
}
