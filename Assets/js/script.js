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

    //function for color change
 
    function timeColor() {
        //this gets current number of hours
        var timeNowColor = moment().hour();

        console.log(timeNowColor)

        // this loops over time blocks to find past present future, using block time to match pre-filled CSS, adding and appending 
        // class with jquery to color from elements.

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));

            console.log(blockTime)

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
 $("#8 .scheduleItems").val(localStorage.getItem("8"));
 $("#9 .scheduleItems").val(localStorage.getItem("9"));
 $("#10 .scheduleItems").val(localStorage.getItem("10"));
 $("#11 .scheduleItems").val(localStorage.getItem("11"));
 $("#12 .scheduleItems").val(localStorage.getItem("12"));
 $("#13 .scheduleItems").val(localStorage.getItem("13"));
 $("#14 .scheduleItems").val(localStorage.getItem("14"));
 $("#15 .scheduleItems").val(localStorage.getItem("15"));
 $("#16 .scheduleItems").val(localStorage.getItem("16"));
 $("#17 .scheduleItems").val(localStorage.getItem("17")); 

 timeColor ();
})