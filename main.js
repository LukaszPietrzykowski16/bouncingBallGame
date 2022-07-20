import Ball from './Ball.js'

const ball = new Ball(document.querySelector('.ball'))

let lastTime
const platform = document.querySelector('.platform')
// update our animation frame to lanuch a game
function update(time){
    if (lastTime != null) {
        const delta = time - lastTime
        //ball.update(delta)
        ball.update(delta)
    }
    lastTime = time
    // calling our requasted animation frame
    window.requestAnimationFrame(update)

}
    
    






/*
const platformStyle = getComputedStyle(platform).getPropertyValue("--platfposit")
console.log(platformStyle)
*/
document.addEventListener('mousemove', e => {
    // this needs to be updated based on the css values but for this time we can don't touch it 
    platform.style.left = e.x + 'px'
})

window.requestAnimationFrame(update)