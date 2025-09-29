// Importar Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIUefmLnjvH_mU8TgZyhYa2kUM29gtWuQ",
  authDomain: "formulario-ac2ad.firebaseapp.com",
  projectId: "formulario-ac2ad",
  storageBucket: "formulario-ac2ad.appspot.com",
  messagingSenderId: "1016464405288",
  appId: "1:1016464405288:web:0cf96692ac41a56521161d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
