let points = []
let mult 

let r1
let r2 
let g1
let g2
let b1
let b2

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30)
  angleMode(DEGREES)
  noiseDetail(5)

  let density = 50
  let space = width / density

  for(let x = 0; x < width; x+= space){
    for(let y = 0; y < height; y += space ){
      let p = createVector(x + random(-30, 10), y + random(-10, 10))
      points.push(p)
    }
  }

  shuffle(points, true)

  r1 = 25
  r2 = 100
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)

  mult = random(0.002, 0.01)
}

function draw() {
  noStroke()

  if(frameCount * 5 <= points.length){
    var max = frameCount * 5
  }else{
    var max = points.length
  }

  for (let i = 0; i < max; i++){

    let r = map(points[i].x, 0, width, r1, r2)
    // let g = map(points[i].y, 0, width, g1, g2)
    // let b = map(points[i].x, 0, width, b1, b2)
    let alpha = map(dist(width/2, height/2,points[i].x, points[i].y), 0, 350, 400, 0)
   
    fill(r,  alpha)

    let angel = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

    points[i].add(createVector(cos(angel), sin(angel)))

    if (dist(width/2, height/2,points[i].x, points[i].y)<150)
    ellipse(points[i].x, points[i].y, 1)
  }

 
}
 function mouseClicked(){
    saveCanvas('flowfield', 'png')
  }