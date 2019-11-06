function addNumbers()
                {
                        var r = parseInt(document.getElementById("InterestRate").value);
                        var p = parseInt(document.getElementById("Borrowed ").value);
						var n = parseInt(document.getElementById("installments").value);
                        var ansD = document.getElementById("answer");
                        //ansD.value = ((((r/100)/12)*p)*(Math.pow((1+((r/100)/12)),n*12)))/ Math.pow((1+((r/100)/12)),(n*12))-(n*12);
						ansD.value = (r/100/12*p)/
									(    1-(Math.pow((1+(r/100/12)),n*12))     );	

										
						
                }