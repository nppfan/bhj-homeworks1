class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

registerEvents() {
  document.addEventListener('keydown', (event) => {
      const currentElement = document.querySelector('.current-symbol');
      this.currentSymbol = currentElement.textContent; 

      const inputChar = event.key; 

      if (inputChar.toLowerCase() === this.currentSymbol.toLowerCase()) {
          this.success();
      } else {
          this.fail();
      }
  });
}

success() {
  this.wins++;
  console.log('Успех! Побед: ' + this.wins);
  if (this.wins >= this.maxWins) {
      console.log('Поздравляем! Вы выиграли игру!');
  }
}

fail() {
  this.losses++;
 
  console.log('Неудача! Поражений: ' + this.losses);
  if (this.losses >= this.maxLosses) {
      console.log('Игра окончена! Вы проиграли.');
  }
}


  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

