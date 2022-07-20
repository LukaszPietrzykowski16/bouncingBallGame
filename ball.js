const INIITAL_VELOCITY = .039
const VELOCITY_INCREASE = 0.000000000001
const platform = document.querySelector('.platform')

export default class Ball {
    // constructor of the ball
    constructor (ballElem){
        this.ballElem = ballElem
        this.default()
    }
    // getting our x value of ball
    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }
    // setting our x value of ball
    set x(value) {
        this.ballElem.style.setProperty('--x', value)
    }
    // getting our y value of ball
    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }
    // getting our y value of ball
    set y(value) {
        this.ballElem.style.setProperty('--y', value)
    }

    rect(){
        // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        return this.ballElem.getBoundingClientRect()
    }

    rectPlatform(){
        return platform.getBoundingClientRect()
    }

    // default position of the ball
    default(){
        // setting up basic x and y we can delete this later i think 
        this.x = 50
        this.y = 50
       // setting up basic direction we can delete this later i think 
        this.direction = { x: 0, y: 0}
        // math.abs to always have value > 0, randomNumberBetween to make more random ways of setting up the way of ball behave
        while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            // updating with sin or cos for some heading random number to go for 4 diffrent direction. for exmaple if we do only math.cos 2 times it will go only in 2 diffrent directions
            this.direction = { x: Math.cos(heading), y: Math.sin(heading)}
            
        }
        this.velocity = INIITAL_VELOCITY
       
    }

    // updating position
    update(delta, blocks) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()
        const rectPlatform = this.rectPlatform()

        // top bouncing down
        if (rect.top <= 0) {
            this.direction.y *= -1
        }
        // left and right bouncing down
        if (rect.right <= 0 || rect.left >= window.innerWidth) {
            this.direction.x *= -1
        }

        // colision with our platform 
        if (rect.left < rectPlatform.left + rectPlatform.width &&
            rect.left + rect.width > rectPlatform.left &&
            rect.top < rectPlatform.top + rectPlatform.height &&
            rect.height + rect.top > rectPlatform.top) {
            this.direction.y *= -1
         }
         /*
        if (blocks.some(b => isColision(b, rect))) {
            console.log(b)
        }
      */
    }
   
}

// it returns random number min = 0, max = 2
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}

function isColision(exactBlock, exactBall){
    return (
       exactBlock.left <= exactBall.right &&
       exactBlock.right <= exactBall.left &&
       exactBlock.top <= exactBall.bottom &&
       exactBlock.bottom <= exactBall.top 
    )
}