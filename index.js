const chalk = require('chalk');
var readlinesync=require('readline-sync');
var userName=readlinesync.question("Enter your name: ");
console.log("WELCOME "+ userName +" TO THE FRIENDS TRIVIA!");
console.log(chalk.bold("RULES:- "));
console.log(chalk.red.bold("1. There are 3 rounds to this game, each consisting of 5 questions. "));
console.log(chalk.red.bold("2. You must secure atleast 3 points to move to the second level and atleast a total of 7 points to go to the third level. "));
console.log(chalk.whiteBright.bold("***LEVEL 1***"));
var score=0;
function play(question,answer){
  var userAnswer=readlinesync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.greenBright("CORRECT!"));
    score++;
  } else{
    console.log(chalk.redBright("OOPS!"));
  }
  console.log("Current Score: "+score);
  console.log("-----------------------------");
}

var level1=[
  {
    ques:"Gunther had a great crush on?\na.Rachel \nb.Phoebe\nc.Monica\n", 
    ans:"a"
  },
  {
    ques:"What was the name of Joey's penguine?\na.Maurice \nb.Pengy\nc.Hugsy\n", 
    ans:"c"
  },
  {
    ques:"What was Phoebe's signature song?\na.Sticky Shoes \nb.Bisexuals\nc.Smelly Cat\n", 
    ans:"c"
  },
  {
    ques:"Who was Emma's father?\na.Joshua \nb.Ross\nc.Joey\n", 
    ans:"b"
  },
  {
    ques:"In a can of soda, which strange thing was found by Phoebe?\na.A thumb \nb.A nail\nc.A toe\n", 
    ans:"a"
  }
];
for(var i=0;i<level1.length;i++){
  var currentquestion1=level1[i];
  play(currentquestion1.ques,currentquestion1.ans);
}
//LEVEL 2
if(score>=3 && score<=5){
  console.log(chalk.black.bgYellowBright.bold("***WELCOME TO LEVEL 2 OF THE FRIENDS TRIVIA!***"));
  var level2=[
  {
    ques:"Whom did Chandler kiss at the new year party in season 1?\na.Monica \nb.Joey\nc.Janice\n", 
    ans:"b"
  },
  {
    ques:"What was the first name of Chandler and Monica's son?\na.Jack \nb.Daniel\nc.Ben\n", 
    ans:"a"
  },
  {
    ques:"What was the name of Phoebe's twin sister?\na.Hoebe \nb.Frankie\nc.Ursula\n", 
    ans:"c"
  },
  {
    ques:"What was the name of Chip Matthew's motorcycle?\na.Chipper \nb.Chippy\nc.Chrip-Chirp\n",
    ans:"a"
  },
  {
    ques:"What was the name of Mike's family dog?\na.Crappy \nb.Clunkers\nc.Chappy\n", 
    ans:"c"
  }
];
for(var i=0;i<level2.length;i++){
  var currentquestion2=level2[i];
  play(currentquestion2.ques,currentquestion2.ans);
}
} else if(score<3) {
  console.log(chalk.red("YOU ARE NOT ELIGIBLE FOR LEVEL 2!(Your score should be >= 3)"));
}
//LEVEL 3
if(score>=7 && score<=10){
  console.log(chalk.black.bgYellowBright.bold("***WELCOME TO LEVEL 3 OF THE FRIENDS TRIVIA!***"));
  var level3=[
  {
    ques:"In which year did Friends premier?\na.2004 \nb.1996\nc.1994\n", 
    ans:"c"
  },
  {
    ques:"What was the name of Joey's imaginary friend?\na.Maurice \nb.Ginger\nc.Hugsy\n", 
    ans:"a"
  },
  {
    ques:"According to Joey, what is a cow’s opinion called?\na.Null point \nb.Moo point\nc.No point\n",
    ans:"b"
  },
  {
    ques:"What is Ross’s middle name?\na.Muriel \nb.Earl\nc.Eustace\n", 
    ans:"c"
  },
  {
    ques:"At Halloween party, who does Joey dress up like?\na.Bunny \nb.Chandler\nc.Ross\n", 
    ans:"b"
  }
];
for(var i=0;i<level3.length;i++){
  var currentquestion3=level3[i];
  play(currentquestion3.ques,currentquestion3.ans);
}
} else if(score>=3 && score<7) {
  console.log(chalk.red("YOU ARE NOT ELIGIBLE FOR LEVEL 3!(Your score should be >= 7)"));
}

var highScore=12;
if(score>highScore){
  console.log(chalk.whiteBright.bold("CONGRATULATIONS! YOU HAVE SET A NEW HIGHSCORE = "+ score +"(send a screenshot to your friend!)"));
} else {
  console.log(chalk.greenBright.bold("YOU HAVE COME TO THE END OF THIS TRIVIA! It was a pleasure playing with you!"));
}