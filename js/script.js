$(function(){
    $('.slider').slick({
        slideToShow: 1,
        arrows: false,
        dots: true
    })
})

let burger = document.querySelector('.m-burget');

burger.addEventListener('click', () => {
    burger.classList.toggle('m-burget-active');
})

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const y = window.scrollY;
    if(y > 50){
        nav.style.background = '#000';
        nav.style.height = '60px';
        document.querySelector('.m-burget__span').classList.add('scroll');
        document.querySelector('.logo').style.stroke = '#fff'
    } else {
        nav.style.background = 'none';
        nav.style.height = '100px';
        document.querySelector('.m-burget__span').classList.remove('scroll');
        document.querySelector('.logo').style.stroke = '#000'
    }
})

let formBtn = document.querySelector('.form__btn');
let formNmae = document.querySelector('.form__name');
let formEmail = document.querySelector('.form__email');
let formBlock = document.querySelector('.o-left__block');

let form = document.querySelector('.form');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    errorInput();
})

function errorInput(){
    let formNmaeValue = formNmae.value;
    let formEmailValue = formEmail.value;
    if(formNmaeValue === ''){
        formNmae.focus();
        formNmae.classList.add('form_active')
    } else {
        formNmae.classList.remove('form_active')
    }
    
    if(formEmailValue === ''){
        formEmail.focus();
        formEmail.classList.add('form_active')
    }
    else {
        formEmail.classList.remove('form_active')
    }

    if(formNmaeValue.length && formEmailValue.length){
        sending()
    }
}

function sending(){
    formBlockHeigth = formBlock.clientHeight;

    formBlock.innerHTML = `<div class="sending">
                                <i class="far fa-check-circle"></i>
                                <h2>Заявка отправлена</h2>
                                <button class="sending__btn">Ok</button>
                            </div>`;
    let sending = document.querySelector('.sending');
    sending.style.height = `${formBlockHeigth}px`

    document.querySelector('.o-left').classList.add('center');

    let sendingBtn = document.querySelector('.sending__btn');
    sendingBtn.addEventListener('click', () => {
        formBlock.append(form);
        document.querySelector('.sending').remove();
        document.querySelector('.o-left').classList.remove('center');
        inputLengthNull();
    })
}


function inputLengthNull() {
    document.querySelector('.form__name').value = '';
    document.querySelector('.form__email').value = '';
    document.querySelector('.form__textarea').value = '';
}



document.querySelectorAll('.n-list__link').forEach(element => {
    element.addEventListener('click', function(e){
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        let elementId = document.getElementById(href);

        window.scrollBy({
            top: elementId.getBoundingClientRect().top - document.querySelector('.nav').clientHeight,
            behavior: 'smooth'
        })
    })
})


window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach((element, index) => {
        // console.log(element.offsetTop + document.querySelector('.nav').clientHeight <= window.scrollY)
        if(element.offsetTop + document.querySelector('.nav').clientHeight <= window.scrollY - 100){
            document.querySelectorAll('.n-list__link').forEach(element => {
                if(element.classList.contains('a-active')){
                    element.classList.remove('a-active')
                } else {
                    document.querySelectorAll('.n-list__item')[index].querySelector('.n-list__link').classList.add('a-active')
                }
            })
        }
    })
})