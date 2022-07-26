import Ball from './ball.js'
import Block from './block.js'
import rem from './rem.js'
import change from './change.js'
const ball = new Ball(document.querySelector('.ball'))
const platform = document.querySelector('.platform')
const blocks1 = new Block(document.querySelector('.block1'))
const restart = document.querySelector('#restart')
const points = document.querySelector('#points')


let lastTime


window.addEventListener('DOMContentLoaded', () => {
    blocks1.createBlock()
    

    const newChange = change()


    
  
    function update(time){
        if (lastTime != null) {
            const delta = time - lastTime
            rem(newChange, ball.rect())
            ball.update(delta, newChange)
            
        }
        lastTime = time
        // calling our requasted animation frame
        window.requestAnimationFrame(update)
    
    }
    window.requestAnimationFrame(update)

})




// update our animation frame to lanuch a game



document.addEventListener('mousemove', e => {
    // this needs to be updated based on the css values but for this time we can don't touch it 
    platform.style.left = e.x + 'px'
})

restart.addEventListener('click', () => {
    window.location.reload();
})
