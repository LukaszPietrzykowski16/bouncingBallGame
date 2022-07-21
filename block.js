export default class Block {
    constructor (blockElem) {
        this.blockElem = blockElem
    }

    rect() {
        return this.blockElem.getBoundingClientRect()
    }
}