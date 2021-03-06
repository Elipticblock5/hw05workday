 // Adding moment js

 // trying to display todays date

 var dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
 $("#currentDay").html(dateNow);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // Get time id's from local storage as tagged in html
 $("#time8 .timeClass").val(localStorage.getItem("time8"));
 $("#time9 .timeClass").val(localStorage.getItem("time9"));
 $("#time10 .timeClass").val(localStorage.getItem("time10"));
 $("#time11 .timeClass").val(localStorage.getItem("time11"));
 $("#time12 .timeClass").val(localStorage.getItem("time12"));
 $("#time13 .timeClass").val(localStorage.getItem("time13"));
 $("#time14 .timeClass").val(localStorage.getItem("time14"));
 $("#time15 .timeClass").val(localStorage.getItem("time15"));
 $("#time16 .timeClass").val(localStorage.getItem("time16"));
 $("#time17 .timeClass").val(localStorage.getItem("time17"));