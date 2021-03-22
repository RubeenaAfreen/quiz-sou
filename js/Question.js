class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("Name");
        //this.option = createInput("enter your answer");
        this.button = createButton('Submit');
        
        this.question = createElement('h2');
       
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');

        this.Q1 = createElement('h2');
        //this.Q1o1 = createElement('Loki');
        //this.Q1o2 = createElement('Hulk');
        this.ans = createInput("Your Answer");
        
        

        this.reset = createButton('Reset');

        
    }

    hide(){
        this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.ans.hide();
    }

    display(){

        this.title.html("MyQuiz Game");
        this.title.position(350, 0);
    
        this.question.html("Question:- What we get if we add 2 and 4" );
        this.question.position(150, 40);
        this.option1.html("1: 4 " );
        this.option1.position(150, 100);
        this.option2.html("2: 6" );
        this.option2.position(150, 120);
        this.option3.html("3: 2 " );
        this.option3.position(150, 140);
        this.option4.html("4: 8" );
        this.option4.position(150, 160);
    
        this.ans.position(480, 230);
        this.button.position(220, 300);

        this.input1.position(270, 230);


            this.button.mousePressed(() => {
                
                this.title.hide();
                this.input1.hide();
                this.ans.hide();
                this.button.hide();
                contestant.name = this.input1.value();
                contestant.answer = this.ans.value();
                contestantCount+=1;
                contestant.index = contestantCount;
                contestant.update();
                contestant.updateCount(contestantCount);
        })

        this.button.mousePressed(() => {
            
        })
    }
}    