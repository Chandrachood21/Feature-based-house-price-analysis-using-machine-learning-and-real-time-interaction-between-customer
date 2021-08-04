const firebaseConfig = {
    apiKey: "AIzaSyDp1GoA9MideUopQ2d7RDk03rJSE-0cAqc",
  authDomain: "minor-project-7b712.firebaseapp.com",
  databaseURL: "https://minor-project-7b712-default-rtdb.firebaseio.com",
  projectId: "minor-project-7b712",
  storageBucket: "minor-project-7b712.appspot.com",
  messagingSenderId: "409684465723",
  appId: "1:409684465723:web:4453d095a16133bc84a41e",
  measurementId: "G-5F8BFBQ5JR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var database = firebase.database();

function upload()
{
    var image = document.getElementById("image").files[0];
    var name = document.getElementById("name1").value;
    var rate = document.getElementById("rate").value;
    var lcn = document.getElementById("lcn").value;
    var avail = document.getElementById('avl').value;
    var sqfeet = document.getElementById("sqfeet").value;
    var size = document.getElementById("size").value;

    var uname = localStorage.getItem('uname');
    var email = localStorage.getItem('email');
    var imageName = image.name;
    var storageRef = firebase.storage().ref('images/'+imageName);
    var uploadTask = storageRef.put(image);
    uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is "+progress+" done");
    },function(error){
        console.log(error.message);
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            //alert(downloadURL);
            database.ref('users/' + uname + '/' + name).set({
                user_name : uname,
                email : email,
                property_name : name,
                property_rate : rate,
                image_url : downloadURL,
                location : lcn,
                availability : avail,
                sq_ft : sqfeet,
                size : size,
                extr : [{"iur":"oh oh"}]
            })
            alert("saved");
        })
    })
}

function jj()
{
    alert(localStorage.getItem("email"));
}