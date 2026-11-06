let scene;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    car.a = 0;
    car.da = -.01;
    pokeball = document.querySelector("#pokemonball");
    pokeball.a = 0;
    pokeball.da = 1;
    rocket = document.querySelector("#rocket");
    rocket.a = 0;
    rocket.da = .01;
    dude = document.querySelector("#dude");
    dude.a = 0;
    dude.da = .1;
    sun = document.querySelector("#sun");
    sun.a = 0;
    sun.da = .1;
    carloop();
})
function carloop(){
    car.a += car.da;
    car.setAttribute("position", {x:car.a, y:0, z:-5});


    pokeball.a += pokeball.da;
    pokeball.setAttribute("rotation", `${pokeball}.a, 0, 0`);

    rocket.a += rocket.da;
    rocket.setAttribute("position", {x:0, y:rocket.a, z:0});

    dude.a += dude.da;
    dude.setAttribute("scale", "dude.a, dude.a, dude.a");

    sun.a += sun.da;
    window.requestAnimationFrame(carloop);
}