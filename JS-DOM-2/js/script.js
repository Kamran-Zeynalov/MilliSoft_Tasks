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
  var items = document.getElementsByClassName("image-name");

  if (category == "all") {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("hidden");
    }
  } else {
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(category)) {
        items[i].classList.remove("hidden");
      } else {
        items[i].classList.add("hidden");
      }
    }
  }
}

var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var volume = document.querySelector("#Volume");
var widthElement = document.querySelector("#width-p");
widthElement.style.width = "50%";
minus.addEventListener("click", Decrease);
plus.addEventListener("click", Increase);
volume.addEventListener("click", Volume);

function Volume() {
  var distance = event.clientX - this.getBoundingClientRect().left;
  var resul = Math.floor((distance * 100) / 400);
  widthElement.style.width = resul + "%";
  document.querySelector("#olcu").innerHTML = widthElement.style.width;
}
function Decrease() {
  var currentWidth = parseInt(widthElement.style.width) || 0;
  if (currentWidth <= 5) {
    widthElement.style.width = "0%";
    alert("Minimum voice: " + widthElement.style.width);
    document.querySelector("#olcu").innerHTML = widthElement.style.width;
  } else {
    widthElement.style.width = currentWidth - 10 + "%";
    document.querySelector("#olcu").innerHTML = widthElement.style.width;
  }
}
function Increase() {
  var currentWidth = parseInt(widthElement.style.width) || 0;
  if (currentWidth >= 95) {
    widthElement.style.width = "100%";
    alert("Maximum voice: " + widthElement.style.width);
    document.querySelector("#olcu").innerHTML = widthElement.style.width;
  } else {
    widthElement.style.width = currentWidth + 10 + "%";
    document.querySelector("#olcu").innerHTML = widthElement.style.width;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  var totalImages = document.querySelectorAll(".images-sli img").length;

  function showImage(index) {
    var images = document.querySelectorAll(".images-sli img");
    var mainImage = document.querySelector(".image-sli img");
    mainImage.src = images[index].src;
  }

  showImage(currentIndex);
  document
    .querySelector(".bi.bi-arrow-left-circle-fill")
    .addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  document
    .querySelector(".bi.bi-arrow-right-circle-fill")
    .addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  document.querySelectorAll(".images-sli img").forEach(function (img) {
    img.addEventListener("click", function () {
      var main = document.querySelector(".image-sli img");
      main.src = img.src;
    });
  });
});

var currentPage = 1;
var totalPages = 10;

function initPagination() {
  var pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (var i = 1; i <= totalPages; i++) {
    var button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", function () {
      currentPage = parseInt(this.innerText);
      showPage(currentPage);
    });
    pagination.appendChild(button);
  }

  showPage(currentPage);
}

function showPage(page) {
  var buttons = document.querySelectorAll(".pagination button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
    if (parseInt(button.innerText) === page) {
      button.classList.add("active");
    }
  });

  var content = document.getElementById("content");
  content.innerText = "Item " + page;
}

document.addEventListener("DOMContentLoaded", function () {
  initPagination();
});

var arry = [
  {
    id: 1,
    name: "Kamran",
    surname: "Zeynalov",
    age: 20,
  },
];
let Name;
let Surname;
let Age;
let i = 1;
let lastId = 0;
let table = document.querySelector(".table_body");
function getData() {
  table.innerHTML = "";
  arry.forEach((user) => {
    table.innerHTML += `
    <tr user_id = "${user.id}">
      <td>${i++}</td>
      <td>${user.name}</td>
      <td>${user.surname}</td>
      <td>${user.age}</td>
      <td><i class="bi bi-pencil-square" onclick="editPerson(this)"></i></td>
      <td><i class="bi bi-trash3"onclick="deletePerson(this)"></i></td>
    </tr>
`;
    lastId = user.id + 1;
  });
}

getData();

newRow.addEventListener("click", function () {
  modal2.style.display = "block";
});

function closeModal() {
  newUserName.value = "";
  newUserSurname.value = "";
  newUserAge.value = "";
  modal2.style.display = "none";
}

newPerson.addEventListener("click", function () {
  let user_name = newUserName.value;
  let user_surname = newUserSurname.value;
  let user_age = newUserAge.value;
  let newuser = {
    id: lastId,
    name: user_name,
    surname: user_surname,
    age: user_age,
  };
  arry.push(newuser);
  getData();
  closeModal();
});

function deletePerson(deleted) {
  let user_id = deleted.parentElement.parentElement.getAttribute("id");
  let f2 = arry.filter((user) => user == user_id)[0];
  let index = arry.indexOf(f2);
  arry.splice(index, 1);
  deleted.parentElement.parentElement.remove();
  getData();
}

function closeModal2() {
  editUserName.value = "";
  editUserSurname.value = "";
  editUserAge.value = "";
  modal3.style.display = "none";
}

function editPerson(edited) {
  let row = edited.parentElement.parentElement;
  let user_id = row.getAttribute("user_id");
  let e_name = row.children[1].innerText;
  let e_surname = row.children[2].innerText;
  let e_age = row.children[3].innerText;

  inputss.innerHTML = `
  <div id="modal3" style="display: none;" user_id=${user_id}>
  <h5>edit Person</h5>
  <input type="text" name="" id="editUserName" placeholder="name" value="${e_name}"><br>
  <input type="text" name="" id="editUserSurname" placeholder="surname" value="${e_surname}">
  <br><input type="number" name="" id="editUserAge" placeholder="age" value="${e_age}">
  <br><button classs="button1" id="Change">edit</button>
  <button class="closee" id="closee" onclick="closeModal2()">close</button>
  </div>
  `;
  modal3.style.display = "block";
  Change.addEventListener("click", function () {
    let c_name = editUserName.value;
    let c_surname = editUserSurname.value;
    let c_age = editUserAge.value;
    let user_idm = modal3.getAttribute("user_id");
    console.log(user_idm);
    let rows = document.querySelectorAll(".table_body tr");
    rows.forEach((row) => {
      if (row.getAttribute("user_id") == user_idm) {
        row.children[1].innerText = c_name;
        row.children[2].innerText = c_surname;
        row.children[3].innerText = c_age;
      }
    });

    closeModal2();
  });
}
