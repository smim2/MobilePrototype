//Static lat and long values as workaround until dynamic geolocation works correctly.
var latitude = 52.5586913;
var longitude= -1.5282136;

/*The code below is my attempt to implement geolocation, it is not currently working
However it has been left in to show the attempt, feedback is welcome.
The attempted logic is declare the variables for lat & long, once device is ready
Use geolocator plugin is to set lat and long to the devices location. 
Due to this not functioning, the lat & long variables are currently static.*/

/*document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
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
*/
    
//The following code is adapted from the google map api tutorial linking the js and html files:
//https://developers.google.com/maps/documentation/javascript/tutorial <- Loading the map/Dynamic loading

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAy6qaNJOjP75X89IBmDmOYiYKr4qwqYKg&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  startmap();
} 

// Append the 'script' element to 'head'
document.head.appendChild(script);


//setting the locations for demo defib data around worcester using static variables
var defib1;
defib1 = {lat: 52.1912156, lng: -2.181245};

var defib2;
defib2 = {lat: 52.190033, lng: -2.2263984};

var defib3;
defib3 = {lat: 52.1937585, lng: -2.2260509};

//setting the demo location to worcester so the user can test functionality 
var worc;
worc = {lat: 52.195877, lng: -2.225772};


/*This function was origionally intended to draw the map centered on the device GPS location,
However currently uses the UserlatLong variable which uses the static values for lat and long.

Gets the map canvas element from the html file */

	/*window.onload=*/function startmap(){
    var mapDiv = document.getElementById("map_canvas");
    var Userlatlng = new google.maps.LatLng(latitude, longitude);
//Setting the options for the map
    var options = {
      center: Userlatlng,
      zoom: 16,
      
    };
// draws the map using the options defined above
    var map = new google.maps.Map(mapDiv, options);
	
	
//This code sets the center of the map to Worcester for demonstration purposes using the "Demo" button in the footer
//linking to the demo button	
	google.maps.event.addDomListener(document.getElementById('GoWorc'), 'click', function () {
//Setting the new center to demo location (Worcester)
    map.setCenter(new google.maps.LatLng(52.195877,-2.225772));
	
	
//Sets a new "Position" Marker in worc, for demo purposes	
	var marker1 = new google.maps.Marker({
      position: worc,
      map: map,
      title: 'Worcester',
	  icon: iconbase2 + 'man.png'
    });
});
//The following code is used to add markers to the map, code based on the google tutorial:
//https://developers.google.com/maps/documentation/javascript/custom-markers

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
//The following code is used to draw the directions to the defibrillator using polylines:
//https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#try-it-yourself
	
	google.maps.event.addDomListener(document.getElementById('GoDefib'), 'click', function () {

	var DefibCoordinates = [
          {lat: 52.195877, lng: -2.225772},
		  {lat: 52.196060, lng: -2.226028},
		  {lat: 52.195532, lng: -2.227189},  
		  {lat: 52.194608, lng: -2.227318},
		  {lat: 52.194373, lng: -2.227063},
		  {lat: 52.194129, lng: -2.227091},
		  {lat: 52.194021, lng: -2.227221},
		  {lat: 52.193608, lng: -2.227257},
          {lat: 52.1937585, lng: -2.2260509}, 
          
        ];
        var defibpath = new google.maps.Polyline({
          path: DefibCoordinates,
          geodesic: true,
          strokeColor: '#0000ff',
          strokeOpacity: 1.0,
          strokeWeight: 4
        });

        defibpath.setMap(map);
	

	
});
	

}


