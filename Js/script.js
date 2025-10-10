const form = document.getElementById('emailform');
const resetbutton = document.querySelector('.resetbtn');
const emailInput = document.getElementById('email-input');

const mainpage = document.getElementsByClassName('main-form')[0];
const messagepage = document.getElementsByClassName('message')[0];
const displayemail = document.getElementById('displayemail');

// Create error message <span>
const errormessage = document.createElement('span');
errormessage.textContent = "Valid email required";
errormessage.style.color = 'red';
errormessage.style.fontSize = '0.90em';

emailInput.onfocus = function() {
  if (errormessage.parentNode) {
    errormessage.remove();
  }
};

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (errormessage.parentNode) {
    errormessage.remove();
  }

  if (!validateEmail(emailInput.value.trim())) {
    emailInput.before(errormessage);
  }
  else {
    displayemail.textContent = emailInput.value.trim();
    mainpage.style.display = 'none';
    messagepage.style.display = 'flex';

    form.reset();
  }
});

resetbutton.addEventListener('click', () => {
  messagepage.style.display = 'none';
  mainpage.style.display = 'flex';
});
