$(document).ready(function () {
    $(".alert").hide();

    var regis = new RegExp("[0-9][0-9][P][A][1][A][0-9][0-9][A-Z0-9][A-Z0-9]");
    var avg = new RegExp("");
    
    $('form').on('submit', function(e){
    
    
      
   
  
        $(".alert").hide();

        var errors = ""
        var fstname = $("#fstname").val();
        var lstname = $("#lastname").val();
        var username = $("#username").val();
        var password = $("#pass").val();
        var gender = $('input[name=gender]:checked').val();
        var resgister = $("#res").val();
        var address = $("#add").val();
        var zip = $("#zip").val();
        var avg = $("#avg").val();
        alert("hai");
        if (!regis.test(resgister))
            errors += "<li> registration number of the user must be in the 15PA1A05H9 format.</li>";
        if (errors != null) {
            e.preventDefault();
            $(".alert").show();
            $(".alert").append(errors);
        }
        alert(fstname);
    })
})
