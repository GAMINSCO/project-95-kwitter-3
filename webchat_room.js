
const firebaseConfig = {
      apiKey: "AIzaSyDlxNbCj5JPl1N-C2Cmjn6mJP6JX_ZEi4s",
      authDomain: "kwitter-6a600.firebaseapp.com",
      databaseURL: "https://kwitter-6a600-default-rtdb.firebaseio.com",
      projectId: "kwitter-6a600",
      storageBucket: "kwitter-6a600.appspot.com",
      messagingSenderId: "307522776790",
      appId: "1:307522776790:web:fc9e7fe7f62592ebd0e377"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("user_name")
document.getElementById("wlcm-msg").innerHTML = "Welcome " + userName + "!"

function addroom() {
      roomname = document.getElementById("room-name").value
      firebase.database().ref("/").child(roomname).update({
            purpose: "Room Name"
      })
      localStorage.setItem("roomname", roomname);
      window.location = "webchat_page.html"
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("room-div").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("roomname :" + Room_names)
                  row = "<div class='room_name' id='" + Room_names + "' onclick='redirect(this.id)'># " + Room_names + "</div><hr>"
                  document.getElementById("room-div").innerHTML += row

            });
      });
}
getData();

function redirect(name) {
      localStorage.setItem("roomname", name);
      window.location = "webchat_page.html"
}

function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("user_name");
      window.location = "webchat.html";
}