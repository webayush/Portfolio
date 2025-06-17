let form = document.querySelector("form");
let submitBtn = document.getElementById("submit-btn");
let btnText = submitBtn.querySelector(".btn-text");
let icon = submitBtn.querySelector("i");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = new FormData(form);

  // Show loading
  btnText.textContent = "Sending...";
  icon.classList.remove("fa-paper-plane");
  icon.classList.add("fa-spinner", "fa-spin");

  const now = new Date();
  const dateTime = now.toLocaleString();
  data.append("dateTime", dateTime);

  fetch('https://script.google.com/macros/s/AKfycbzio24lJwhTlc8rlvYDC4h6dIKs73JO_sAacl7c2cy53ad7oeu531UdNV5cLoFaBNrs/exec', {
    method: "POST",
    body: data
  })
  .then(res => res.text())
  .then(response => {
    console.log(response);
    form.reset();

    // Hide loading
    btnText.textContent = "Submit";
    icon.classList.remove("fa-spinner", "fa-spin");
    icon.classList.add("fa-paper-plane");

    alert("Thanks for contacting me, I'll get back to you soon.");
  })
  .catch(error => {
    console.error('Error!', error.message);

    // Hide loading even if error occurs
    btnText.textContent = "Submit";
    icon.classList.remove("fa-spinner", "fa-spin");
    icon.classList.add("fa-paper-plane");
  });
});
