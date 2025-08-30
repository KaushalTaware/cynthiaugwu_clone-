

function firstPageAnim() {
  var t1 = gsap.timeline();

  // animate navbar
  t1.from("#nav", {
    y: -20,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut"
  })

  // animate bounding elements (text reveal)
  .to(".boundingelem", {
    y: 0,
    duration: 2,
    stagger: 0.2,
    ease: "expo.inOut",
    delay: -1 // overlap with previous animation
  })

  // animate footer (or any other element you want at end)
  .from("#footer", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: "expo.inOut"
  });
}

// run when page loads
window.addEventListener("load", firstPageAnim);

var timeout;
function cirlceEffect(){
  //define default scale
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (e) {
  clearTimeout(timeout);

  // calculate scale
  let xscale = gsap.utils.clamp(0.8, 1.2, (e.pageX - xprev) / 10);
  let yscale = gsap.utils.clamp(0.8, 1.2, (e.pageY - yprev) / 10);

  xprev = e.pageX;
  yprev = e.pageY;

  // move follower including scroll offset
  document.querySelector("#circle").style.transform =
    `translate(${e.pageX}px, ${e.pageY}px) scale(${xscale}, ${yscale})`;

  // reset scale after delay
  timeout = setTimeout(() => {
    document.querySelector("#circle").style.transform =
      `translate(${e.pageX}px, ${e.pageY}px) scale(1,1)`;
  }, 100);
});

}

cirlceEffect();





function circleMouseFollower(xscale,yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#circle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}

circleMouseFollower();







document.querySelectorAll(".elem")

.forEach(function(elem){

  var rotate = 0;
  var diffrot = 0;

   elem.addEventListener("mouseleave",function(details){
     
    
    gsap.to(elem.querySelector("img"),{
      opacity: 0,
      ease: Power3,
      duration: 0.5
    })
  })

  elem.addEventListener("mousemove",function(details){
      var diff = details.clientY - elem.getBoundingClientRect().top;
    diffrot=  details.clientX -rotate;
    rotate = details.clientX;
    
    gsap.to(elem.querySelector("img"),{
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate:gsap.utils.clamp(-20,20,diffrot)
    })
  })
})








