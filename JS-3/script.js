//   function findUniqueElements(arr) {
//     var uniqueElements = [];
//     for (var i = 0; i < arr.length; i++) {
//         var element = arr[i];
//         if (arr.indexOf(element) === arr.lastIndexOf(element)) {
//             uniqueElements.push(element);
//         }
//     }

//     return uniqueElements;
// }
// var array = [1, 2, 3, 4, 5, 1, 3, 2, 6];

// var uniqueElements = findUniqueElements(array);
// var paragraph = document.querySelector('.screen');
// paragraph.textContent = uniqueElements;




// function countNumbersDivisibleBy5(arr) {
//     var count = 0;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// var array = [10, 15, 20, 25, 30, 35, 40, 45, 50];
// var divisibleBy5Count = countNumbersDivisibleBy5(array);
// var paragraph = document.querySelector('.screen');
// paragraph.textContent = "Array içinde 5-e bölünən ədədlərin sayı: " + divisibleBy5Count;




// function isPrime(number) {
//     if (number < 2) {
//         return false;
//     }
//     if (number === 2) {
//         return true;
//     }
//     if (number % 2 === 0) {
//         return false;
//     }
//     for (var i = 3; i <= Math.sqrt(number); i += 2) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// var number = 18;
// var paragraph = document.querySelector('.screen');
// if (isPrime(number)) {
//  paragraph.textContent = number + " sadədir.";
// } else {
//  paragraph.textContent = number + " sadə deyil.";
// }


// function findLastDivisibleBy7(arr) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 7 === 0) {
//             return arr[i];
//         }
//     }
//     return -1;
// }

// var array = [5, 12, 14, 21, 28, 35, 42];
// var lastDivisibleBy7 = findLastDivisibleBy7(array);
// var paragraph = document.querySelector('.screen');

// paragraph.textContent = lastDivisibleBy7;


// function findMinMax(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     var min = arr[0];
//     var max = arr[0];

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];    
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return { min: min, max: max };
// }
// var array = [5, 12, 9, 25, 7, 36, 15];
// var result = findMinMax(array);
// var paragraph = document.querySelector('.screen');
// paragraph.textContent = "En kiçik element: " + result.min;
// paragraph.textContent += " ------ En böyük element: " + result.max;




// function swapMinMax(arr) {
//     if (arr.length === 0) {
//         return arr;
//     }
//     var minIndex = 0;
//     var maxIndex = 0;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     var temp = arr[minIndex];
//     arr[minIndex] = arr[maxIndex];
//     arr[maxIndex] = temp;
//     return arr;
// }

// var array = [5, 12, 9, 25, 7, 36, 15];
// var swappedArray = swapMinMax(array);
// var paragraph = document.querySelector('.screen');
// paragraph.textContent = swappedArray;





// function findDivisors(number) {
//     var divisors = [];

//     for (var i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             divisors.push(i);
//         }
//     }

//     return divisors;
// }

// var number = parseInt(prompt("Bir ədəd daxil edin:"));

// var divisors = findDivisors(number);

// var screen = document.querySelector('.screen');
// screen.textContent = number + " ədədinin bütün bölənləri: " + divisors.join(", ");







// function getRandomNumberFromArray(arr) {
//     var length = arr.length;
//     var randomIndex = Math.floor(Math.random() * length);
//     var randomNumber = arr[randomIndex];
//     var screen = document.querySelector('.screen');
//     screen.textContent = "ixtiyari reqem: " + randomNumber;
// }
// var array = [5, 12, 9, 25, 7, 36, 15];
// getRandomNumberFromArray(array);






// var result = '';

// for (var i = 1; i <= 100; i += 2) {
//     if (i.toString().includes('1')) {
//         result += i + ', ';
//     }
// }
// var screen = document.querySelector('.screen');
// screen.textContent = "1-dən 100-ə qədər ədədlər içində təkliyi olanlar: " + result;






function checkPalindrome() {
    var input = document.getElementById("input").value.toLowerCase();
    var reversedInput = input.split("").reverse().join("");
    if (input === reversedInput) {
        document.getElementById("result1").textContent = input + " bir palindromdur.";
    } else {
        document.getElementById("result1").textContent = input + " bir palindrom değildir.";
    }
}



function checkAnagram() {
    var word1 = document.getElementById("word1").value.toLowerCase();
    var word2 = document.getElementById("word2").value.toLowerCase();
    var sortedWord1 = word1.split("").sort().join("");
    var sortedWord2 = word2.split("").sort().join("");
    if (sortedWord1 === sortedWord2) {
        document.getElementById("result").textContent = "'" + word1 + "' və '" + word2 + "' anagramdır.";
    } else {
        document.getElementById("result").textContent = "'" + word1 + "' və '" + word2 + "' anagram deyil.";
    }
}






// function multiplyCorrespondingElements(arr1, arr2) {
//     var result = [];
//     if (arr1.length !== arr2.length) {
//         return result;
//     }
//     for (var i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] * arr2[i]);
//     }

//     return result;
// }
// var array1 = [2, 5];
// var array2 = [3, 5];
// var newArray = multiplyCorrespondingElements(array1, array2);
// var screen = document.querySelector('.screen');
// screen.textContent = newArray;





// function removeVowels(text) {
//     return text.replace(/[aeiouAEIOU]/g, '');
// }
// var text = "Burada saitler yoxdur";
// var newText = removeVowels(text);

// var screen = document.querySelector('.screen');
// screen.textContent = newText;
 





// function generateRandomString() {
//     var length = parseInt(document.getElementById("inputNumber").value);
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     document.getElementById("result").textContent = "IXtiyari ArraY: " + result;
// }




// function findAverage(arr) {
//     var length = arr.length;
//     var sum = 0;
//     for (var i = 0; i < length; i++) {
//         sum += arr[i];
//     }
//     var average = sum / length;
//     return average;
// }
// var array = [5, 12, 9, 25, 7, 36, 15];
// var average = findAverage(array);
// console.log("Array ədədi ortası: " + average);


// function countVowelsAndConsonants(text) {
//     var vowelCount = 0;
//     var consonantCount = 0;
//     text = text.toLowerCase();

//     for (var i = 0; i < text.length; i++) {
//         var char = text[i];
//         if (/[a-z]/.test(char)) {
//             if (/[aeiou]/.test(char)) {
//                 vowelCount++;
//             } else {
//                 consonantCount++;
//             }
//         }
//     }
//     return { vowels: vowelCount, consonants: consonantCount };
// }

// var text = "Daxil olunmuş sözdə neçə sait və samit olduğunu tapın";
// var counts = countVowelsAndConsonants(text);

// console.log("Sait sayısı: " + counts.vowels);
// console.log("Samit sayısı: " + counts.consonants);








// function isPerfectNumber(number) {
//     if (number <= 1) {
//         return false;
//     }
//     var sum = 1;
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             sum += i; 
//             if (i !== number / i) {
//                 sum += number / i;
//             }
//         }
//     }
//     return sum === number;
// }
// var number = 28;

// if (isPerfectNumber(number)) {
//     console.log(number + " Perfect Digit .");
// } else {
//     console.log(number + " Not Perfect Digit.");
// }





// function findDigitSum(number) {
//     var sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = Math.floor(number / 10);
//     }

//     return sum;
// }

// var number = 12345;

// var digitSum = findDigitSum(number);
// console.log("Reqemleri cemi: " + digitSum);




// function customSubstring(str, startIndex, length) {
//     if (startIndex < 0) {
//         startIndex = 0;
//     } else if (startIndex > str.length) {
//         startIndex = str.length;
//     }
//     if (length < 0) {
//         length = 0;
//     }

//     return str.slice(startIndex, startIndex + length);
// }

// var text = "Bu bir örnek metindir";
// var subtext = customSubstring(text, 3, 6);
// console.log(subtext);





function customIndexOf(str, searchValue, startIndex) {
    startIndex = startIndex || 0;

    if (startIndex < 0) {
        startIndex = 0;
    }
    if (startIndex > str.length) {
        startIndex = str.length;
    }

    for (var i = startIndex; i < str.length; i++) {
        if (str[i] === searchValue[0]) {
            var found = true;
            for (var j = 0; j < searchValue.length; j++) {
                if (str[i + j] !== searchValue[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
    }
    return -1;
}

var text = "Milli Soft kurs";
var index = customIndexOf(text, "kurs", 0);
console.log(index); 
