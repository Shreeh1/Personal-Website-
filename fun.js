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

