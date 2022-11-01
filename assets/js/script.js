$(document).ready(function() {
    var time = moment().format('LLLL');
    console.log(time);
    $('#currentDay').text(time);
    $('#currentDay').css('font-size', '38px')

    var currentHour = moment().format('hh:mm A');

    var hour9 = moment().hours(9).minutes(00).format('hh:mm A');
    var hour10 = moment().hours(10).minutes(00).format('hh:mm A'); 
    var hour11 = moment().hours(11).minutes(00).format('hh:mm A');
    var hour12 = moment().hours(12).minutes(00).format('hh:mm A');  
    var hour13 = moment().hours(13).minutes(00).format('hh:mm A');
    var hour14 = moment().hours(14).minutes(00).format('hh:mm A');
    var hour15 = moment().hours(15).minutes(00).format('hh:mm A');
    var hour16 = moment().hours(16).minutes(00).format('hh:mm A');
    var hour17 = moment().hours(17).minutes(00).format('hh:mm A');
    var hour18 = moment().hours(18).minutes(00).format('hh:mm A'); 
    var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18];

    console.log(hours.length)

    for (var i=0; i<hours.length; i++) {
    var row = $(`<div class="row"></div>`)
    var col1 = $(`<div class ="col-lg-2"></div>`)
    $(col1).text(hours[i]);
    var col2 = $(`<div class ="col-lg-8"</div>`)
    var col3 = $(`<div class ="col-lg-2"></div>`)
    row.append(col1)
    row.append(col2)
    row.append(col3)
    $('.container').append(row)
}
})