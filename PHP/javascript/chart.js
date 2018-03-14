$(document).ready(function(){
	$.ajax({
		url: "http://localhost/sri/scripts/chartdata.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var date = [];
			var sales = [];

			for(var i in data) {
				date.push( data[i].dtDay+"/"+data[i].dtMonth+"/"+data[i].dtYear);
				sales.push(data[i].sales);
			}
      console.log(date);
      console.log(sales);
			var chartdata = {
				labels: date,
				datasets : [
					{
						label: 'Date',
						backgroundColor: 'rgba(200, 200, 200, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: sales
					}
				]
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});
