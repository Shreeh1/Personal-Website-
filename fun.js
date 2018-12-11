var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('I am a Coder')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('Traveler')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('Cinematographer')
    .pauseFor(2500)
    .deleteChars(15)
    .typeString('Dreamer')
    .pauseFor(2500)
    .start();
