 class Quize{
  
  getState(){
      var QuizeRef = database.ref('gameState')
      QuizeRef.on('value',function(data){
        quize=data.val()
      })
      
  }
 
   update(state){
       database.ref('/').update({
         gameState:state
       })
        
   }
   async start(){
     if(gameState==0){
       contestant = new Contestant();
       var contestantCountRef = await database.ref('contestantCount').once("value");
       if(cotestantCountRef.exists()){
         cotestentCount = contastantCountRef.val();
         contestant.getCount();
       }
       question = new Question()
       question.display();
     }
   }

   play(){
     question.hide();
     backGround("red");
     Fill(0);
     textsize(30);
     text("results of the quize",340,50);
     text("_____________________________",320,65);
     Contestant.getPlayerInfo();
     if(allConetstants !== undefined){
       debugger;
       var display_Answer = 230;
       fill('light green')
       textSize(20);
       text('NOTE: contestant who answered correct ar in green', 130,230)

       for(var plr in allConetstants){
         debugger;
         var correctAns = "4";
         if (correctAns===allConetstants[plr].answer)
         fill("light green")
         else
         fill("yellow");

         display_Answer+=30;
         textSize(30);
         text(allConetstants[plr].name + ": "+ allConetstants[plr].answer, 250,display_Answers)

       }

     }
   }

 }