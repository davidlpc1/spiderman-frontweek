document.addEventListener('DOMContentLoaded',() => {
    const timeline = new TimelineMax();
    
    timeline
        .fromTo(
            '.bg-loader', 1 , // Class, time In Seconds
            { width:'100%' }, // From
            { width:'0%',delay: 5,ease:Expo.easeInOut } // To
        )
        .fromTo(
            '.bg-video', 2 , // Class, time In Seconds
            { width:'0%',opacity: 0 }, // From
            { width:'100%',opacity: 1 ,ease:Expo.easeInOut},
            '-=1' // To
        )
        .fromTo(
            '.logo', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
        .fromTo(
            '.nav-list', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
        .fromTo(
            '.nav-social', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
        .fromTo(
            '.item-1', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
        .fromTo(
            '.item-2', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
        .fromTo(
            '.item-3', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
        .fromTo(
            '.item-4', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
        .fromTo(
            '.item-5', 0.7 , // Class, time In Seconds
            { y:-50,opacity: 0 }, // From
            { y:0,opacity: 1 ,ease:Expo.easeInOut},
            '-=0.5' // To
        )
})