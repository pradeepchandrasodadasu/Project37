class Quiz{
    constructor(){}

    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref("/").update({
            gameState : state
        });
    }
    async start(){
        if(gameState === 0){ 
            contestant = new Contestant();
            var contestantRef = await database.ref("contestantCount").once("value");
            if(contestantRef.exists()){
                contestantCount = contestantRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();

        }
    }
    play(){
        if(gameState === 1){
           question.hide();

           background("blue");
           stroke("black");
           strokeWeight(4);
           fill("yellow");
           textSize(25);
           text("Result",width/2-60,30);

           Contestant.getContestantInfo();

           if(allContestants !== undefined){
               //text("Note")
               var answers = 130;
               for(var plr in allContestants){
                   var correctAnswer = "3";
                   if(correctAnswer === allContestants[plr].answer){
                       fill("green");
                   } else{
                       fill("red");
                   }

                  // fill("");
                   answers+=30;
                   textSize(15);
                   text(allContestants[plr].name + " : " + allContestants[plr].answer,500,answers);
               }
           }

        }
    }
}