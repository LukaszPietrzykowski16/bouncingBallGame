import Ball from './Ball.js'

let lastTime
const platform = document.querySelector('.platform')
// update our animation frame to lanuch a game
function update(time){
    const delta = time - lastTime
    lastTime = time
    window.requestAnimationFrame(update)
}

// calling our requasted animation frame
window.requestAnimationFrame(update)

/*
const platformStyle = getComputedStyle(platform).getPropertyValue("--platfposit")
console.log(platformStyle)
*/
document.addEventListener('mousemove', e => {
    // this needs to be updated based on the css values but for this time we can don't touch it 
    console.log(e.x)
    platform.style.left = e.x + 'px'
})