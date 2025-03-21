let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let playAgain = document.querySelector('#play-again');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');

};


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('clicked');
        if(turnO===true){
            box.innerText = 'O';
            turnO = false;

        }
        else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => { 
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
    msgContainer.classList.add('hide');
}



const showWinner = (winner) => {
    msg.innerText = `${winner} is the winner`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}



const checkWinner = () => {
    for (let pattern of winPatterns) {
        
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;    
        let position3 = boxes[pattern[2]].innerText;

        if (position1 !="" && position2 != "" && position3 != "" ) {
            if (position1 === position2 && position2 === position3) {
                console.log('Winner', position1);
                showWinner(position1);
            }
                
        }
    }
};


playAgain.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);

