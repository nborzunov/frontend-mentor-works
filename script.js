const list = document.getElementsByClassName('dropdown-list__item')


const toggleinfo = function(el) {
    console.log(el)
}

for (i = 0; i<list.length; i++) {
    list[i].children[0].addEventListener('click', (event) => {
        for(i=0; i<list.length; i++) {
            if(list[i].children[0] !== event.target) {
                const q = list[i].children[0];
                const a = list[i].children[1];
                q.classList='item__question';
                a.classList='item__answer hide';
            }

        }

        const answer = event.target.parentElement.children[1];
        if (answer.classList.toString().includes('hide')){
            answer.classList = 'item__answer'
        } else {
            answer.classList += ' hide'
        }

        const question = event.target.parentElement.children[0];
        if (question.classList.toString().includes('opened')){
            question.classList = 'item__question'
        } else {
            question.classList += ' opened'
        }

    })
}

