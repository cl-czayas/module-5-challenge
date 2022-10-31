$(document).ready(function() {
    var time = moment().format('LLLL');
    console.log(time);
    $(currentDay).text(time);
    $(currentDay).css('font-size', '38px');
    
})