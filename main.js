const canvas = document.getElementById("canvas"), g = canvas.getContext("2d");

let y=300, v=0, px=400, pt=200, s=0, j=false, p=false;

addEventListener("keydown", e => e.code=="Space" && (j=true));

(function loop(){
  g.clearRect(0,0,400,600);

  if(j) v=-12, j=false;
  v+=1; y+=v;

  px-=6;
  if(px<-50) px=400, pt=Math.random()*250+50, p=false;

  g.fillStyle="yellow";
  g.beginPath(); g.arc(80,y,12,0,7); g.fill();

  g.fillStyle="green";
  g.fillRect(px,0,50,pt);
  g.fillRect(px,pt+150,50,600);

  if(80>px&&80<px+50&&(y<pt||y>pt+150)||y<0||y>600)
    location.reload();

  if(!p&&px+50<80) s++, p=true;

  g.fillStyle="#333";
  g.font="24px Arial";
  g.fillText(s,10,30);

  requestAnimationFrame(loop);
})();
