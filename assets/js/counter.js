$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 45, duration: 2200 });
$('#number2').jQuerySimpleCounter({ end: 650, duration: 2200 });
$('#number3').jQuerySimpleCounter({ end: 90, duration: 2200 });
$('#number4').jQuerySimpleCounter({ end: 1350, duration: 2200 });