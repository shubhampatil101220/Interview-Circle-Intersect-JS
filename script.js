const circlecoordinates =[]
function circleIntersect(x0, y0, r0, x1, y1, r1) {
   return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}

function logIfIntersecting(){
  const firstCircle = circlecoordinates[0];
  const secondCircle = circlecoordinates[1];

  x1=firstCircle.xcordi;
  y1=firstCircle.ycordi;
  r1=firstCircle.radius;

  x2=secondCircle.xcordi;
  y2=secondCircle.ycordi;
  r2=secondCircle.radius;
   return circleIntersect(x1,y1,r1,x2,y2,r2);


}

document.addEventListener('click',(event)=>{
   
   debugger
   const totalCircles=document.querySelectorAll(".circle")
   if(totalCircles.length ===2)
   {
      totalCircles.forEach(circ => {
         document.body.removeChild(circ);
         circlecoordinates.shift();
      });
   }
   const xcordi=event.clientX;
   const ycordi=event.clientY;
   const radius =Math.floor(Math.random() *(200-50)+50);

   circlecoordinates.push({xcordi,ycordi,radius});
  

   console.log("x-cordinate=",xcordi,"y-cordinate=",ycordi,"radius",radius);
  


   const circle = document.createElement("div");
   circle.classList.add("circle");
   circle.style.top=(ycordi-radius)+"px";
   circle.style.left=(xcordi-radius)+"px";
   circle.style.height=radius*2+"px";
   circle.style.width=radius*2+"px";


   document.body.appendChild(circle);

 
   if(circlecoordinates.length ===2){
     const res= logIfIntersecting();
     console.log(res);
   }
})