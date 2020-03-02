var month = $('.month');
var annual = $('.annual');
var toggle = $('.toggle button');
var monthTxt = $('#monthly');
var annualTxt = $('#annually');

month.hide();
annualTxt.addClass('highlight');
toggle.click(function () {
    var circle = $('svg');

    if (circle.css('left') === '5px') {
        //Monthly Pricing
        circle.animate({
            left: '25px'
        });
        annual.hide();
        month.show();
        monthTxt.toggleClass('highlight');
        annualTxt.toggleClass('highlight');


    } else {
        //Annually Pricing
        circle.animate({
            left: '5px'
        });
        annual.show();
        month.hide();
        monthTxt.toggleClass('highlight');
        annualTxt.toggleClass('highlight');
    }
});