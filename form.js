class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title=createElement('h2')
      this.reset=createButton('reset')
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      
      this.title.html("Tic Tac Toe");
      this.title.position(displayWidth/2-50,0);
  
      this.input.position(400,80);
      this.button.position(800,80);
      this.reset.position(100,80)
      this.reset.style('background','blue')
      this.reset.mousePressed(()=>{
        game.update(0)
        player.updateCount(0)
      })
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(400,80);
      });
  
    }
}