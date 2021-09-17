let timer = document.querySelectorAll('h2')
let toggle = document.getElementById('toggle');
let reset = document.getElementById('reset');

let watch = new Stopwatch(timer)

toggle.addEventListener('click', function() {
    if(watch.isOn) {
        watch.stop()
        toggle.innerText = "Start"
    } else {
        watch.start()
        toggle.innerText = "Stop"
    }
})

reset.addEventListener('click', function() {
    watch.reset()
})



document.querySelector('#base').addEventListener('input', changeColor)

function changeColor() {
    document.documentElement.style.setProperty('--base', this.value)
}



document.querySelector('#font').addEventListener('click', fontColor)

function fontColor() {
    let fontColor = document.querySelectorAll('.timer')
    if(document.getElementById('font').checked) {
        // document.querySelectorAll('h2').style.color = '#ffffff'
        // document.querySelectorAll('span').style.color = '#ffffff'
        for(let i=0; i < fontColor.length; i++) {
            fontColor[i].style.color = '#ffffff'
        }
    }else {
        // document.querySelectorAll('h2').style.color = '#000000'
        // document.querySelectorAll('span').style.color = '#ffffff'
            for(let i=0; i < fontColor.length; i++) {
            fontColor[i].style.color = '#000000'
        }
    }
}