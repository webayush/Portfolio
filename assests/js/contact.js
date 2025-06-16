// contact.js

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById('contact-form');
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbzio24lJwhTlc8rlvYDC4h6dIKs73JO_sAacl7c2cy53ad7oeu531UdNV5cLoFaBNrs/exec';


//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const data = {
//       dateTime: new Date(),
//       name: form.name.value,
//       email: form.email.value,
//       phone: form.phone.value,
//       message: form.message.value
//     };
//     alert(JSON.stringify(data, null, 2));
//     alert(scriptURL);
//     fetch(scriptURL, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => res.json())
//     .then(response => {
//       alert("Message sent successfully!");
//       form.reset();
//     })
//     .catch(error => {
//       alert("Something went wrong!!!!");
//       console.error("Error!", error.message);
//     });
//   });
// });





// let form = document.querySelector("form");
//   form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let data = new FormData(form);
//     // Create and format the current date and time string
//   const now = new Date();
//   const dateTime = now.toLocaleString(); // e.g., "6/16/2025, 10:35:12 AM"

//   // Append the dateTime field to the FormData
//   data.append("dateTime", dateTime);
//     fetch('https://script.google.com/macros/s/AKfycbzio24lJwhTlc8rlvYDC4h6dIKs73JO_sAacl7c2cy53ad7oeu531UdNV5cLoFaBNrs/exec', {
//       method: "POST",
//       body : data
//     })
//       .then(res => res.text())
//       .then(data => console.log(data));
//   });





  let form = document.querySelector("form");
  // const messageBox = document.getElementById("form-message");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);

    // Append current date and time
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

      form.reset(); // ✅ Clear all input fields

      // messageBox.style.display = "block"; // ✅ Show thank-you message

      // ✅ Optional: hide message after 5 seconds
      // setTimeout(() => {
      //   messageBox.style.display = "none";
      // }, 5000);
      alert("Thanks for contacting me, I'll get back to you soon.")
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
  });
  
