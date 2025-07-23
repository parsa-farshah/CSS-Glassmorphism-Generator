const colors = document.querySelectorAll('#colors>span')
let box = document.getElementById('box')
let opacity = document.getElementById('opacity')
let _blur = document.getElementById('blur')
let blurTxt = document.getElementById('blurTxt')
let color1Txt = document.getElementById('colorTxt1')
let color2Txt = document.getElementById('colorTxt2')
let opTxt1 = document.getElementById('opTxt1')
let opTxt2 = document.getElementById('opTxt2')
let codeCopy = document.getElementById('codeCopy')
let open = document.getElementById('team-btn')
let close = document.getElementById('close')
let team = document.getElementById('team')
let succsess = document.getElementById('succsess')
let opValue = 0.9
let data = 'white'
let _code = ''

opacity.addEventListener('change', () => {
    opValue = opacity.value
    opacity.nextElementSibling.innerHTML = opValue
    changeColor(data)
    opTxt1.innerHTML = opValue
    opTxt2.innerHTML = opValue
})

_blur.addEventListener('change', () => {
    let blurValue = _blur.value
    _blur.nextElementSibling.innerHTML = blurValue
    box.style.backdropFilter = `blur(${blurValue}px)`
    blurTxt.innerHTML = blurValue
})

colors.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < colors.length; i++) {
            colors[i].classList.remove('border');
        }
        item.classList.add('border')

        data = item.getAttribute('data-color')
        changeColor(data)

    })
})

function changeColor(data) {
    switch (data) {
        case 'white':
            box.style.backgroundImage = `linear-gradient(45deg, rgba(255,255,255,${opValue}), rgba(255,255,255,${opValue}))`
            color1Txt.innerHTML = '255, 255, 255'
            color2Txt.innerHTML = '255, 255, 255'
            break;
        case 'black':
            box.style.backgroundImage = `linear-gradient(45deg, rgba(66,60,90,${opValue}), rgba(66,60,90,${opValue}))`
            color1Txt.innerHTML = '66,60,90'
            color2Txt.innerHTML = '66,60,90'
            break;
        case 'brown':
            box.style.backgroundImage = `linear-gradient(45deg, rgba(76,52,52,${opValue}), rgba(76,52,52,${opValue}))`
            color1Txt.innerHTML = '76,52,52'
            color2Txt.innerHTML = '76,52,52'
            break;
        case 'orange':
            box.style.backgroundImage = `linear-gradient(45deg, rgba(255,102,65,${opValue}), rgba(228,70,122,${opValue}))`
            color1Txt.innerHTML = '255,102,65'
            color2Txt.innerHTML = '255,102,65'
            break;
        case 'aqua':
            box.style.backgroundImage = `linear-gradient(45deg, rgba(32,152,255,${opValue}), rgba(50,249,176,${opValue}))`
            color1Txt.innerHTML = '32,152,255'
            color2Txt.innerHTML = '32,152,255'
            break;
        case 'purple':
            box.style.backgroundImage = `linear-gradient(45deg, rgba(32,152,255,${opValue}), rgba(172,50,249,${opValue}))`
            color1Txt.innerHTML = '32,152,255'
            color2Txt.innerHTML = '32,152,255'
            break;
    }
}

codeCopy.addEventListener('click', () => {
    let txtBlur = document.getElementById('txtBlur').innerText
    let txtBack = document.getElementById('txtBack').innerText
    _code = txtBlur + "\n" + txtBack
    console.log(_code);
    navigator.clipboard.writeText(_code)
        .then(() => {
            succsess.style.display = 'flex'
            setTimeout(() => succsess.style.display = 'none', 2000);
        });
})

open.addEventListener('click', () => {
    team.style.transform = 'translateX(0%)'
})
close.addEventListener('click', () => {
    team.style.transform = 'translateX(100%)'
})