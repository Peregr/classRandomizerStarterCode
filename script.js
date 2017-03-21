$(document).ready(function() {
    var teacher = ["Nick", "Jenna", "Raf", "Mathew", "Michael"];
    //console.log(teacher[idx])

    $("#teacherButton").click(function() {  
        var idx = Math.floor(Math.random() * teacher.length);
        $("#teacherDisplay").html(teacher[idx])
   });

    var classmates = ["Isabela", "Gabby", "Jacky", "Felix", "Darli", "Lauren", "Zarra", "Pamela"];
     $("#studentButton").click(function() {  
        var idx = Math.floor(Math.random() * classmates.length);
        $("#studentDisplay").html(classmates[idx])
   });

});
