export class Game {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => this.startGame());
    this.goblinClick = this.goblinClick.bind(this);
    this.removeGoblin = this.removeGoblin.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  removeGoblin() {
    const existingGoblin = document.querySelector(".goblin");
    if (existingGoblin) {
      existingGoblin.parentElement.removeChild(existingGoblin);
    }
  }

  updateGoblins = (goblins) => {
    // Удаляем все существующие изображения гоблинов
    this.removeGoblin();

    // Создаем новое изображение гоблина
    const imgTag = document.createElement("img");
    imgTag.classList.add("goblin");
    imgTag.src =
      "https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png";

    const value = this.getRandomInt(goblins.length - 1);
    goblins[value].appendChild(imgTag);
  };

  startGame = () => {
    this.makeTable();
    const goblins = document.querySelectorAll(".game-field");

    setInterval(() => this.updateGoblins(goblins), 1000);
  };

  makeTable = () => {
    const body = document.querySelector("body");
    const tableTag = document.createElement("table");
    tableTag.classList.add("table");
    body.appendChild(tableTag);

    tableTag.addEventListener("click", this.goblinClick);

    // Создание строк таблицы
    Array(4)
      .fill()
      .forEach(() => {
        const trTag = document.createElement("tr");

        // Создание столбцов таблицы
        Array(4)
          .fill()
          .forEach(() => {
            const tdTag = document.createElement("td");
            const divTag = document.createElement("div");
            divTag.classList.add("game-field");
            tdTag.appendChild(divTag);
            trTag.appendChild(tdTag);
          });

        tableTag.appendChild(trTag);
      });
  };

  goblinClick(e) {
    if (e.target.classList.contains("goblin")) {
      const wins = document.querySelector(".wins");
      wins.textContent = parseInt(wins.textContent) + 1;
      this.removeGoblin();
    } else {
      const loses = document.querySelector(".losses");
      loses.textContent = parseInt(loses.textContent) + 1;
      if (parseInt(loses.textContent) > 4) {
        alert(
          `Игра окончена! Вы проиграли! Ваш результат: ${document.querySelector(".wins").textContent}`,
        );
        this.restartGame();
      }
    }
  }

  restartGame() {
    const wins = document.querySelector(".wins");
    wins.textContent = 0;
    const loses = document.querySelector(".losses");
    loses.textContent = 0;
  }
}
