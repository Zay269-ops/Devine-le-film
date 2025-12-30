<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
  apiKey: "AIzaSyAQSmb3cf46l2vZ3OXsADz0w1xiP4Edybw",
  authDomain: "devine-le-film-27bcb.firebaseapp.com",
  projectId: "devine-le-film-27bcb",
  storageBucket: "devine-le-film-27bcb.firebasestorage.app",
  messagingSenderId: "386156617850",
  appId: "1:386156617850:web:5b37ef15b81b3a0b931bc3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.db = db;
</script>
