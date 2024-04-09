var array = [
    {
        text: "Salam Salam Salam",
        name: "Kamran Zeynalov"
    },
    {
        text: "Necesen Necesen Necesen",
        name: "Zeynalov Zeynalov"
    },
    {
        text: "Sagol Sagol Sagol",
        name: "Zeynalov Kamran"
    }
];

var currentIndex = 0;

var button = document.querySelector(".form-1 button");
var textElement = document.querySelector(".form-1 .text");
var nameElement = document.querySelector(".form-1 .name");

textElement.innerHTML = array[currentIndex].text;
nameElement.innerHTML = array[currentIndex].name;

button.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % array.length;
    textElement.innerHTML = array[currentIndex].text;
    nameElement.innerHTML = array[currentIndex].name;
});