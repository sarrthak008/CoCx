
let TimeLine = gsap.timeline()

TimeLine.from('.moving-txt h1',{
    transform: `translateX(${-100}%)`,
    duration:10,
    repeat:-1,
    ease:'none'
},"same")


TimeLine.from('.moving-txt2 h1',{
    transform: `translateX(${-100}%)`,
    duration:10,
    repeat:-1,
    ease:'none'
},"same")


//handling can image on scroll in first page...

 TimeLine.from("#can-img",{
    transform:`rotateX(-10deg)`,
    duration:10,
    scrollTrigger:{
        trigger:"#can-img",
        scroller:'body',
       // markers:'true',
        scrub:true,
        start:'top 50%',
        end:'top 10%'

    }
 },"same")


let TimeLine2 = gsap.timeline()

TimeLine2.from("#left span",{
    transform:`translateY(0%)`,
    duration:15,
    repeat:-1,
    ease:"none",
 },"same1")




 
TimeLine2.to("#right span",{
    transform:`translateY(0%)`,
    duration:15,
    repeat:-1,
    ease:"none",
 },"same1")


 
 