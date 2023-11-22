function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

let unlimitedColor;

function myBody() {
    const colorChanger = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = colorChanger;
}

document.querySelector('#start').addEventListener('click', function(){
    unlimitedColor = setInterval(myBody, 2000)
})
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(unlimitedColor)
})