function nameToInitials(name) {
  // name = "foulen ben foulen ben allen"
  return name
    .split(' ') // ["foulen", "ben", "foulen", "ben", "allen"]
    .map(el => el[0]) // ["f", "b", "f", "b", "a"]
    .join('') // "fbfba"
    .slice(0, 2) // "fb"
    .toUpperCase() // "FB"
}

export default nameToInitials
