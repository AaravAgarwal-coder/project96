// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyCc5y92EFlUnoMoOFHe5MiLDJOSkhmbdJQ",
     authDomain: "redecoraated-kwitter.firebaseapp.com",
     databaseURL: "https://redecoraated-kwitter-default-rtdb.firebaseio.com",
     projectId: "redecoraated-kwitter",
     storageBucket: "redecoraated-kwitter.appspot.com",
     messagingSenderId: "297855994162",
     appId: "1:297855994162:web:50727eadac331558932f2b",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("Username").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
               purpose : "Adding Room Name"
          })
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
           console.log("room_name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML += row;
     //End code
     });});}
     getData();
    function redirectToroomname(name){
         console.log(name);
         localStorage.setItem("Roomname",name);
         window.location = "kwitter_page.html";
    }
    function logout() {
         localStorage.removeItem("Username");
         localStorage.removeItem("Roomname");
         
         window.location="login.html";
    }