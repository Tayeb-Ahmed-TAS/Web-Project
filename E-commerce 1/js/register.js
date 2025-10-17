// hide and show password

const pass_field = document.querySelectorAll("#password");
const pass_icon = document.querySelectorAll(".pass_s_h");

for (passIcon of pass_icon) {
  passIcon.addEventListener("click", function () {
    let getPassField = this.previousElementSibling;
    if (this.classList.contains("fa-eye")) {
      this.classList.replace("fa-eye", "fa-eye-slash");
      getPassField.type = "password";
    } else {
      this.classList.replace("fa-eye-slash", "fa-eye");
      getPassField.type = "text";
    }
  });
}

// confirm password validation

const pass_fields = document.querySelectorAll("#password");
const dont_match = document.querySelector(".dont_match");

for (let i = 0; i < pass_fields.length; i++) {
  pass_fields[i].addEventListener("input", function () {
    if (pass_fields[0].value !== pass_fields[1].value) {
      dont_match.classList.add("show_dont_match");
      pass_fields[0].classList.add("red_border");
      pass_fields[1].classList.add("red_border");
    } else {
      dont_match.classList.remove("show_dont_match");
      pass_fields[0].classList.remove("red_border");
      pass_fields[1].classList.remove("red_border");
    }
  });
}

// enable sign up button

const check_box = document.querySelector("#check");
const sign_up_btn = document.querySelector(".sign_up_btn");

sign_up_btn.disabled = true;

check_box.addEventListener("click", () => {
  check_box.checked
    ? (sign_up_btn.disabled = false)
    : (sign_up_btn.disabled = true);
});
