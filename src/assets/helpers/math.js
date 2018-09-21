export function randomIntValue(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function RandomArbValue(min, max) {
  return Math.random() * (max - min) + min
}
