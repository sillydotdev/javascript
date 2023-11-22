// generating random color (rgb)
// function random(number) {               
//     return Math.floor(Math.random() * (number + 1));
// }

// function myBody() {
//     const colorChanger = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = colorChanger;
// }

// generating random color (hex)
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

function myBody() {
    // const colorChanger = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor();
}

let unlimitedColor;
document.querySelector('#start').addEventListener('click', function(){
    if(!unlimitedColor) {
        unlimitedColor = setInterval(myBody, 1000)
    }
})
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(unlimitedColor)
    unlimitedColor = null;
})