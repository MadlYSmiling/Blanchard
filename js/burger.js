window.addEventListener('DOMContentLoaded', function() {
    // burger menu
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
    document.querySelector('#close').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    //search input
    document.querySelector('.search-adaptive-btn').addEventListener('click', function() {
        document.querySelector('.search-adaptive').classList.add('is-active')
        document.querySelector('.search-adaptive__input').classList.add('is-active')
        document.querySelector('.search-adaptive__btn__close').classList.add('is-active')
    })
    document.querySelector('.search-adaptive__btn__close').addEventListener('click', function() {
        document.querySelector('.search-adaptive').classList.remove('is-active')
        document.querySelector('.search-adaptive__input').classList.remove('is-active')
        document.querySelector('.search-adaptive__btn__close').classList.remove('is-active')
    })
    
    

})