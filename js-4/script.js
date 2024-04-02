// function calculateDateDifference(date1, date2) {
//     var firstDate = new Date(date1);
//     var secondDate = new Date(date2);

//     var difference = secondDate - firstDate;

//     var yearDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
//     difference -= yearDifference * (1000 * 60 * 60 * 24 * 365.25);
//     var monthDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
//     difference -= monthDifference * (1000 * 60 * 60 * 24 * 30.44);
//     var dayDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

//     return {
//         years: yearDifference,
//         months: monthDifference,
//         days: dayDifference
//     };
// }

// function calculateAndDisplay() {
//     var date1 = document.getElementById("date1").value;
//     var date2 = document.getElementById("date2").value;

//     var difference = calculateDateDifference(date1, date2);

//     var resultElement = document.getElementById("result");
//     resultElement.textContent = difference.years + "." + difference.months + "." + difference.days;
// }



function calculateDateDifferenceInDays(date1, date2) {
    var oneDay = 24 * 60 * 60 * 1000; 
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    var differenceInDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return differenceInDays;
}

function calculateAndDisplay() {
    var date1 = document.getElementById("date1").value;
    var date2 = document.getElementById("date2").value;

    var differenceInDays = calculateDateDifferenceInDays(date1, date2);

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Gun Ferqi: " + differenceInDays + " gun";
}




var students = [
    { ad: "Ali", soyad: "Aliyev", girisBali: 60, cixisBali: 75 },
    { ad: "Ayse", soyad: "Mehmedova", girisBali: 55, cixisBali: 70 },
    { ad: "Nəzərin", soyad: "Nəzərov", girisBali: 45, cixisBali: 80 },
    { ad: "Fatma", soyad: "Fatmazadə", girisBali: 40, cixisBali: 60 },
    { ad: "Məmməd", soyad: "Məmmədov", girisBali: 70, cixisBali: 45 },
    { ad: "Səma", soyad: "Səmazadə", girisBali: 30, cixisBali: 35 }
];

var filteredStudents = students.filter(function(student) {
    return !(student.cixisBali < 17 || student.girisBali + student.cixisBali < 51);
});

console.log(filteredStudents);