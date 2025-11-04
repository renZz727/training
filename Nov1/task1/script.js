const form = document.getElementById("form");
const name = document.getElementById("name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const nameToolTip = document.querySelector(".age");
const ageToolTip = document.querySelector(".address");
const addressToolTip = document.querySelector(".name");
const gender = document.getElementById("gender");
const isPass = document.querySelectorAll(".isPass");
const favSub = document.querySelectorAll(".favSub");
const result = document.querySelector(".result");
const validate = document.getElementById("validate");
const clearBtn = document.getElementById("clear");
const submitBtn = document.getElementById("submit");

// form.addEventListener("click", () => {
//   if (
//     name.value !== "undefined" ||
//     age.value !== "undefined" ||
//     address.value !== "undefined" ||
//     gender.value !== "undefined" ||
//     isPass[0].value !== "undefined" ||
//     isPass[1].value !== "undefined" ||
//     favSub[0].value !== false ||
//     favSub[1].value !== false ||
//     favSub[2].value !== false ||
//     favSub[3].value !== false
//   )
//     clearBtn.style.display = "block";
// });
form.addEventListener('input', () => {
  clearBtn.disabled = false;
});
clearBtn.addEventListener('click', ()=> {
  form.reset();
  clearBtn.disabled = true;
})


// const localData = localStorage.setItem("name" : name.value);
// console.log(localData);

validate.addEventListener("click", () => {
  if (name.value.length > 4) {
    nameToolTip.style.visibility = "visible";
    nameResult = "Name must be within 24 characters";
  } else {
    nameResult = `Name verified: ${name.value}`;
  }
  if (age.value > 30 || typeof address.value === "number") {
    // ageToolTip.classList.add('name:hover')
    ageResult = "Age must be within 30 & must be number";
  } else ageResult = `Age verified: ${age.value}`;

  if (address.value.length > 300)
    addressResult = `Address must be within 300 characters`;
  else addressResult = `Address: ${address.value}`;

  genderResult = `Gender: ${gender.value}`;

  if (isPass[0].checked === true) isPassResult = `isPassed: Yes`;
  else isPassResult = `isPassed: No`;

  favSubjects = "";
  if (favSub[0].checked === true) favSubjects += "Maths ";
  if (favSub[1].checked === true) favSubjects += "English ";
  if (favSub[2].checked === true) favSubjects += "Science ";
  if (favSub[3].checked === true) favSubjects += "Malayalam ";

  console.log(
    nameResult +
      "\n" +
      ageResult +
      "\n" +
      addressResult +
      "\n" +
      genderResult +
      "\n" +
      isPassResult +
      "\n" +
      favSubjects
  );
  result.innerHTML = `
  <ul>
   <li>${nameResult}</li>
   <li>${ageResult}</li>
   <li>${addressResult}</li>
   <li>${genderResult}</li>
   <li>${isPassResult}</li>
   <li>${favSubjects}</li>
  <ul>`;
});
