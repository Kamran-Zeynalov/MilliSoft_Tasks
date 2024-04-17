var array = [
  {
    text: "Salam Salam Salam",
    name: "Kamran Zeynalov",
  },
  {
    text: "Necesen Necesen Necesen",
    name: "Zeynalov Zeynalov",
  },
  {
    text: "Sagol Sagol Sagol",
    name: "Zeynalov Kamran",
  },
];

var currentIndex = 0;

var button = document.querySelector(".form-1 button");
var textElement = document.querySelector(".form-1 .text");
var nameElement = document.querySelector(".form-1 .name");

textElement.innerHTML = array[currentIndex].text;
nameElement.innerHTML = array[currentIndex].name;

button.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % array.length;
  textElement.innerHTML = array[currentIndex].text;
  nameElement.innerHTML = array[currentIndex].name;
});

document.querySelector(".add-nn").addEventListener("click", function () {
  var inp = document.querySelector(".name-result");
  if (inp.value !== "") {
    document.querySelector(".storage").innerHTML +=
      "<p><b>" +
      inp.value +
      "</b> <span><i class='bi bi-trash3'></i></span></p>";
    inp.value = "";
  }
});

document.querySelector(".storage").addEventListener("click", function (event) {
  if (event.target.classList.contains("bi-trash3")) {
    event.target.parentElement.parentElement.innerHTML = "";
  }
});

document.querySelector(".work-added").addEventListener("click", function () {
  var inp = document.querySelector(".work-name");
  if (inp.value !== "") {
    document.querySelector(".first-ul").innerHTML +=
      "<li class='limm'>" + inp.value + "</li>";
    inp.value = "";
  }
});

document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.classList.contains("limm")) {
    if (!event.target.classList.contains("active")) {
      event.target.classList += " active";
    } else {
      event.target.classList.remove("active");
    }
  }
});

document.querySelectorAll(".bir").forEach(function(element) {
    element.addEventListener("click", function () {
        if(document.querySelector(".active"))
        {
            var two = document.querySelector(".w-2");
            two.querySelector(".two-ul").innerHTML += document.querySelector(".active").parentElement.innerHTML;
            document.querySelector(".active").remove()
            
        }
    });
});

