function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (password !== confirm) {
    alert("Password tidak cocok!");
    return;
  }

  // Simpan ke localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registrasi berhasil! Silakan login.");
  showLogin();
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputUsername = document.getElementById("loginUsername").value;
  const inputPassword = document.getElementById("loginPassword").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (inputUsername === storedUsername && inputPassword === storedPassword) {
    // Simpan session login
    localStorage.setItem("loggedInUser", inputUsername);
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah.");
  }
});
