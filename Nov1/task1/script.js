const form = document.getElementById("form");
const nameToolTip = document.querySelector(".age");
const ageToolTip = document.querySelector(".address");
const addressToolTip = document.querySelector(".name");
const result = document.querySelector(".result");
const validate = document.getElementById("validate");
const clearBtn = document.getElementById("clear");
const submitBtn = document.getElementById("submit");

let savedData = JSON.parse(localStorage.getItem("studentForm")) || [];

window.addEventListener("load", () => {
  clearBtn.disabled = Object.keys(savedData).length === 0;

  if (savedData.name) document.getElementById("name").value = savedData.name;
  if (savedData.age) document.getElementById("age").value = savedData.age;
  if (savedData.address)
    document.getElementById("address").value = savedData.address;
  if (savedData.gender)
    document.getElementById("gender").value = savedData.gender;

  if (savedData.isPass) {
    const isPass = document.querySelector(
      `input[name="exam"][value="${savedData.isPass}"]`
    );
    if (isPass) isPass.checked = true;
  }

  if (savedData.favSub) {
    let favSub = savedData.favSub;
    console.log(favSub);
    favSub.map((sub) => {
      let subject = document.querySelector(
        `input[name="fav-sub"][value="${sub}"]`
      );
      subject.checked = true;
    });
  }
});

form.addEventListener("input", () => {
  clearBtn.disabled = false;
});

clearBtn.addEventListener("click", () => {
  form.reset();
  clearBtn.disabled = true;
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const gender = document.getElementById("gender").value;
  const isPass =
    document.querySelector('input[name="exam"]:checked')?.value || "";
  const favSub = [
    ...document.querySelectorAll('input[name="fav-sub"]:checked'),
  ].map((sub) => sub.value);

  const student = { name, age, address, gender, isPass, favSub };

  savedData.push(student);
  localStorage.setItem("studentForm", JSON.stringify(savedData));
  console.log(student);
  console.log(savedData);
  console.log(Array.isArray(savedData));
});
