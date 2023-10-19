let isVerified = false;
const captchaBox = document.querySelectorAll(".js-google-recaptcha");
const reCaptchaWidgets = []

var onloadCallback = function () {
  captchaBox.forEach((element) => {
    const widget = grecaptcha.render(element, {
      sitekey: "6Leak5UoAAAAADwTc3Tn8A0UE2ihqOVtFByJew67",
      callback: "verifyCaptcha",
    });
    reCaptchaWidgets.push(widget)
  });
};

function verifyCaptcha() {
  isVerified = true;
}

window.loadScript = function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit`;
  script.defer = true;
  document.body.appendChild(script);
};
window.onload = loadScript;

$(document).ready(function () {
  $('[data-toggle="datepicker"]').datepicker({
    format: "dd/mm/yyyy",
  });
  if (window.innerWidth < 768) {
    const datePicker = $('[data-toggle="datepicker"]');
    datePicker.attr("readonly", "readonly");
    datePicker.css("background-color", "#fff");
  }

  $.validator.addMethod(
    "validEmail",
    function (value, element) {
      return (
        this.optional(element) ||
        /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
          value
        )
      );
    },
    "Please enter a valid email address."
  );

  const rules = {
    rules: {
      location: "required",
      first_name: "required",
      last_name: "required",
      email: {
        required: true,
        validEmail: true,
      },
    },
    messages: {
      location: "Location is required",
      first_name: "First name is required",
      last_name: "Last name is required",
      email: "Email is required",
    },
  };

  //reset form
  $(".nav-form-close-btn").on("click", function () {
    $(".nav-form-wrapper").find("form").validate(rules).resetForm();
    isVerified = false;
    reCaptchaWidgets.forEach((widget, index)=>{
       grecaptcha.reset(widget);
    })
  });

  $("#js-enquire-now").on("click", function () {
    isVerified = false;
    reCaptchaWidgets.forEach((widget, index)=>{
       grecaptcha.reset(widget);
    })
  });

  const preferedRentInput = document.querySelectorAll(".preferred-rent");
  // code for preferred amount counter

  if (preferedRentInput.length === 0) {
    console.error("Preferred input element not found !!");
    return;
  }

  preferedRentInput.forEach(function (ele) {
    const form = $(ele).closest("form");
    form.validate(rules);
  });

  const form = document.querySelectorAll('[name="wf-form-Enquire-Form"]');
  form.forEach((element) => {
    element.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!isVerified) {
        alert("Please confirm you're not a robot.");
        return;
      }

      if (!$(element).valid()) {
        return;
      }
      element.submit();
    });
  });
});
