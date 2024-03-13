


// Accordion FAQ start
const acco = document.querySelector('.accordion-3')
const container = document.querySelector('.container')
const all_buttons = document.querySelectorAll('.accordion')


container.addEventListener('click', (e) => {
const e_target = e.target;

const currently_active = document.querySelector('button.green')
const panel_active = document.querySelector('div.panel-active')
const is_open_active = document.querySelector('button.accordion.is-open')


if(!e_target.classList.contains('green')) { 
   open()
}
if(currently_active && panel_active && is_open_active){
   close()
}


function open (){
    e_target.classList.add('green', 'is-open')
    e_target.nextElementSibling.classList.add('panel-active')
    e_target.nextElementSibling.firstElementChild.classList.add('p-tag-active')
}

function close (){
    e_target.classList.add('green')
    currently_active.classList.remove('green')
    is_open_active.classList.remove('is-open')
    e_target.nextElementSibling.classList.add('panel-active')
    panel_active.classList.remove('panel-active')
}

});
// Accordion FAQ end

