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

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function saveMango() {
  var soilMoisture = document.getElementById('mango_soil_moisture').value;
  if (soilMoisture < 0 || soilMoisture > 2500) {
      alert('Please enter a value between 0 and 2500');
      return;
  }
  database.ref('mango_soil_moisture/').set({
      soil_moisture: soilMoisture
  });
  alert('Saved');
}
