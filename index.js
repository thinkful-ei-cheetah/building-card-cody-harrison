'use strict';
const deck=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10];
class card{
    constructor(card){
        this.faceup=true;
        this.facedown=false;
        this.player1points=0;
        this.player2points=0;
        this.player1cards=[];
        this.player2cards=[];
    }
    distributecard(){
        const cardNumber=deck.length/2
        for (let i=0; i<cardNumber;i++){
            this.player1cards.push(Math.floor(Math.random() * 10)+1);
            this.player2cards.push(Math.floor(Math.random() * 10)+1);
        }
    };
    playcard(){
        if (faceup===true){
            let randomnumber1=Math.floor(Math.random() * `${player1cards.length}`);
            let randomnumber2=Math.floor(Math.random() * `${player2cards.length}`);
            let player1card=player1cards[randomnumber1];
            let player2card=player2cards[randomnumber2];
            game(player1card,player2card)
        }
    }
    game(player1,player2){
        if(player1>player2){
            player1points+=1;
        }
        else if (player2>player1){
            player2points+=1;
        }
    }
    
};
let game1= new card();
game1.distributecard();
console.log(game1.player1cards);
console.log(game1.player2cards);
