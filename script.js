
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

 let img = document.querySelector("#can-img")
 let body = document.querySelector("#page1") 