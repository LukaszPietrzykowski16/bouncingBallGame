import Ball from './ball.js'
const ball = new Ball(document.querySelector('.ball'))

const blocks2Ball = new Ball(document.querySelector('.block2'))

const arr = []

function changeColor(blocks) {
    const rect = this.rectBall()
    if (blocks.some(r => isColision(r, rect))) {
        this.blockElem.remove()
    }
}


function change() {
    return changeColor()
}


export default change