//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCeVrXWPhqFBhSQnrxIQ3dITI2pZLu0tAE",
      authDomain: "kwitter-c5c8b.firebaseapp.com",
      databaseURL: "https://kwitter-c5c8b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c5c8b",
      storageBucket: "kwitter-c5c8b.appspot.com",
      messagingSenderId: "138401786975",
      appId: "1:138401786975:web:1f878019d8e7700fbc7fea",
      measurementId: "G-WCLJXNJCZ5"
};

firebase.initializeApp(firebaseConfig);
User_name = localStorage.getItem("user_name");
document.getElementById("Username").innerHTML = "Welcome " + User_name + "!";

function Addroom() {
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose: "addding_room_name"
      });
      localStorage.setItem("room", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + " </div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();


function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room", room_name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room");
      window.location = "index.html";
}

