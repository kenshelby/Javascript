// script.js

let isLogin = false;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById('formTitle').textContent = isLogin ? 'Login' : 'Signup';
  document.querySelector('button').textContent = isLogin ? 'Login' : 'Sign Up';
  document.querySelector('.toggle').textContent = isLogin ? 'New here? Signup' : 'Already have an account? Login';
  
  // Hide name field in login mode
  document.getElementById('nameField').style.display = isLogin ? 'none' : 'block';
  document.getElementById('confirmPasswordField').style.display = isLogin ? 'none' : 'block';
  document.getElementById('toggleConfirmPassword').style.display = isLogin ? 'none' : 'block';
}

function handleSubmit() {
  const name = document.getElementById('nameField').value;
  const email = document.getElementById('emailField').value;
  const password = document.getElementById('passwordField').value;
  const confirmPassword = document.getElementById('confirmPasswordField').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (isLogin) {
    // Login logic
    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
      alert(`Welcome back, ${storedUser.name}!`);
    } else {
      alert("Invalid email or password!");
    }
  } else {
    // Signup logic
    if (localStorage.getItem(email)) {
      alert("User already exists. Try logging in.");
    } else {
      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      alert("Signup successful! Now log in.");
      toggleForm(); // switch to login
    }
  }

  // Clear fields
  document.getElementById('nameField').value = '';
  document.getElementById('emailField').value = '';
  document.getElementById('passwordField').value = '';
  document.getElementById('confirmPasswordField').value = '';
}


// Toggle Password Visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('passwordField');
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? '🙈' : '👁️';
  });
  
  // Toggle Confirm Password Visibility
  document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
    const confirmInput = document.getElementById('confirmPasswordField');
    const isPassword = confirmInput.type === 'password';
    confirmInput.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? '🙈' : '👁️';
});
  
  