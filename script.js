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
       .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        // Stagger: .2,
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
        // console.log(xdiff , ydiff);

        // xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        // yscale = gasp.utils.clamp(.8, 1.2, dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
        

        MouseFollower(xscale, yscale);

    });
}

//======Mouse-Follower-Function========== 
function MouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        // console.log(dets);
        this.document.querySelector(".mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`; //scale(${xscale}, ${yscale}) not working 
    })
}
smallCircal()
MouseFollower();
firstpageAnim(); 


//==============================================================================================================================================================
//  Teeno element ko sleect karo uska baad teeno par eek mousemove lagao jab mousemove ho to ye pata karo ki mouuse kaha par hai jiska matlab hai
//  mouse ki x and y position paata karo ab mouse ki x y position ka badle us image ko show karo and us image ko move karo move karte  waqt rotate karo, 
// and jaysa jaysa  mouse tez chale waise waise rotation bhi tez ho jayaa 
//==========================================================================


// document.querySelectorAll(".elem").forEach(function (elem) {
//     elem.addEventListener("mousemove", function (dets) {
//         gsap.to(elem.querySelector("img"),{
//             opacity: 1,
//             ease: power1,
//         })
//     });
// })



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });
    elem.addEventListener("mousemove", function (dets) {
        console.log(elem.querySelector("img"))
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            // top: diff,
            left: dets.clientX,
            // rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});
