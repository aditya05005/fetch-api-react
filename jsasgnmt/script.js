function greetUser() {
  const name = document.getElementById('name').value;
  if (name) {
    document.getElementById('output').innerText = `Hello, ${name}!`;
  } else {
    document.getElementById('output').innerText = 'Please enter your name.';
  }
}
