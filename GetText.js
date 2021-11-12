const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

function GetValue()
{

    let text = document.getElementById('text1').textContent;
    const texts = [
        [(text)]

    ];



const morphTime = 1;
const cooldownTime = 0.50;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 2;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;
    setMorphTest(fraction);
}


// document.getElementById("btnSearch").disabled = true;{
//     console.log("ปิด");
// }

function setMorphTest(fraction) {    
    if (fraction < 1) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 0}%`;
    
        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        // elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }
}

function doCooldown() {
    morph = 0;
    elts.text2.style.filter = "100%";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "100%";
    elts.text1.style.opacity = "100%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;
    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
            //Random
            GetRandom();
        }

        doMorph();
    } else {
        doCooldown();
    }
}
animate();
}



