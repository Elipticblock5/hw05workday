 // Adding moment js

 // trying to display todays date, moment js used

 var dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
 $("#currentDay").html(dateNow);
 
 
  $(document).ready(function () {

    //onclick jquery 


    $(".saveButton").on("click", function () {
        
        var textNow = $(this).siblings(".scheduleItems").val();  
        var timeNow = $(this).parent().attr("id");

        
        localStorage.setItem(timeNow, textNow);
    }) 

    //function for color change
 
    function timeColor() {
        //this gets current number of hours
        //website to assist https://momentjscom.readthedocs.io/en/latest/moment/02-get-set/04-hour/

        var timeNowColor = moment().hour();

        console.log(timeNowColor)

        // this loops over time blocks to find past present future, using block time to match pre-filled CSS, adding and appending 
        // class with jquery to color from elements.

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));

            console.log(blockTime)

            // To check the time and add the classes for background indicators, using pre-set CSS on starter code to color and append html
            // less than to append class to grey
            // worked with TA during office hours 03/06 for function help 
            // worked with TA during office hours 03/07 for display to "text area" help

        
            if (blockTime < timeNowColor) {
                $(this).siblings("textarea").removeClass("future");
                $(this).siblings("textarea").removeClass("present");
                $(this).siblings("textarea").addClass("past");
            }

            // equal to to append class to red
            else if (blockTime === timeNowColor) {
                $(this).siblings("textarea").removeClass("past");
                $(this).siblings("textarea").removeClass("future");
                $(this).siblings("textarea").addClass("present");
            }

            // if any other condition, moves class to future. 
            else {
                $(this).siblings("textarea").removeClass("present");
                $(this).siblings("textarea").removeClass("past");
                $(this).siblings("textarea").addClass("future");

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



 //calling timeColor  function to run
 timeColor ();
})