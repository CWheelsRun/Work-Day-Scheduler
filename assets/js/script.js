var saveBtn = $(".saveBtn");

// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY, hh:mm A'));

// function to color the rows based on the time
function rowColor() {
    var hour = moment().hours();

    $(".row").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        // sets the conditional for the time of the day

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

rowColor();

