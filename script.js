const c = document.getElementById('heart');
const ctx = c.getContext('2d');
c.width = innerWidth;
c.height = innerHeight;
let t = 0;
function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  for(let i=0;i<300;i++){
    let ang = Math.PI*2*Math.random();
    let r = 16*(Math.sin(ang)**3);
    let y = -13*Math.cos(ang)+5*Math.cos(2*ang)+2*Math.cos(3*ang)+Math.cos(4*ang);
    let x = r*10, yy = y*10;
    let s = 1.3+0.6*Math.sin(t+i/50);
    ctx.beginPath();
    ctx.fillStyle = `rgba(130,160,255,${0.5+0.5*Math.sin(t+i/40)})`;
    ctx.arc(c.width/2+x*s, c.height/2+yy*s, 2, 0, Math.PI*2);
    ctx.fill();
  }
  t += 0.04;
  requestAnimationFrame(draw);
}
draw();
