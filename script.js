let donate = document.querySelector('.donate')

function come_on_little_folks() {
    donate.style.color = 'black'
    donate.style.border = '3px solid cyan'
    donate.style.backgroundColor = 'cyan'
}

donate.addEventListener('mouseover', come_on_little_folks)