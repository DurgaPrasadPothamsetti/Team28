$(document).ready(function() {
  var selectPHP ;
    $("#udstock").click(function() {
        $("#op").empty();
        selectPHP=true;
        $("#op").html("Update Stock");
        if (!($("form").hasClass("hidden")))
            $("form").addClass("hidden");
        $("#updatetable").removeClass("hidden");
        createTable();
    })
    var displayStock = function(){
      $("#op").empty();
      $("#addtable").empty();

      $.getJSON("scripts/data.php", function(data) {
        $.each(data.result, function(i, result) {
            content = '<tr><td>' + result.id + '</td>';
            content += '<td>' + result.productname + '</td>';
            content += '<td>' + result.quantity + '</td>';
            content += '<td>' + result.price + '</td></tr>';
            $(content).appendTo("#addtable");
        });
      });
      $("#submit").addClass("hidden");
    }
    var createTable = function() {
        $("#addtable").empty();
        $("#submit").removeClass("hidden");
        $.getJSON("scripts/data.php", function(data) {
            $.each(data.result, function(i, result) {
                content = '<tr><td>' + result.id + '</td>';
                content += '<td>' + result.productname + '</td>';
                content += '<td>' + result.quantity + '</td>';
                content += '<td>' + result.price + '</td>';
                content += '<td><input class="w3-input " type="text" name=' + result.id + ' value=0></td></tr>';
                $(content).appendTo("#addtable");
            });
        });
    }
    $("#udsales").click(function() {
        $("#op").empty();
        $("#op").html("Today sales");
        selectPHP=false;
        if (!($("form").hasClass("hidden")))
            $("form").addClass("hidden");
        if ($("#updatetable").hasClass("hidden"))
            $("#updatetable").removeClass("hidden");
        createTable();
    })

    $("#addata").click(function() {
        var name = $("#prouductn").val();
        var quantity = $("#qut").val();
        var price = $("#prce").val();
        data = {
            name: name,
            quantity: quantity,
            price: price
        };
        console.log(data);
        $.post("scripts/additem.php", data)
            .done(function(data) {
                alert("Data Loaded: " + data);
                $("#prouductn").val("");
                $("#qut").val("");
                $("#prce").val("");
            });
    })
    $("#submit").click(function() {
        var values = {};
        console.log(selectPHP);
        $('td input').each(function() {
            values[$(this).attr('name')] = $(this).val();
        })
        if(selectPHP){
          alert("updating stock");
          $.post("scripts/update.php", values)
          .done(function(data){
              //alert(data);
              displayStock();
          })
        }
        else{
          alert("updating sales");
          $.post("scripts/updateSales.php", values)
          .done(function(data) {
              //alert(data);
              displayStock();
          })
          $.post("scripts/dailyreport.php", values)
          .done(function(data) {
            alert("Today total sales "+data);
          })
        }

        console.log(values);
    })


});
