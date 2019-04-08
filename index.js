'use strict';
const deck=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10];
class card{
  constructor(){
    this.faceup=true;
    this.facedown=false;
    this.player1points=0;
    this.player2points=0;
    this.player1cards=[];
    this.player2cards=[];
  }
  distributecard(){
    const cardNumber=deck.length/2;
    for (let i=0; i<cardNumber;i++){
      this.player1cards.push(Math.floor(Math.random() * 10)+1);
      this.player2cards.push(Math.floor(Math.random() * 10)+1);
    }
  }
  compare(){
    if(this.faceup){
      this.player1cards.forEach((a1) => this.player2cards.forEach((a2)=>{
        if(a1>a2){
          this.player1points++;
        }else{
          this.player2points++;
        }
      }));
    }
  }
    
}
let game1= new card();
game1.distributecard();
game1.compare();
console.log(game1.player1points);
console.log(game1.player2points);
