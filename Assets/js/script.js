 // Adding moment js

 // trying to display todays date

 var dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
 $("#currentDay").html(dateNow);
 
 
 $(document).ready(function () {
    // saveButton listening 

    $(".saveButton").on("click", function () {
        
        var textNow = $(this).siblings(".scheduleItems").val();  
        var timeNow = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(timeNow, textNow);
    })
 
 
  
 
  
 
 // Get time id's from local storage as tagged in html
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