const btn = document.querySelector('button');
const output = document.querySelector('.results');
const message = document.createElement('div');
output.append(message);
message.textContent = 'Hello world';
const game = { players: 20, ele: [] };

const buildGame = () => {
    for (let i = 0; i < game.players; i++) {
        const ele = document.createElement('div');
        ele.classList.add('dice');
        game.ele.push(ele);
        ele.textContent = '-';
        output.append(ele);
    }
};

const roller = () => {
    const ranNum = Math.floor(Math.random() * 6);
    const val = '⚀⚁⚂⚃⚄⚅'[ranNum];
    return { html: val, rollValue: ranNum + 1 };
};

const rollDice = () => {
    const tracker = { winner: [], highValue: 0 };
    const holder = [];
    for (let i = 0; i < game.players; i++) {
        const playerRoll = roller();
        holder.push(playerRoll.rollValue);
        console.log(playerRoll.rollValue);
        if (tracker.highValue < playerRoll.rollValue) {
            tracker.highValue = playerRoll.rollValue;
        }
        game.ele[i].innerHTML = `${playerRoll.html} player ${i+1} Value =${playerRoll.rollValue}`;
        // console.log(playerRoll);
    }
    holder.forEach((playerScore, index) => {
        if (tracker.highValue == playerScore) {
            tracker.winner.push(`Player ${index+1}`);
            game.ele[index].style.color ='green';
        }else{
            game.ele[index].style.color ='#ddd';
        }
    });
    console.log(tracker);
};

buildGame();
btn.addEventListener('click', rollDice);
