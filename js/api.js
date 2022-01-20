// JavaScript Document - Marcus Palmer

$( document ).ready(function() {
	
	
//Create an object (Ready state 0 Unsent) - Marcus Palmer
var balsAppRequest = new XMLHttpRequest();

// Variable to hold output and put data in ID container - Marcus Palmer
var output = document.getElementById('output');
var header = document.getElementById('header');
var postcode = document.getElementById('postcode');


//Grab button - Marcus Palmer
var buttonClick = document.getElementById('searchBtn');

// Variable to hold and push data to HTML container - Marcus Palmer
let balsPushData ="";
	
//load the following function - Marcus Palmer
loadBalsAppRequest();


//Add event listener for wwhn button is clicked, once clicked fire off function - Marcus Palmer
buttonClick.addEventListener('click', function(){
	
	
})

//function to load bals app request
function loadBalsAppRequest(){
balsAppRequest.onreadystatechange = function(){
	
	// Print ready state and change in browser console - Marcus Palmer
	//console.log('state changed',balsAppRequest.readyState,balsAppRequest.status)
	
	// If the ready state is 4 then do the following - Marcus Palmer
	if(balsAppRequest.readyState ==4){
		
		// If the ready status is 200 then do the following - Marcus Palmer
		if(balsAppRequest.status ==200){
			
			// Print in browser console the following message - Marcus Palmer
			//console.log(balsAppRequest.responseText)
			
			// Create variable to hold json data - Marcus Palmer
			var jsonData = JSON.parse(balsAppRequest.responseText);
			//console.log(jsonData.records)
			
			//Create variable and grab array values - Marcus Palmer
			var data = jsonData.records;
			
			// Create foreach  loop - Marcus Palmer
			data.forEach(element);
			
			var divElement = document.getElementById('output');
			
			// Create a basic button element - Marcus Palmer
			var button = document.createElement('button');
			
 			
			// Add some text to the button - Marcus Palmer
  			button.innerHTML = 'More Info';
			
			// Find the element with the id  output and attached text varible to it - Marcus Palmer
			document.getElementById('output').innerHTML = balsPushData;
			
			// Create function to grab items and index of item - Marcus Palmer
			function element(item, index){
				
				//Change the numbering index starting point from 0 to 1 - Marcus Palmer
				index = index +1;
			
				//Add the following content to the varible text - Marcus Palmer
				
				// SUDO CODE - Marcus Palmer
				// Create a list item
				// Create a div
				// Create header 2 
				// Use index varible to display numbering systems
				// Label - Postcode
				// Access dataset aggrogate through fields, postcode 
				// Line break
				// Label - Local Authority
				// Access dataset aggrogate through fields, local_authority 
				// Line break
				// Label - Status
				// Access dataset aggrogate through fields, status 
				// Line break
				// Label - Parliamentary Constituency
				// Access dataset aggrogate through fields, parliamentary_constituency 
				// Line break
				// Label - Travel to Work Area
				// Access dataset aggrogate through fields, travel_to_work_area_2011 
				// Line break
				// Label - LSOA11 Local Name
				// Access dataset aggrogate through fields, lsoa11_local_name 
				// Line break
				// Label - Workplace Zone WZ11
				// Access dataset aggrogate through fields, workplace_zone_wz11 
				// Line break
				balsPushData += "<li><div class='uk-card uk-card-default uk-card-body uk-text-center'><div class='uk-card-badge uk-label'>" + index +"</div>" 
						+ "<h3 class='uk-card-title'>Postcode: " + item.fields.postcode + "</h3><div class='uk-text-left'><strong>Local Authority</strong>: " +item.fields.local_authority 
						+ "<br><strong>Status</strong>: " +item.fields.status
						+ "<br><strong>Parliamentary Constituency</strong>: " +item.fields.parliamentary_constituency +
						"<br><strong>Travel to Work Area</strong>: " +item.fields.travel_to_work_area_2011 +
						"<br><strong>LSOA11 Local Name</strong>: " +item.fields.lsoa11_local_name +
						"<br><strong>Workplace Zone WZ11</strong>: " +item.fields.workplace_zone_wz11 +
						"</div><div class='uk-margin-small-top uk-text-center'><button class='uk-button uk-button-small uk-button-secondary'>More Info</button> <button class='uk-button uk-button-small uk-button-fxprodesign'>Map</button></div></div></li>";
					
			}
			
			// Print ini browser console the parsed through JSON data - Marcus Palmer
			console.log(jsonData)
		}
	}
}

// Ajax state set to open using GET as the method and open data bristol API link as the 2nd parameter and true as the third parameter to enable asynchronous data retrieval (Ready State 1 Opened) - Marcus Palmer
balsAppRequest.open('GET','http://opendata.bristol.gov.uk/api/records/1.0/search/?dataset=postcode-lookup-for-the-west-of-england-february-2018-copy&q=&rows=60&facet=status&facet=local_authority', true)

//Ajax send state - Marcus Palmer
balsAppRequest.send();
}
});
