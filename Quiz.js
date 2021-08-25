class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    if (allContestants!=undefined){
      fill ("blue")
      textSize(20)
      text("contestants who answer correct are highlighter in green colour",130,230)
    }

    //write code to change the background color here
    background("red")

    //write code to show a heading for showing the result of Quiz
    for (var player in allContestants){
      var correctAnswer="2"
      if (correctAnswer==allContestants[player].answer)
      fill("green")
      else
      fill("red")
    }


    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
