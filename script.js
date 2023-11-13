var mealCost = Number(prompt("how much was your meal ?(ex: 25.99)"));
var tip = Number(prompt("tip percentage ? (ex: 0.15 for 15%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("how many people are eating ? (min 1)"));

console.log(
  `your meal cost $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}
  your share is $${(total / numOfPeople).toFixed(2)}.
  hope it was deliciouse!`
);



