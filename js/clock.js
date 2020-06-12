function outDate(ob){
    var today = new Date();
	var year = 1900+today.getYear();
    
	var sdata = new Date(year, 8, 1);
	var delta = sdata-today;
	var seconds = delta/1000;
	var minutes = seconds/60;
	var hours = minutes/60;
	
	var daysleft = Math.floor(hours / 24)
	var hoursleft = Math.floor(hours % 24);
	var minutesleft = Math.floor(minutes % 60);
	var secondsleft = Math.floor(seconds % 60);
	ob.innerHTML = "<table><tr><th  colspan='4'>До начала 2020 учебного года: </th></tr><tr><th>" +	daysleft + "</th><th>" + hoursleft + "</th><th>" + minutesleft + "</th><th>" + secondsleft + " </th></tr>"	+ "<tr><th>Дней</th><th> Часов</th><th> Минут</th><th> Секунд</th></tr></table>";
}

var obj = document.getElementById("timeleft");
window.onload = outDate(obj);
setInterval(outDate, 1000, obj);