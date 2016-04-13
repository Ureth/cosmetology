(function () {

    angular
        .module('cosmetApp')
        .controller('diplomasCtrl', diplomasCtrl);

function diplomasCtrl () {
    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-navigation'
        });
        $('.slider-navigation').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    });
}


})();