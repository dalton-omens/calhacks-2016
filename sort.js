document.getElementById("table").innerHTML = "Hello JavaScript";

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })
}

var Course = function(id, location, time, days){
	this.id = id
	this.location = location
	this.time = time
	this.days = days
}