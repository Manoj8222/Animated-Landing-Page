var tl = gsap.timeline()
tl.from("#nav img,#nav h3,#nav h4, #nav button",{
    y:-100,
    duration:0.5,
    delay:0.4,
    opacity:0,
    stagger:0.2
})

tl.from("#main h1",{
    x:-100,
    opacity:0,
    stagger:0.2
})
tl.from("#left-left-img,#bottom-left-img,#right-top-img,#bottom-right-img",{
    // delay:1.5,
    scale:0,
    opacity:0,
    stagger:0.2
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:30,
    duration:0.7,
    repeat:-1 ,
    yoyo:true
})
