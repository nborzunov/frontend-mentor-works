const button = document.getElementById('button');
const menu = document.getElementById('content');


button.addEventListener('click', () => {
    if(menu.classList.contains('closed')){
        button.classList.remove('closed')
        button.classList.add('opened')
        menu.classList.remove('closed')
        menu.classList.add('opened')
    } else {
        button.classList.remove('opened')
        button.classList.add('closed')
        menu.classList.remove('opened')
        menu.classList.add('closed')
    }
})