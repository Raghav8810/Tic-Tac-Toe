const First_page = document.querySelector(".container");
const Game_page = document.querySelector(".player_section");

// player button select
const Player_x = document.querySelector(".selectX");
const Player_O = document.querySelector(".selectO");

//turn buttons
const playerAll = document.querySelectorAll('.players')
const Playerx = document.querySelector(".players .player1");
const Playero = document.querySelector(".players .player2");

//tic game panel select
const All_span = document.querySelectorAll('section span');

//result box select
const result_box = document.querySelector(".result_box");
const won_text = document.querySelector(".won_text");
const result_btn = document.querySelector('.result_btn button')

//make variable for game value input
player1 = "X"
player2 = "O";
toggle = "true"

//array of index value of span 
const Win_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//==================click events add

    Player_x.addEventListener('click', function(){
        First_page.classList.add("hide");
        Game_page.classList.add("show");
        Playerx.classList.add("active");
   });
   Player_O.addEventListener("click" , function(){
       First_page.classList.add("hide");
        Game_page.classList.add("show");
        Playero.classList.add('active');
        Playerx.classList.remove("active");
   });
   
   
   result_btn.addEventListener('click', function(){
        First_page.classList.remove("hide");
        Game_page.classList.remove("show");
        result_box.classList.remove('visible');
   })



let value = won_text.innerHTML;
//==========span array 

    All_span.forEach(cell =>{
 
        cell.addEventListener('click',function(){
           cell.classList.add("disable");
            
            let CurrentPlayer = toggle ? player1 : player2;
            addCell(cell, CurrentPlayer);
           //  cell.innerHTML = CurrentPlayer;
   
           
            if(winCheak(CurrentPlayer)){
               console.log("winnedd");
               result_box.classList.add("visible");
               won_text.innerHTML = CurrentPlayer + " " + value;
               Game_page.classList.add('opacity');
            }else if(isDraw()){
                result_box.classList.add("visible"); 
                won_text.innerHTML = "match is draw play again";
              }else{
                togglePlayer();
              }
   
            // togglePlayer(); //this toggle current player o and x
            
        })
   });





//=================functions call



    function winCheak(CurrentPlayer){
        return Win_condition.some(condition =>{
            console.log(condition);
            return condition.every(index =>{
                 console.log(index)
                return  All_span[index].classList.contains(CurrentPlayer);
               
             });  
        })
    }
    
    
    function togglePlayer(){
        toggle = !toggle;
        if(toggle){
            Playerx.classList.add('active');
            Playero.classList.remove('active');
        }else{
            Playerx.classList.remove('active');
            Playero.classList.add('active');
        }
    };
    function addCell(cell, CurrentPlayer){
        cell.innerHTML = CurrentPlayer;
        cell.classList.add(CurrentPlayer);
    }

function isDraw(){
    return  [...All_span].every(cell =>{
        return cell.classList.contains(player1) || cell.classList.contains(player2);
    })
}
