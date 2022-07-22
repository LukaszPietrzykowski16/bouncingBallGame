const ball = document.querySelector('.ball')

export default class Block {
    constructor (blockElem) {
        this.blockElem = blockElem
    }



    rectBall() {
        return ball.getBoundingClientRect()
    }

    createBlock() {
        for(let i=0; i<10; i++) {
            const blockDiv = document.createElement("div");
            blockDiv.classList.add(`block${i}`)
            blockDiv.classList.add(`colors`)
            document.body.append(blockDiv)
        }
        
    }


    changeColor(blocks) {
        const rect = this.rectBall()
        if (blocks.some(r => isColision(r, rect))) {
            this.blockElem.remove()
        }
    }
}


function isColision(rect1, rect2){
    return (
        rect1.left < rect2.left + rect2.width &&
        rect1.left + rect1.width > rect2.left &&
        rect1.top < rect2.top + rect2.height &&
        rect1.height + rect1.top > rect2.top
      
     )
}
