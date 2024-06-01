document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('.btn-enviar');
  const myForm = document.getElementById('myForm');
  const message = document.getElementById("mensaje");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearErrors();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("cell-phone").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;
    if (!name) {
      showError("name", "Ingrese su nombre.");
      valid = false;
    }
    if (!email || !emailRegex.test(email)) {
      showError("email", "Ingrese un email válido.");
      valid = false;
    }
    if (!phone || !/^[0-9]*$/.test(phone)) {
      showError("cell-phone", "Ingrese su teléfono.");
      valid = false;
    }
    if (!message.value) {
      showError("mensaje", "Ingrese su mensaje.");
      valid = false;
    }
    if (message.value.length > 150) {
      showError("mensaje", "Ingrese menos de 150 caracteres.");
      valid = false;
    }

    if (valid) {
      showSuccessMessage();
      clearFormFields();
    }
  });

  function contador(msj) {
    const charCount = document.getElementById('count');
    const maxLength = 150;
    const length = msj.value.length;
    const remaining = maxLength - length;
    charCount.textContent = remaining;
    if (length > maxLength) {
      charCount.classList.add('error');
    } else {
      charCount.classList.remove('error');
    }
  }

  message.addEventListener("input", () => contador(message));

  function showError(fieldId, errorMessage) {
    const errorSpan = document.getElementById(fieldId + "Error");
    errorSpan.textContent = errorMessage;
  }

  function clearErrors() {
    const errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach((span) => {
      span.textContent = "";
    });
  }

  function clearFormFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cell-phone").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById('count').textContent = "150";
  }

  function showSuccessMessage() {
    const successMessage = document.createElement("div");
    successMessage.classList.add("mensajeExitoso");
    successMessage.textContent = "Mensaje Enviado";
    button.parentNode.appendChild(successMessage);

    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  }
});