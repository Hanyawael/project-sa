function showVisaFields(show) {
    const visaFields = document.getElementById('visa-fields');
    const photo = document.querySelector('.photo img');

    if (show) {
        visaFields.style.display = 'block';
        photo.classList.add('photo-resize'); // Add the resize class
    } else {
        visaFields.style.display = 'none';
        photo.classList.remove('photo-resize'); // Remove the resize class
    }
}

    

    document.getElementById('message').innerText = allValid ? 'order is placed' : 'Please fill out all required fields.';
    document.getElementById('message').style.color = allValid ? 'green' : 'red';

function handleCheckout(event) {
    event.preventDefault(); // Prevent form submission
    alert("order is placed");
  }
