const slider = document.querySelector(',item')

let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', () => {
  isDown = true
})
slider.addEventListener('mouseleave', () => {
  isDown = false
})
slider.addEventListener('mouseup', () => {})
slider.addEventListener('mousemove', () => {})
