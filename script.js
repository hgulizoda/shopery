//S1
// let str = "How are you doing today?";
// console.log(str.split(" ").join(","));
// console.log(str.split("").join(","));

//S2
// let text = "Today lesson was good!";
// console.log(text.replaceAll("a", "w"));

//S3
// let str2 = "We are learning JavaScript";
// console.log(str2.substring(7, 15));

//S4
// let str3 = "Is JavaScript easy?";
// let number = str3
//   .toLowerCase()
//   .split("")
//   .reduce((num, cur) => {
//     if (cur == "a" || cur == "o" || cur == "e" || cur == "i" || cur == "u") {
//       num++;
//     }
//     return num;
//   }, 0);

// console.log(number + " ta unli harf bor");

//S5
// let str4 = "We love JavaScript";
// console.log(str4.split(" ").reverse().join(" "));

//A1
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// console.log(arr1.concat(arr2));

//A2
// let nums = [3, 1, 4, 2];
// console.log(nums.sort((a, b) => a - b));

//A3
// let arr3 = [2, 4, 7, 8];
// console.log(arr3.find((num) => num % 2 !== 0));

//A4
// let arr4 = [5, 10, 15];
// console.log(arr4.reduce((sum, cur) => acc + cur, 0));

//A5
let arr5 = [1, 2, 3, 4, 5, 6];
console.log(arr5.filter((num) => num % 2 === 0));
