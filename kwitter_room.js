
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDCizeod35OnkR0QadJD2-Ixy9SUYYtJEo",
      authDomain: "kwitter-c883e.firebaseapp.com",
      databaseURL: "https://kwitter-c883e-default-rtdb.firebaseio.com",
      projectId: "kwitter-c883e",
      storageBucket: "kwitter-c883e.appspot.com",
      messagingSenderId: "208201068314",
      appId: "1:208201068314:web:6f14fdf1d17b89b57a46a3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
