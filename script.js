
let TimeLine = gsap.timeline()

TimeLine.from('.moving-txt h1',{
    transform: `translateX(${-100}%)`,
    duration:7,
    repeat:-1,
    ease:'none'
},"same")


TimeLine.from('.moving-txt2 h1',{
    transform: `translateX(${-100}%)`,
    duration:7,
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