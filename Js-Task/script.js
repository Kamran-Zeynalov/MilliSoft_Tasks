// var number = prompt("Zəhmət olmasa bir ədəd daxil edin:");

// if (number % 2 === 0) {
//     console.log("cütdür.");
// } else {
//     console.log("təkdir.");
// }



// var a = 1;
// var b = 6;
// var c = 9;

// var boyuk = Math.max(a, b, c);
// var kicik = Math.min(a, b, c);
// console.log("Ən böyük ədəd: " + boyuk);
// console.log("Ən kiçik ədəd: " + kicik);



// var cem = 1;
// var hasil = 1;

// for (let i = 2; i <= 10; i++) {
//    cem +=i; 
//    hasil *=i
// }
// console.log(cem);
// console.log(hasil);



// var cütler = [];
// var cem = 0;
// var hasil = 1;

// for (var i = 2; i <= 100; i += 2) {
//     cütler.push(i);
//     cem += i;
//     hasil *= i;
// }

// console.log("Cüt ədədlər: " + cütler.join(", "));
// console.log("Cəm: " + cem);
// console.log("Hasil: " + hasil);


// var bölünənlər = [];

// for (var i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         bölünənlər.push(i);
//     }
// }

// console.log("3 reqemli 7 və 8-ə bölünən ədədlər: " + bölünənlər.join(", "));


// var cəm = 0;

// for (var i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         cəm += i;
//     }
// }

// console.log("3 rəqəmli ədədlər içərisində 7 və 8-ə bölünən ədədlərin cəmi: " + cəm);



// var result = false;
// var first;

// for (var i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         first = i;
//         result = true;
//         break;
//     }
// }

// if (result) {
//     console.log("3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədəd: " + first);
// } else {
//     console.log("3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədəd tapılmadı.");
// }



// var last;

// for (var i = 999; i >= 100; i--) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         last = i;
//         break;
//     }
// }

// if (last) {
//     console.log("3 rəqəmli 7 və 8-ə bölünən son ədəd: " + last);
// } else {
//     console.log("3 rəqəmli 7 və 8-ə bölünən ədəd tapılmadı.");
// }



// var a = 0;
// var b = 0;

// for (var i = 100; i <= 999; i++) {
//    a += i;
//    b++
// }

// console.log("ededi orta " + a/b);



// var birinciReqem = parseFloat(prompt("Zəhmət olmasa birinci rəqəmi daxil edin:"));
// var ikinciReqem = parseFloat(prompt("Zəhmət olmasa ikinci rəqəmi daxil edin:"));
// var emel = prompt("Zəhmət olmasa bir riyazi əməl daxil edin (+, -, *, /):");

// // Əməli tətbiq etmək və nəticəni ekrana çap etmək
// switch (emel) {
//     case '+':
//         console.log(birinciReqem + " + " + ikinciReqem + " = " + (birinciReqem + ikinciReqem));
//         break;
//     case '-':
//         console.log(birinciReqem + " - " + ikinciReqem + " = " + (birinciReqem - ikinciReqem));
//         break;
//     case '*':
//         console.log(birinciReqem + " * " + ikinciReqem + " = " + (birinciReqem * ikinciReqem));
//         break;
//     case '/':
//         console.log(birinciReqem + " / " + ikinciReqem + " = " + (birinciReqem / ikinciReqem));
//         break;
//     default:
//         console.log("Daxil etdiyiniz əməl yanlışdır. +, -, *, / əməllərindən birini daxil edin.");
// }



// var eded = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin:"));

// for (var i = 100; i < 1000; i++) {
//     if (eded % i === 0) {
//         console.log(i);
//     }
// }


// var eded = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin:"));

// for (let i = 0; i <= eded; i++) {

//     if(eded % i ===0)
//     {
//         console.log(i);
//     }
// }


// var sadə_ədədlər = [];

// for (var i = 2; i <= 100; i++) {
//     var sadə = true;
//     for (var j = 2; j < i; j++) {
//         if (i % j === 0) {
//             sadə = false;
//             break;
//         }
//     }
//     if (sadə) {
        
//         console.log("Sade ededler: " + sadə_ədədlər.push(i));
//     }
// }


// var sadə_olmayan_ədədlər = [];


// for (var i = 2; i <= 100; i++) {
//     var sadə = true;
//     // Ədədi 1-dən özünə qədər yoxlayırıq
//     for (var j = 2; j < i; j++) {
//         if (i % j === 0) {
//             sadə = false;
//             break;
//         }
//     }
//     if (!sadə) {
//         console.log("Murekkeb ededler: " + sadə_olmayan_ədədlər.push(i));
//     }
// }



// var kombinasiyalar = [];

// for (var i = 1; i < 12; i++) {
//     for (var j = i + 1; j < 12; j++) {
//         var cem = i + j;
//         if (cem === 12) {
//             kombinasiyalar.push([i, j]);
//         }
//     }
// }

// console.log("12 ədədi cəmi ola bilər: ");
// kombinasiyalar.forEach(function (kombinasiya) {
//     console.log(kombinasiya[0] + " + " + kombinasiya[1]);
// });


var x = 5;
var y = 6;

console.log("Əvvəl: ");
console.log("x =", x);
console.log("y =", y);

[x, y] = [y, x];

console.log("Sonra:");
console.log("x =", x);
console.log("y =", y);


