// Locomotive-Function
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
//======Hero-Page-Function========== 
function firstpageAnim(){
    var t1 = gsap.timeline();

    t1.from(".nav",{
        y: '-10',
        opacity:0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
       .to(".bounding-elem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        Stagger: .2,
    })
}
//======Follower-Circle-Function========== 
function smallCircal(){
    // difine default scale value 
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        // var xdiff = dets.clientX - xprev;
        // var ydiff = dets.clientY - yprev;
        // ====================================
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gasp.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        // console.log(xdiff , ydiff);
    });
}
smallCircal()

//======Mouse-Follower-Function========== 
function MouseFollower(){
    window.addEventListener("mousemove", function(dets) {
        // console.log(dets);
        this.document.querySelector(".mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

MouseFollower();
firstpageAnim(); 