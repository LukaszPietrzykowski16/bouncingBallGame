let i = getRandomInt(0, 255);
let i2 = getRandomInt(0, 255);
let i3 = getRandomInt(0, 255);
let i4 = getRandomInt(0, 255);
let i5 = getRandomInt(0, 255);
let i6 = getRandomInt(0, 255);

function background() {
   
    

    
    i++
    i2++
    i3++
    i4++
    i5++
    i6++ 
   if (i === 255) {
    i = 0 
   } 
   if (i2 === 255) {
    i2 = 0 
   }
   if (i3 === 255) {
    i3 = 0 
   }
   if (i4 === 255) {
    i4 = 0 
   }
   if (i5 === 255) {
    i5 = 0 
   }
   if (i6 === 255) {
    i6 = 0 
   }
     
    console.log(i)
    document.body.style.setProperty('--firstValue', i)
    document.body.style.setProperty('--secondValue', i2)
    document.body.style.setProperty('--thirdValue', i3)
    document.body.style.setProperty('--forthValue', i4)
    document.body.style.setProperty('--fifthValue', i5)
    document.body.style.setProperty('--sixthValue', i6)
    
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


export default background