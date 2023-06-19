// ======================================================
// Практика 1 - Создать кнопку «Сохранить». При клике на
// нее должно открываться диалоговое окно с подтверждением
// сохранения.
// ======================================================

clickMe.addEventListener("click", function () {
  result = confirm("Зберегти зміни?");
  console.log(result);
  if (result === true) {
    clickMe.innerText = "Chapter 2";
    clickMe.style.backgroundColor = "green";
  } else {
    clickMe.innerText = "Chapter 1";
    clickMe.style.backgroundColor = "blue";
  }
});

// ======================================================
// Практика 2 - Создать кнопку и блок с текстом. При
// нажатии на кнопку текст должен исчезнуть.
// ======================================================

clickMe2.addEventListener("click", function () {
  textDiv = document.querySelector(".practice2-div");

  if (textDiv.style.display == "none") {
    clickMe2.innerText = "Click to return it";
    textDiv.style.display = "block";
  } else {
    clickMe2.innerText = "Click to hide the text";
    textDiv.style.display = "none";
  }
});

// ======================================================
// Практика 3 - Создать кнопку. При нажатии на кнопку –
// она должна скрыться.
// ======================================================

clickMe3.addEventListener("click", function () {
  clickMe3.style.display = "none";

  setTimeout(function () {
    result = confirm("Повернути кнопку?");
    if (result == true) {
      clickMe3.style.display = "block";
    } else {
      alert("Ok!");
    }
  }, 2000);
});
