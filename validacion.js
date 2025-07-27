// Donation form validation
document
  .querySelector(".donation-form form")
  .addEventListener("submit", function (e) {
    const monto = document.getElementById("monto").value;
    if (monto < 500) {
      alert("El monto mínimo de donación es $500 CLP");
      e.preventDefault();
      return;
    }

    // Validate email format
    const email = document.getElementById("email").value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Por favor ingresa un email válido para ingresarlo");
      e.preventDefault();
    }
  });
