// var numbers = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Cem: " + sum);




// var arr = [1, 2, 3, 4, 2, 3, 5];
// var uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);




// var arr = [1, 2, "a", "b", 3, "c"];
// var result = arr.filter(element => typeof element === "number");
// console.log(result);



// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// var originalString = "Salam";
// var reversedString = reverseString(originalString);
// console.log(reversedString);



// function reverseSentence(sentence) {
//     var words = sentence.split(" ");
//     var reversedWords = words.reverse();
//     var reversedSentence = reversedWords.join(" ");    
//     return reversedSentence;
// }
// var originalSentence = "Hello World!";
// var reversedSentence = reverseSentence(originalSentence);

// console.log(reversedSentence);


// function numberToWord(number) {
//     var words = ["", "Bir", "İki", "Üç", "Dörd", "Beş", "Altı", "Yeddi", "Səkkiz", "Doqquz"];   
//     if (number >= 1 && number <= 9) {
//         return words[number];
//     } else {
//         return "Daxil edilmiş ədəd uyğun deyil.";
//     }
// }
// var inputNumber = 2;
// var outputWord = numberToWord(inputNumber);
// console.log(outputWord); 



// function isInteger(number) {
//     return Number.isInteger(number);
// }
// var inputNumber = 10;
// var isInt = isInteger(inputNumber);
// console.log(isInt);
// inputNumber = 10.5;
// isInt = isInteger(inputNumber);
// console.log(isInt);


// function countWords(sentence) {
//     var words = sentence.split(" ");
//     return words.length;
// }
// var inputSentence = "Millisoft tasks is so hard";
// var wordCount = countWords(inputSentence);
// console.log(wordCount);


// function removeExtraSpaces(sentence) {
//     return sentence.replace(/\s+/g, ' ');
// }

// var inputSentence = "Millisoft      tasks     is     so    hard.";
// var cleanSentence = removeExtraSpaces(inputSentence);
// console.log(cleanSentence);



// function capitalizeFirstWord(sentence) {
//     var words = sentence.split(" ");
//     var firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
//     var restOfSentence = words.slice(1).join(" ");
//     return firstWord + " " + restOfSentence;
// }
// var inputSentence = "salam dostlar.";
// var capitalizedSentence = capitalizeFirstWord(inputSentence);
// console.log(capitalizedSentence);




// function arraysAreEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// var array1 = [1, 2, 3, 4, 5];
// var array2 = [1, 2, 3, 4, 5];
// console.log(arraysAreEqual(array1, array2));
// var array3 = [1, 2, 3];
// var array4 = [1, 2, 3, 4];
// console.log(arraysAreEqual(array3, array4));





// function ascendingSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len-1; i++) {
//         for (var j = 0; j < len-1-i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// var array = [5, 3, 8, 1, 2];
// console.log(ascendingSort(array)); 





// function replaceADNAwithADNSU(text) {
//     var newText = text.replace(/ADNA/g, "ADNSU");
//     return newText;
// }
// var originalText = "Millisoft ADNA tasks ADNA So ADNA hard!";
// var modifiedText = replaceADNAwithADNSU(originalText);
// console.log(modifiedText);




// function calculateMonthlySalary(hourlyWage, weeklyHours) {
//     var baseWeeklyHours = 40; 
//     var overtimeMultiplier = 2;
//     var monthlySalary = hourlyWage * (weeklyHours > baseWeeklyHours ? baseWeeklyHours + (weeklyHours - baseWeeklyHours) * overtimeMultiplier : weeklyHours);
//     return monthlySalary;
// }

// var hourlyWage = 10;
// var weeklyHours = 45;
// var monthlySalary = calculateMonthlySalary(hourlyWage, weeklyHours);
// console.log("Aylıq əmək haqqı: $" + monthlySalary);





// function sumOfDigits(number) {
//     var numberString = number.toString();
//     var sum = 0;
//     for (var i = 0; i < numberString.length; i++) {
//         sum += parseInt(numberString[i]);
//     }
//     return sum;
// }
// var number = 12345;
// var sum = sumOfDigits(number);
// console.log("Rəqəmlərin cəmi: " + sum);




function countRepeatedWords(text) {
    var words = text.split(" ");   
    var wordCounts = {};
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();       
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }
    var repeatedWords = [];
    for (var word in wordCounts) {
        if (wordCounts[word] > 1) {
            repeatedWords.push({ word: word, count: wordCounts[word] });
        }
    }
    
    return repeatedWords;
}

var text = "Bu bir nümunə mətindir və Bu mətn bir neçə mətn ola bilməz.";
var repeatedWords = countRepeatedWords(text);
console.log(repeatedWords);
