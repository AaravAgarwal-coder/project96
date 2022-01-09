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

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();