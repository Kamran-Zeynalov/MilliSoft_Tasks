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

function addWork() {
  var workInput = document.getElementById("workName").value;
  var workList = document.getElementById("workList");
  var newListItem = document.createElement("li");
  newListItem.textContent = workInput;
  newListItem.addEventListener("click", function () {
    var activeItems = document.querySelectorAll(".active");
    activeItems.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
  workList.appendChild(newListItem);
  document.getElementById("workName").value = "";
}

function moveActiveWork() {
  var activeItem = document.querySelector(".active");
  if (activeItem) {
    var destinationList = document.getElementById("destinationList");
    destinationList.appendChild(activeItem);
    activeItem.classList.remove("active");
  }
}
function moveActiveDestination() {
  var activeItem = document.querySelector(".active");
  if (activeItem) {
    var destinationList = document.getElementById("workList");
    destinationList.appendChild(activeItem);
    activeItem.classList.remove("active");
  }
}
function moveActiveThreeUl() {
  var activeItem = document.querySelector(".active");
  if (activeItem) {
    var destinationList = document.getElementById("threeUl");
    destinationList.appendChild(activeItem);
    activeItem.classList.remove("active");
  }
}

document.querySelector(".bir").addEventListener("click", moveActiveWork);
document.querySelector(".iki").addEventListener("click", moveActiveDestination);
document.querySelector(".uc").addEventListener("click", moveActiveThreeUl);
document.querySelector(".dord").addEventListener("click", moveActiveWork);

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var img1 = document.getElementById("img1");
var caption = document.getElementById("caption");
var close = document.getElementsByClassName("close")[0];

img.onclick = function () {
  modal.style.display = "block";
  img1.src = this.src;
  caption.innerHTML = this.alt;
};

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

var alls = [
  {
    image: "car1.webp",
    name: "Image 1",
  },
  {
    image: "car2.jpeg",
    name: "Image 2",
  },
  {
    image: "nature1.jpeg",
    name: "Image 3",
  },
  {
    image: "nature2.jpeg",
    name: "Image 4",
  },
  {
    image: "people1.jpeg",
    name: "Image 5",
  },
  {
    image: "people2.jpeg",
    name: "Image 6",
  },
];

var li = document.querySelectorAll(".port-li");
li.forEach(function (item) {
  item.addEventListener("click", function () {
    var activeItems = document.querySelectorAll(".active");
    activeItems.forEach(function (item2) {
      item2.classList.remove("active");
    });
    this.classList.add("active");
  });
});

function filterSelection(category) {
  var items = document.getElementsByClassName('image-name');

  if (category == 'all') {
      for (var i = 0; i < items.length; i++) {
          items[i].classList.remove('hidden');
      }
  } else {
      for (var i = 0; i < items.length; i++) {
          if (items[i].classList.contains(category)) {
              items[i].classList.remove('hidden');
          } else {
              items[i].classList.add('hidden');
          }
      }
  }
}


var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var widthElement = document.querySelector("#width-p");
widthElement.style.width = "50%";
minus.addEventListener("click", Decrease);
plus.addEventListener("click", Increase);

function Decrease() {
  var currentWidth = parseInt(widthElement.style.width) || 0; 
  if(currentWidth <= 0)
  {
    widthElement.style.width = "0%";
    alert("Minimum voice: " + widthElement.style.width);
  }
  else{
    widthElement.style.width = (currentWidth - 10) + "%";
  }
}
function Increase() {
  var currentWidth = parseInt(widthElement.style.width) || 0; 
  if(currentWidth >= 100)
  {
    widthElement.style.width = "100%";
    alert("Maximum voice: " + widthElement.style.width);
  }
  else{
    widthElement.style.width = (currentWidth + 10) + "%";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  var currentIndex = 0;
  var totalImages = document.querySelectorAll(".images-sli img").length;

  function showImage(index) {
      var images = document.querySelectorAll(".images-sli img");
      var mainImage = document.querySelector(".image-sli img");
      mainImage.src = images[index].src;
  }
  showImage(currentIndex);
  document.querySelector(".bi.bi-arrow-left-circle-fill").addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
  });
  document.querySelector(".bi.bi-arrow-right-circle-fill").addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
  });
});


var currentPage = 1;
var totalPages = 10;

function initPagination() {
  var pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (var i = 1; i <= totalPages; i++) {
    var button = document.createElement('button');
    button.innerText = i;
    button.addEventListener('click', function() {
      currentPage = parseInt(this.innerText);
      showPage(currentPage);
    });
    pagination.appendChild(button);
  }

  showPage(currentPage);
}

function showPage(page) {
  var buttons = document.querySelectorAll('.pagination button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
    if (parseInt(button.innerText) === page) {
      button.classList.add('active');
    }
  });

  var content = document.getElementById('content');
  content.innerText = 'Item ' + page;
}

document.addEventListener('DOMContentLoaded', function() {
  initPagination();
});