import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const form = document.getElementById("contactForm");
const respuesta = document.getElementById("respuesta");

// Nombre de la colección en Firestore
const coleccion = "contactos";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const direccion = form.direccion.value.trim();
    const mensaje = form.mensaje.value.trim();

      // Validaciones
  if (nombre.length < 3) {
    respuesta.textContent = "El nombre debe tener al menos 3 caracteres.";
    return;
  }

  const telefonoRegex = /^[0-9]{7,15}$/;
  if (!telefonoRegex.test(telefono)) {
    respuesta.textContent = "Ingresa un número de teléfono válido (solo números, mínimo 7 dígitos).";
    return;
  }

  if (direccion.length < 5) {
    respuesta.textContent = "La dirección debe tener al menos 5 caracteres.";
    return;
  }

  if (mensaje.length < 10) {
    respuesta.textContent = "El mensaje debe tener al menos 10 caracteres.";
    return;
  }

    try {
        await addDoc(collection(db, coleccion), {
            nombre,
            telefono,
            direccion,
            mensaje,
            fecha: new Date()
        });
        respuesta.textContent = "¡Formulario enviado con éxito!";
        form.reset();
    } catch (error) {
        console.error("Error al enviar formulario: ", error);
        respuesta.textContent = "Error al enviar el formulario.";
    }
});