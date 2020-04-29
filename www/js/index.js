document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
       	
    }


// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAy6qaNJOjP75X89IBmDmOYiYKr4qwqYKg&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  console.log("Hi");
	navigator.geolocation.getCurrentPosition(geolocationSuccess,[geolocationError]);
	var onSuccess = function(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
};
	function onError(error){
	alert("Error" + error.code)
}

navigator.geolocation.getCurrentPosition(onSuccess, onError); 
};

// Append the 'script' element to 'head'
document.head.appendChild(script);



//setting the locations for demo defib data
var defib1;
defib1 = {lat: 52.1912156, lng: -2.181245};

var defib2;
defib2 = {lat: 52.190033, lng: -2.2263984};

var defib3;
defib3 = {lat: 52.1937585, lng: -2.2260509};
//setting the demo location to worcester
var worc;
worc = {lat: 52.192, lng: -2.220};

var latitude = 52.5586913;
var longitude= -1.5282136;
function GetLoc(){

console.log("hi");
}

//navigator.geolocation.getCurrentPosition(successPosition, failPosition);

//function successPosition(position) {

	
//	latitude = position.coords.latitude;
//	longitude = position.coords.longitude;
//	console.log(latitude)
//	console.log(longitude)
//	drawmap();
//}
//function failPosition(error) {
//	alert("Failed to retrieve position");
//}


//function drawmap() {
	window.onload=function(){
    var mapDiv = document.getElementById("map_canvas");
    var Userlatlng = new google.maps.LatLng(latitude, longitude);

    var options = {
      center: Userlatlng,
      zoom: 8,
      
    };

	
	
    var map = new google.maps.Map(mapDiv, options);
//This code sets the center of the map to Worcester for demonstration purposes
	
	google.maps.event.addDomListener(document.getElementById('GoWorc'), 'click', function () {

    map.setCenter(new google.maps.LatLng(52.192,-2.220));
	
	
//Sets a new "Position" Marker in worc, for demo purposes	
	var marker1 = new google.maps.Marker({
      position: worc,
      map: map,
      title: 'Worcester',
	  icon: iconbase2 + 'man.png'
    });
});
//Linking to googles icon sheets
	var iconBase1 = 'https://maps.google.com/mapfiles/kml/pal4/';
	var iconbase2 = 'https://maps.google.com/mapfiles/kml/shapes/';
	
//creating the markers for the users position and defib locations using googles icons
    var marker1 = new google.maps.Marker({
      position: Userlatlng,
      map: map,
      title: 'User Location',
	  icon: iconbase2 + 'man.png'
    });
	
	var marker2 = new google.maps.Marker({
		position: defib1,
		map: map,
		icon: iconBase1 + 'icon55.png'
	});
	
		var marker3 = new google.maps.Marker({
		position: defib2,
		map: map,
		icon: iconBase1 + 'icon55.png'
	});
	
	var marker4 = new google.maps.Marker({
		position: defib3,
		map: map,
		icon: iconBase1 + 'icon55.png'
	});
	

}


