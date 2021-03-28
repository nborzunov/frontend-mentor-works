const button = document.getElementById('hamburger');
const menu = document.getElementById('menu');


button.addEventListener('click', () => {
    if(menu.classList.contains('closed')){
        button.classList.remove('button-closed')
        button.classList.add('button-opened')
        menu.classList.remove('closed')
        menu.classList.add('opened')
    } else {
        button.classList.remove('button-opened')
        button.classList.add('button-closed')
        menu.classList.remove('opened')
        menu.classList.add('closed')
    }
})