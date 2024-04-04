// function add() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     var result = num1 + num2;
//     document.getElementById("result").value = result;
// }

// function subtract() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     var result = num1 - num2;
//     document.getElementById("result").value = result;
// }

// function multiply() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     var result = num1 * num2;
//     document.getElementById("result").value = result;
// }

// function divide() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     if (num2 === 0) {
//         alert("0 bolme olmaz");
//     } else {
//         var result = num1 / num2;
//         document.getElementById("result").value = result;
//     }
// }









// function reverseString() {
//     var input = document.getElementById("inputString").value;
//     var reversed = "";
//     for (var i = input.length - 1; i >= 0; i--) {
//         reversed += input[i];
//     }
//     document.getElementById("reversedString").value = reversed;
// }





const designForm = document.getElementById('design-form');
const designDiv = document.getElementById('Design-Div');

designForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const borderWidth = document.getElementById('brd-width').value;
    const borderStyle = document.getElementById('border-style').value;
    const borderColor = document.getElementById('border-color').value;
    const backgroundColor = document.getElementById('background-color').value;

    designDiv.style.width = width + 'px';
    designDiv.style.height = height + 'px';
    designDiv.style.borderWidth = borderWidth + 'px';
    designDiv.style.borderStyle = borderStyle;
    designDiv.style.borderColor = borderColor;
    designDiv.style.backgroundColor = backgroundColor;
});


function increaseWidth() {
    var inputVal = document.getElementById("plusW").value;
    var divWidth = document.getElementById("Design-Div").offsetWidth;
    var newWidth = parseInt(inputVal) + divWidth;
    document.getElementById("Design-Div").style.width = newWidth + "px";
  }