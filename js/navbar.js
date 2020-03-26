function response() {


    var x = document.getElementById("responsive_navbar");
    var icon = document.getElementById('spin_arrow')
    time = 120
    
    if (x.className === "m_navbar m_navbar_animation" || x.className === "m_navbar" ) {
        x.className = "m_navbar responsive";
        x.animate([
            {bottom: '-24%' },
            {bottom: '0%' }
        ], { duration: time, fill:'forwards'})
        icon.animate([
            { transform: 'rotate(0deg)' }, 
            { transform: 'rotate(180deg)' } 
        ], {duration:time, fill:"forwards"})

        icon.animate([
            { transform: 'rotate(0deg)' }, 
            { transform: 'rotate(180deg)' } 
        ], {duration:time, fill:"forwards"})
    } else {   
        var timer = setTimeout(function () {
            x.className = "m_navbar";
            }, time);
        x.animate([
            {bottom: '0%' },
            {bottom: '-29%' }
        ], { duration: time+10})
        icon.animate([
            { transform: 'rotate(180deg)' },
            { transform: 'rotate(270deg)' } ,
            { transform: 'rotate(360deg)' } 
        ], {duration:time, fill:"forwards"})
    }
}