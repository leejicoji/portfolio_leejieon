$(document).ready(function () {
    // fullpage
    $('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
        navigation: true,
        sectionsColor: ['#fff', '#FBE3E4', '#A3A380', "#D6CE93 ", '#EFEBCE', '#c8aab2', '#fff', 'rgb(128 128 128 / 25%)'],
        navigationTooltips: ['Home', 'About me', 'Whatcha', 'Donggubat', 'Mamonde', 'Design', 'DESIGN', 'COPYRIGHT'],
        slidesNavigation: true,
        loopTop: true,
        loopBottom: true
    });

    // fancybox (기존)
    $(".fancybox").fancybox();
    $(".design_wrap a").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    // back to top 버튼
    var $btn = $('#backToTop');
    var SHOW_AT = 200; // 이 값(px) 이상 내려가면 버튼 보이기

    $(window).scroll(function () {
        if ($(this).scrollTop() > SHOW_AT) {
            $btn.addClass('is-visible');
        } else {
            $btn.removeClass('is-visible');
        }
    });
    $btn.click(function (e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(1); // 첫 번째 섹션으로 이동
    });
});