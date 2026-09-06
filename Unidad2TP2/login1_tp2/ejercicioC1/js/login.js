const $submit = document.getElementById("submit");
const $password = document.getElementById("password");
const $username = document.getElementById("username");
const $visible = document.getElementById("visible");
const $form = $submit.form;

$visible.addEventListener("change", () => {
  $password.type = $visible.checked ? "text" : "password";
});

$form.addEventListener("submit", (event) => {
  if (!$username.value.trim() || !$password.value.trim()) {
    return;
  }

  event.preventDefault();
  window.location.href = "home.html";
});
