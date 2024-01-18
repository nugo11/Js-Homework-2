//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:
let firstName = "nugo";
let lastName = "khutsishvili";
let age = "24";
let job = "Bussines Owner";
let skills = "Managment | Junior Developer";
let address = "Tbilisi";

let combine =
  "Name: " +
  firstName +
  " " +
  lastName +
  ", age:" +
  age +
  ", Job: " +
  job +
  ", Skills: " +
  skills +
  ", Adress: " +
  address;
console.log(combine);

//2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!

//answer:
let currentYear = new Date().getFullYear();

if (currentYear === 2024) {
  console.log("სწორია");
} else {
  console.log("არასწორია");
}

//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!
let x = 10;

function increment() {
  for (let i = 1; i < x; i++) {
    console.log(i);
  }

  for (let o = x; o > 0; o--) {
    console.log(o);
  }
}
console.log(increment());

//4)
// let a = 10;
// let b = 12;

// let andOperator = a < 9 && b >= 11; //result --> : False
// let orOperator = a > 11 || b < 10; //result --> : False
// let notOperator = !(a > 10); //result --> : True

