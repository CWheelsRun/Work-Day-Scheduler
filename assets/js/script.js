var saveBtn = $(".saveBtn");

// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY, hh:mm A'));

// function to color the rows based on the time
function timeColor() {
    var hour = moment().hours();
    console.log(hour)
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        console.log(currentHour)
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

// executes this function on clicking the save button
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".task").val();

    // saves the task in the local storage
    localStorage.setItem(time, task);
});

// function to ensure the task remains when page is refreshed
function scheduler() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTask = localStorage.getItem(currentHour);

        if(currentTask !== null) {
            $(this).siblings(".task").val(currentTask);
        }
    });
}

timeColor();
scheduler();
