'use strict'
let money = prompt("Ваш бюджет на месяц?"),
time = prompt("Введите дату в формате YYYY-MM-DD");
let firstQuestionAnswer = prompt("Введите обязательную статью расходов в этом месяце");
let secondQuestionAnswer = prompt("Во сколько обойдется?");
let expenses = {
    firstQuestionAnswer,
    secondQuestionAnswer
   };

let optionalExpenses = {
  
   };

let income = [

   ];
let appData = {
    budget: money,
    timeData: time,
    expenses,
    optionalExpenses,
    income,
    saving: false
   };

console.log(appData);
alert("Бюджет на 1 день: " + time/30);