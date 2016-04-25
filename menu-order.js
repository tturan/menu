// quiz begins, no answers correct

var totalAsked = 0;

// ask questions
function question(questionText) {
  var answerInput = prompt(questionText);

  var order = [
  ];

  while (i <= order.length){
    order[i] = answerInput;
  };



  }
  console.log("total asked: " + totalAsked );
}


question("What type of meat: chicken, pork, steak?");
question("Beans: black or pinto?");
question("Rice: fried or white?");



// output results
document.write("<p>Your order is: " + order " questions correct.<p>");
