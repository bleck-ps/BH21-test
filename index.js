let loadf = document.getElementById('loadf');
let loadtxt = document.getElementById('loadtext');
let loadmaster = document.getElementById('load');
let hero1 = document.getElementById('heroimage1');
let hero2 = document.getElementById('heroimage2');
let loadframe = 1;

let btcontacto = document.getElementById('btcontacto');
let bthome = document.getElementById('bthome');
let btproyecto = document.getElementById('btproyecto');
let navarup = document.getElementById('nav-arup');
let navardw = document.getElementById('nav-ardw');
let navel = document.getElementsByClassName('navb');

let herohome = document.getElementById('hero-home');
let heroproy = document.getElementById('hero-proyectos');
let ghost = document.getElementById('ghost');

let heroanim1 = document.getElementById('heroanim1');
let heroanim2 = document.getElementById('heroanim2');
let heroanim3 = document.getElementById('heroanim3');
let heroanim4 = document.getElementById('heroanim4');
let heroanim5 = document.getElementById('heroanim5');
var winpos = 2;

let formbox = document.getElementById('formbox');
let idproy = document.getElementById('id-proy');
let idsent = document.getElementById('id-sent');
let error404 = document.getElementById('error404');
let wind = document.getElementById('windowflot');
let ghostclose = document.getElementById('ghostclose');

setTimeout(load,100)

function load() {
    setTimeout(function(){
        loadf.src = 'img/loadframes/ld' + loadframe + '.png';
        loadframe++;
        if(loadframe < 11) {
            load();
        } else if(loadframe == 11) {
            loadtxt.style.opacity = '1';
            setTimeout(function(){
                loadmaster.style.opacity = '0';
                var winpos = 1;
                setTimeout(function(){
                    loadmaster.style.display = 'none';
                },500)
            },1000);
        }
    },30);
}

btproyecto.addEventListener("click",window1);
btcontacto.addEventListener("click",window2);
bthome.addEventListener("click",window3);

navarup.addEventListener("click",function(){
    if (winpos == 1) {
        window1();
    } else if (winpos == 2) {
        window2();
    } else if (winpos == 3) {
        window3();
    }
})
navardw.addEventListener("click",function(){
    if (winpos == 1) {
        window3();
    } else if (winpos == 2) {
        window1();
    } else if (winpos == 3) {
        window2();
    }
})


function window1() {
    resetnav1();
    resetnav2();
    btproyecto.style.transform = 'scale(1.2)';
    btproyecto.style.background = '#80BC00';
    btproyecto.style.border = '2px solid #fff';
    winpos = 3;
    ghost.style.display = 'flex';
    setTimeout(function(){
        herohome.style.display = 'none';
        heroproy.style.display = 'flex';
        ghost.style.opacity = '0';
        setTimeout(function(){
            formbox.style.marginBottom = '0px';
        },50)
        setTimeout(function(){
            ghost.style.display = 'none';
            ghost.style.opacity = '1';
        },500)
    },200)
};
function window2() {
    resetnav1();
    resetnav3();
    btcontacto.style.transform = 'scale(1.2)';
    btcontacto.style.background = '#80BC00';
    btcontacto.style.border = '2px solid #fff';
    winpos = 1;
};
function window3() {
    resetnav2();
    resetnav3();
    bthome.style.transform = 'scale(1.2)';
    bthome.style.background = '#80BC00';
    bthome.style.border = '2px solid #fff';
    winpos = 2;
    ghost.style.display = 'flex';
    setTimeout(function(){
        heroproy.style.display = 'none';
        herohome.style.display = 'flex';
        ghost.style.opacity = '0';
        setTimeout(function(){
            formbox.style.marginBottom = '-300px';
        },50)
        setTimeout(function(){
            ghost.style.display = 'none';
            ghost.style.opacity = '1';
        },500)
    },200)
};



function resetnav1() {
    bthome.style.transform = 'scale(1.0)';
    bthome.style.background = 'none';
    bthome.style.border = 'none';
};
function resetnav2() {
    btcontacto.style.transform = 'scale(1.0)';
    btcontacto.style.background = 'none';
    btcontacto.style.border = 'none';
};
function resetnav3() {
    btproyecto.style.transform = 'scale(1.0)';
    btproyecto.style.background = 'none';
    btproyecto.style.border = 'none';
};



idproy.addEventListener("input", function(){
    error404.style.display = 'none';
    if (idproy.value.length == 6) {
        idsent.style.display = 'inline';
        setTimeout(function(){
            idsent.style.opacity = '1';
            idsent.style.marginTop = '20px';
        },100)
    } else if (idproy.value.length < 6) {
        idsent.style.opacity = '0';
        idsent.style.marginTop = '-40px';
    }
})

idsent.addEventListener("click",function(){
    if (idproy.value == '123456') {
        startsearch();
    } else {
        error404.style.display = 'inline';
    }
})
function startsearch(){
    wind.style.display = 'flex';
}

ghostclose.addEventListener("click", function(){
    wind.style.display = 'none';
})