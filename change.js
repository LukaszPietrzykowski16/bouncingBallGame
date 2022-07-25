import Ball from './ball.js'
const ball = new Ball(document.querySelector('.ball'))

const blocks2Ball = new Ball(document.querySelector('.block2'))





function change(allBlocks) {
     let bal = ball.rect()
     console.log(allBlocks)
    /*
     if (allBlocks.some(r => isColision(r, bal))) {
         console.log(r)
     }
 */
    
}


function isColision(rect1, rect2){
     return (
         rect1.left < rect2.left + rect2.width &&
         rect1.left + rect1.width > rect2.left &&
         rect1.top < rect2.top + rect2.height &&
         rect1.height + rect1.top > rect2.top
       
      )
 }


export default change