var prices = [33,26,99,120,12,45];
var sum = 0;

for (i = 0; i < prices.length; i++){
  var sum = prices[i]+sum;
  console.log("The sum is: ", sum);
}

  for (j=99;j>1;j--){
    if(j === 1){
      console.log("1 crow on the wall. 1crows.");
      console.log("It fell down and became a wight.");
      console.log("There's no one left to defend Westeros now. l");
    }
    else{
      console.log(j + "crows on the wall." + j + "crows.");
      console.log("1 fell down and became a wight.");
      console.log(j-1 + "crows on the wall");
      console.log("");
    }
  }
  var crow = 99
  while (crow > 1){
    console.log(crow + "crows on the wall." + crow + "crows.");
    console.log("1 fell down and became a wight.");
    console.log(crow-1 + "crows on the wall");
    crow = crow - 1;
  }
  console.log("1 crow on the wall. 1 single crow.")
  console.log("It fell down and became a wight.")
  console.log("There's no one left to defend Westeros now.")
