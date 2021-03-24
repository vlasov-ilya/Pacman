const pacMen = []; // This array holds all the pacmen


// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {

  let velocity = setToRandom(10); 
  let position = setToRandom(200);
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;
  
// set position
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  newimg.height = 100;

  //add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {   
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // detect collision with all walls and make pacman bounce
  let wndWidth = window.innerWidth;
  let wndHeight = window.innerHeight;

    if((item.position.x + item.velocity.x + item.newimg.width >= wndWidth) || (item.position.x < 0)){
      item.velocity.x =  - item.velocity.x;
    } 
    if ((item.position.y + item.velocity.y + item.newimg.height >= wndHeight) || (item.position.y  < 0)){
      item.velocity.y =  - item.velocity.y;
    }
  
}

    

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
