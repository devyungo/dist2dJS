function dist2d(x1,y1,x2,y2){
    return Math.sqrt(Math.abs(Math.pow(x2-x1, 2)) + Math.abs(Math.pow(y2-y1, 2))) // return a number based on the formula a² = b² + c², always return a positve number.
}

let containersize = 504 // pixels in grid
let quad = 1 //unit squares in grid
let quadsize = containersize / quad // size in pixels of 1 unit square

function distgridbased(x1,y1,x2,y2,quadsize){
  return dist2d(x1,y1,x2,y2) / quadsize // return the distance based on the unit square size
}
