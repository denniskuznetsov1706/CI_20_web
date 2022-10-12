const validationRegex = {
  email: /^\S+@\S+\.\S+$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  name: /\w{3,30}/,
}

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputs = event.target.getElementsByClassName('form-control');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const name = input.name;
    const value = input.value;
    const regex = validationRegex[name];
    if (regex && !regex.test(value)) {
      window.alert(`Value ${value} for input "${input.name}" is invalid`);
      return;
    }
  }
  window.alert('Form is successfully submitted')
});