$(function() {
    var today = new Date();
    newYearsDay = new Date(today.getFullYear() + 1, 0, -183, 0, 0, 0, 0);
    $('#countdown').countdown({
        until: newYearsDay
    });
});

var lenses = $('.lens-holder');
lenses.each(function(ind, event) {
    var $lense = $(this),
        $lenseSlides = $lense.find('.lense-slides > div'),
        $lenseNav = $lense.find('ul a');

    $lenseNav.on('click', function(event) {
        event.preventDefault();
        var index = $lenseNav.index($(this));
        $lenseNav.add($lenseSlides).removeClass('active');
        $(this).add($lenseSlides[index]).addClass('active');
    });
});
