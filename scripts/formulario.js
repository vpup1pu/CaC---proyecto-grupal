const button = document.querySelector('.btn-enviar');
const myForm = document.getElementById('myForm');
const message = document.getElementById("mensaje");
//
myForm.addEventListener("submit", (event) => {
  // Detener el envío del formulario
  event.preventDefault();

  // Limpiar mensajes de error anteriores
  clearErrors();

  // Obtener los valores de los campos
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("cell-phone").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar los campos
  if (!name) {
    showError("name", "Ingrese su nombre.");
  }
  if (!email || !emailRegex.test(email)) {
    showError("email", "Ingrese su email.");
  }
  if (!phone || !/^[0-9]*$/.test(phone)) {
    showError("cell-phone", "Ingrese su teléfono.");
  }
  if (!message.value) {
    showError("mensaje", "Ingrese su mensaje.");
  }
  if (message.value.length > 150) {
    showError("mensaje", "Ingrese menos de 150 caracteres.")
  }
  message.addEventListener("input", contador(message));
  // Si todos los campos son válidos, puedes enviar el formulario o hacer otras acciones
});

function contador(msj) {
  const charCount = document.getElementById('count');
  const maxLength = 150;
  const length = msj.value.length;
  const remaining = maxLength - length;
  charCount.textContent = remaining;
  if (length > maxLength) {
    charCount.classList.add('error');
  } else {charCount.classList.remove('error');}
}

function showError(fieldId, errorMessage) {
  const errorSpan = document.getElementById(fieldId + "Error");
  errorSpan.textContent = errorMessage;
}

function clearErrors() {
  const errorSpans = document.querySelectorAll(".error");
  errorSpans.forEach(function (span) {
    span.textContent = "";
  });
}

