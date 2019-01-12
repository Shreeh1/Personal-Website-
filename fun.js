var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Coder')
    .pauseFor(2000)
    .deleteChars(5)
    .typeString('Visual Artist')
    .pauseFor(2000)
    .deleteChars(13)
    .typeString('Traveler')
    .pauseFor(2000)
    .deleteChars(8)
    .typeString('Cinematographer')
    .pauseFor(2000)
    .deleteChars(15)
    .typeString('Photographer')
    .pauseFor(2000)
    .start();



// to hover the side bar on click
var element = document.querySelector("#sidenav");
var element1 = document.querySelector("#fa-bars");
var home = document.querySelector("#home");
var dark = document.querySelector("#dark");
var projects = document.querySelector("#projects");
var projectdark = document.querySelector("#projectdark");
var passion = document.querySelector("#passion");
var passiondark = document.querySelector("#passiondark");
var reach_out = document.querySelector("#reach_out");

// the bar click to bring the side bar to visibility
element1.addEventListener('click',function(){
    element.style.left = 0;
});

home.addEventListener('click', function(){
    element.style.left = "-384px";
});

dark.addEventListener('click', function(){
    element.style.left = "-384px";
});

projects.addEventListener('click', function(){
    element.style.left = "-384px";
});

projectdark.addEventListener('click', function(){
    element.style.left = "-384px";
});

passion.addEventListener('click', function(){
    element.style.left = "-384px";
});

passiondark.addEventListener('click', function(){
    element.style.left = "-384px";
});

reach_out.addEventListener('click', function(){
    element.style.left = "-384px";
});

element.addEventListener('click', function(){
    element.style.left = "-384px";
});


