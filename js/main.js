// smooth scroll 
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
// select
const element = document.querySelector('#selectGallery');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});
// ymaps
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 16,
        controls: [],
    });
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [20, 20],
    });

    myMap.controls.add('geolocationControl', {
        float: 'none',
        position: {
            right: '20px',
            bottom: '330px'
        }
    });
    myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
            bottom: '380px',
            right: '20px'
        }
    });
    // myMap.behaviors
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    myMap.events.once('click', function() {
        myMap.behaviors
            .disable('scrollZoom')
            .enable('multiTouch');
    });

}
//  validation + inputmask
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);


new JustValidate('.form',

    {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 30
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            },
        },

        messages: {
            name: {
                maxLength: 'Введите корректное имя',
                minLength: 'Введите корректное имя',
                required: 'Поле обязательно для заполнения!'
            },
            tel: {
                function: 'Недопустимый формат',
                required: 'Поле обязательно для заполнения!'
            }
        },

    })

//tooltip 
tippy('#tooltip-1', {
    trigger: 'click',
    theme  : 'purple',
    content: "Пример современных тенденций - современная методология разработки",
  });

 tippy('#tooltip-2',{
    trigger: 'click',
    theme  :"purple",
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
 }) ;

 tippy('#tooltip-3',{
    trigger: 'click',
    theme  :"purple",
    content: "В стремлении повысить качество ",
}) ;
