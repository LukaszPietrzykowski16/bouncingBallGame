import Ball from './ball.js'
import Block from './block.js'

const ball = new Ball(document.querySelector('.ball'))
const blocks1Ball = new Ball(document.querySelector('.block1'))
const blocks2Ball = new Ball(document.querySelector('.block2'))
const blocks1 = new Block(document.querySelector('.block1'))
const blocks2 = new Block(document.querySelector('.block2'))


let lastTime
const platform = document.querySelector('.platform')


// update our animation frame to lanuch a game
function update(time){
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [blocks1Ball.rect(), blocks2Ball.rect()])
        blocks2.changeColor([blocks1Ball.rect(), blocks2Ball.rect()])
        blocks1.changeColor([blocks1Ball.rect(), blocks2Ball.rect()])
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