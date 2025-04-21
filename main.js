function mockLogin() {
  alert("Simulating Gmail login...");
  window.location.href = "student.html"; // mock route based on role
}

function startFeedback() {
  document.getElementById("pokeball-ui").style.display = "block";
  setTimeout(() => {
    alert("25-minute timer started. Game starts after feedback.");
  }, 500);
}
