import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBXx-X-2yZlL_HoshihZLye2MsTyT9S95A",
    authDomain: "contact-609d7.firebaseapp.com",
    databaseURL: "https://contact-609d7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-609d7",
    storageBucket: "contact-609d7.appspot.com",
    messagingSenderId: "762620093090",
    appId: "1:762620093090:web:46ac85db0c95d1edd7adfb"
  };;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  document.getElementById("messageform").addEventListener("submit", submitForm)

  function sendMessage(name, email, message){
    set(ref(db, 'message/'+name),{
        name:name,
        email:email,
        message:message
    });
  }

  function submitForm(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("msg").value;
    document.getElementById("done").innerText = "Done!"
    sendMessage(name, email,message)
  }