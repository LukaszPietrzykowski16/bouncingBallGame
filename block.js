const ball = document.querySelector('.ball')

export default class Block {
    constructor (blockElem) {
        this.blockElem = blockElem
    }

    rectBlocks() {
        return this.blockElem.getBoundingClientRect()
    }


    rectBall() {
        return ball.getBoundingClientRect()
    }

    // creating blocks
    createBlock() {
        for(let i=0; i<43; i++) {
            const blockDiv = document.createElement("div");
            blockDiv.classList.add(`block${i}`)
            // i can change style later
            blockDiv.style.backgroundColor = 'rgb(51, 114, 136)' 
            blockDiv.style.width = '10vw'
            blockDiv.style.height = '4vh'
            blockDiv.style.margin = '10px'
            document.querySelector('main').append(blockDiv)
        }
        
    }

    // removing 
    changeColor(blocks) {
        const rect = this.rectBall()
        if (blocks.some(r => isColision(r, rect))) {
            console.log(this.blockElem)
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
