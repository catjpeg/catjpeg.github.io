var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = 'https://cdn.discordapp.com/attachments/922512040441053197/1024387557372473364/kimetsu1.jpg';
backgrounds[1] = 'https://cdn.discordapp.com/attachments/922512040441053197/1024387557636706404/kimetsu2.jpg';
backgrounds[2] = 'https://cdn.discordapp.com/attachments/922512040441053197/1024387558010015805/kimetsu3.jpg';

function changeBackground() {
    currentBackground++;
    if(currentBackground > 2) currentBackground = 0;


    // $('#main').fadeOut(500,function() {        
        $('body').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        // $('#main').fadeIn(1000);
    // });

    setTimeout(changeBackground, 5000);
}


function opacitychanger() {

    let dm = document.getElementById('dm');
    let nitro = document.getElementById('nitro');

    dm.classList.toggle('fade');
    nitro.classList.toggle('fade');
    setTimeout(opacitychanger, 5000);
}

function contributors_opacity() {
    let contrOpacity = document.getElementById('pedro');
    contrOpacity.classList.toggle('fade');
    setTimeout(contributors_opacity, 8000);
}


function blurMe() {

    var element = document.getElementsByName("body")
    element.classList.add("blur");

    setTimeout(function() {
        element.classList.remove("blur");
    }, 1000);


    setTimeout(blurMe, 5000);
}

// $(document).ready(function() {
//     setTimeout(changeBackground, 5000); 
//     setTimeout(opacitychanger, 5000); 
//     setTimeout(blurMe, 5000);

//     setTimeout(contributors_opacity, 8000);
// });
console.log("li.js loaded!")