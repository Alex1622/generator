const block = document.querySelector('.block')
const text = document.querySelector('textarea')
const all = document.querySelector('.all')
const tl = document.querySelector('.tl')
const tr = document.querySelector('.tr')
const br = document.querySelector('.br')
const bl = document.querySelector('.bl')
const bw = document.querySelector('.bw')
const bc = document.querySelector('.bc')
const bgc = document.querySelector('.bgc')
const bStyle = document.querySelector('.border-style')
const scale = document.querySelector('.scale')
const rotate = document.querySelector('.rotate')
const translateX = document.querySelector('.translateX')
const translateY = document.querySelector('.translateY')
const skewX = document.querySelector('.skewX')
const skewY = document.querySelector('.skewY')
const shiftr = document.querySelector('.shiftr')
const shiftd = document.querySelector('.shiftd')
const spread = document.querySelector('.spread')
const blur = document.querySelector('.blur')
const color = document.querySelector('.shadow-color')
const copy = document.querySelector('.copy')

// Events
all.addEventListener('input', allCorner);
tl.addEventListener('input', tlCorner);
tr.addEventListener('input', trCorner);
br.addEventListener('input', brCorner);
bl.addEventListener('input', blCorner);
bw.addEventListener('input', borWidth);
bc.addEventListener('input', borColor);
bgc.addEventListener('input', backColor);
bStyle.addEventListener('input', borderSty);
scale.addEventListener('input', scaleCorner);
rotate.addEventListener('input', scaleCorner);
translateX.addEventListener('input', scaleCorner);
translateY.addEventListener('input', scaleCorner);
skewX.addEventListener('input', scaleCorner);
skewY.addEventListener('input', scaleCorner);
shiftr.addEventListener('input', shadow)
shiftd.addEventListener('input', shadow)
spread.addEventListener('input', shadow)
blur.addEventListener('input', shadow)
color.addEventListener('input', shadow)

// Functions
function drawText() {
    text.value = `border-radius: ${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px; ` +
        `border-width: ${bw.value}px; ` +
        `border-style: ${bStyle.value}; ` +
        `border-color: ${bc.value}; ` +
        `background: ${bgc.value}; `  +
        `transform: scale(${scale.value}) rotate(${rotate.value}deg) translate(${translateX.value}px ,${translateY.value}px) skew(${skewX.value}deg ,${skewY.value}deg); ` +
        `box-shadow: ${shiftr.value}px ${shiftd.value}px ${blur.value}px ${spread.value}  ${color.value}; `
}

function setRadius() {
    block.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`
}


function allCorner() {
    tl.value = all.value;
    tr.value = all.value;
    br.value = all.value;
    bl.value = all.value;

    setRadius()
    drawText()
}

function tlCorner() {
    setRadius()
    drawText()
}

function trCorner() {
    setRadius()
    drawText()
}

function brCorner() {
    setRadius()
    drawText()
}

function blCorner() {
    setRadius()
    drawText()
}

function borWidth() {
    block.style.borderWidth = bw.value + 'px'
    drawText()
}

function borColor() {
    block.style.borderColor = bc.value
    drawText()
}

function backColor() {
    block.style.background = bgc.value
    drawText()
}

function borderSty() {
    block.style.borderStyle = bStyle.value;
    drawText()

}

function scaleCorner() {
    block.style.transform = 'scale(' + scale.value + ')' +
        'rotate(' + rotate.value + 'deg)' +
        'translate(' + `${translateX.value}px, ${translateY.value}px ` + ')' +
        'skew(' + `${skewX.value}deg, ${skewY.value}deg` + ')'
    drawText()
}

function shadow() {
    block.style.boxShadow = `${shiftr.value}px ${shiftd.value}px ${blur.value}px ${spread.value}px ${color.value}`;
    drawText()
}

