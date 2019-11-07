function addNumbers()
	 {
	var r = parseInt(document.getElementById("InterestRate").value);
	var p = parseInt(document.getElementById("Borrowed ").value);
	var n = parseInt(document.getElementById("installments").value);
	var ansD = document.getElementById("answer");
        //ansD.value = ((((r/100)/12)*p)*(Math.pow((1+((r/100)/12)),n*12)))/ Math.pow((1+((r/100)/12)),(n*12))-(n*12);
	ansD.value = ((r/100/12)*p*(Math.pow((1+(r/100/12)),n*12)))/(    (Math.pow((1+(r/100/12)),n*12)) - 1    );	
	
	}
				
				


window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {

      title:{
      text: "Bond vs Time "
      },
      axisX: {
        valueFormatString: "1",
        interval:10,
        intervalType: "year"
      },
      axisY:{
        includeZero: true
      },
      data: [
      {
        type: "line",

        dataPoints: [
        { x: 0, y: 30 },
        { x: 20, y: 25},
          { x: 30, y: 20},
        { x: 65, y: 10 },
        { x: 100, y: 5 },
        
        ]
      }
      ]
    });

    chart.render();
  }