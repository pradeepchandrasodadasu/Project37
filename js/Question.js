class Question{
    constructor(){
        this.title = createElement("h1");
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
        this.input = createInput("Enter Option No.");
        this.name = createInput("Enter Name");
        this.submitButton = createButton("Submit");
    }
    display(){
        this.title.html("Quiz Game");
        this.title.position(width/2-60,30);
        this.question.html("Question1: Who is the CEO of WhiteHatJr? ");
        this.question.position(100,130);
        this.option1.html("1.Ratan Tata");
        this.option1.position(120,180);
        this.option2.html("2.Sundar Pichai");
        this.option2.position(120,210);
        this.option3.html("3.Karan Bajaj");
        this.option3.position(120,240);
        this.option4.html("4.Mark Zuckerberg");
        this.option4.position(120,270);

        //this.enterButton.position(370,330);
        this.submitButton.position(120,350);

        this.name.position(100,100);
        this.input.position(300,350);

        this.submitButton.mousePressed(()=>{
            this.input.hide();
            this.submitButton.hide();
            this.name.hide();
            this.title.hide();

            contestant.name = this.name.value();
            contestant.answer = this.input.value();
            contestantCount+= 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });


    }
    hide(){
        this.title.hide();
        this.name.hide();
        this.input.hide();
        this.submitButton.hide();
        
    }
}