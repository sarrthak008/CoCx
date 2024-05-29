
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
    transform: `rotate(${-50}deg)`,
    duration:5,
    y:40,
    scrollTrigger:{
        trigger:"#can-img",
        scroller:'body',
        markers:'true',
        scrub:true,
        start:'top 80%',
        end:'top 0%'

    }
 },"same")