 // Adding moment js

 // trying to display todays date, moment js used

 var dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
 $("#currentDay").html(dateNow);
 
 
  $(document).ready(function () {


    $(".saveButton").on("click", function () {
        
        var textNow = $(this).siblings(".scheduleItems").val();  
        var timeNow = $(this).parent().attr("id");

        
        localStorage.setItem(timeNow, textNow);
    }) 
 
    function timeColor() {
        //this gets current number of hours
        var timeNowColor = moment().hour();

        // this loops over time blocks to find past present future, using block time to match pre-filled CSS
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNowColor) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNowColor) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
  
 
  
 
  // this grabs time id's as saved in local storage for coloring from above function
 $("#time8 .scheduleItems").val(localStorage.getItem("time8"));
 $("#time9 .scheduleItems").val(localStorage.getItem("time9"));
 $("#time10 .scheduleItems").val(localStorage.getItem("time10"));
 $("#time11 .scheduleItems").val(localStorage.getItem("time11"));
 $("#time12 .scheduleItems").val(localStorage.getItem("time12"));
 $("#time13 .scheduleItems").val(localStorage.getItem("time13"));
 $("#time14 .scheduleItems").val(localStorage.getItem("time14"));
 $("#time15 .scheduleItems").val(localStorage.getItem("time15"));
 $("#time16 .scheduleItems").val(localStorage.getItem("time16"));
 $("#time17 .scheduleItems").val(localStorage.getItem("time17")); 

 timeColor ();
})