// hide and show password

const pass_field = document.querySelector("#password");
const pass_icon = document.querySelector(".pass_s_h");

pass_icon.addEventListener("click", () => {
  if (pass_icon.classList.contains("fa-eye")) {
    pass_icon.classList.replace("fa-eye", "fa-eye-slash");
    pass_field.type = "password";
  } else {
    pass_icon.classList.replace("fa-eye-slash", "fa-eye");
    pass_field.type = "text";
  }
});
