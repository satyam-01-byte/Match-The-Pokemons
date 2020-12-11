document.addEventListener('DOMContentLoaded', () => {

    //cards array
    const cardsArray = [
        {
            name: 'ditto',
            img: 'images/ditto.png'
        },
        {
            name: 'ditto',
            img: 'images/ditto.png'
        },
        {
            name: 'eevee',
            img: 'images/eevee.png'
        },
        {
            name: 'eevee',
            img: 'images/eevee.png'
        },
        {
            name: 'flareon',
            img: 'images/flareon.png'
        },
        {
            name: 'flareon',
            img: 'images/flareon.png'
        },
        {
            name: 'jolteon',
            img: 'images/jolteon.png'
        },
        {
            name: 'jolteon',
            img: 'images/jolteon.png'
        },
        {
            name: 'porygon',
            img: 'images/porygon.png'
        },
        {
            name: 'porygon',
            img: 'images/porygon.png'
        },
        {
            name: 'vaporean',
            img: 'images/vaporeon.png'
        },
        {
            name: 'vaporean',
            img: 'images/vaporeon.png'
        }
    ]

    cardsArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const playAgain = document.querySelector('#playAgain');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board
    function createBoard() {
        for(let i=0; i<cardsArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/pokemon.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        let cardOneId = cardsChosenId[0];
        let cardTwoId = cardsChosenId[1];
        
        if(cardOneId == cardTwoId) {
            cards[cardOneId].setAttribute('src', 'images/pokemon.jpg');
            cards[cardTwoId].setAttribute('src', 'images/pokemon.jpg');
            //alert('You have clicked the same image!');
        }
        else if(cardsChosen[0] === cardsChosen[1]) {
            //alert('You got a match!');
            cards[cardOneId].setAttribute('src', 'images/tick.jpg');
            cards[cardTwoId].setAttribute('src', 'images/tick.jpg');
            cards[cardOneId].removeEventListener('click', flipCard);
            cards[cardTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }
        else {
            cards[cardOneId].setAttribute('src', 'images/pokemon.jpg');
            cards[cardTwoId].setAttribute('src', 'images/pokemon.jpg');
            //alert('Sorry, try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardsArray.length/2) {
            resultDisplay.textContent = 'Congratulations! All matches found!';
            playAgain.textContent = 'Play Again';
        }
    }

    //flip the card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if(cardsChosen.length===2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})