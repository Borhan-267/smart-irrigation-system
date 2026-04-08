const firebaseConfig = {
    apiKey: "AIzaSyDaTFUQMhA974lAnXbhOvCKJmu1KrJ5MXY",
    authDomain: "pump-f2595.firebaseapp.com",
    databaseURL: "https://pump-f2595-default-rtdb.firebaseio.com",
    projectId: "pump-f2595",
    storageBucket: "pump-f2595.appspot.com",
    messagingSenderId: "1040291195008",
    appId: "1:1040291195008:web:a3cd300d650c2af15c5e65",
    measurementId: "G-612FP8Z5ES"
  };

  // Initialize Firebase
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

$(document).ready(function () {
    var database = firebase.database();
    
		
		var pump1Status, pump2Status;
		var plant1Settings, plant2Settings;
	// Fetch settings for Mango
	database.ref('plant1/').on("value", function(snap) {
		plant1Settings = snap.val();
		// You can use mangoSettings.frequency and mangoSettings.watering_time
	});
	database.ref('plant2/').on("value", function(snap) {
		plant2Settings = snap.val();
		// You can use mangoSettings.frequency and mangoSettings.watering_time
	});
    database.ref().on("value", function(snap){
		pump1Status = snap.val().plant1.valve_status;
        pump2Status = snap.val().plant2.valve_status;
        if(pump1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
        if(pump2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
    });
    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref('plant1/valve_status');
		if(pump1Status == "1"){
			firebaseRef.set("0");
			pump1Status= "0";
		} else {
			firebaseRef.set("1");
			pump1Status = "1";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref('plant2/valve_status');
		if(pump2Status == "1"){
			firebaseRef.set("0");
			pump2Status= "0";
		} else {
			firebaseRef.set("1");
			pump2Status = "1";
		}
	})
	
	

});
function savePlant1() {
    var soilMoisture = document.getElementById('plant1_soil_moisture').value;
    if (soilMoisture < 0 || soilMoisture > 2500) {
        alert('Please enter a value between 0 and 2500');
        return;
    }
    database.ref('plant1/moisture_threshold').set(soilMoisture);
    alert('Saved');
}

function savePlant2() {
    var soilMoisture = document.getElementById('plant2_soil_moisture').value;
    if (soilMoisture < 0 || soilMoisture > 2500) {
        alert('Please enter a value between 0 and 2500');
        return;
    }
    database.ref('plant2/moisture_threshold').set(soilMoisture);
    alert('Saved');
}

  