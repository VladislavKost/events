import { Game } from "../game";
import { UserScale } from "../userScale";

describe("getRandomInt", () => {
  it("should return a random integer between 0 and 15", () => {
    const game = new Game();
    for (let i = 0; i < 100; i++) {
      const result = game.getRandomInt(15);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(15);
    }
  });
});

describe("updateGoblins", () => {
  it("should add the image tag to a random goblin element", () => {
    const game = new Game();
    const goblins = Array.from({ length: 16 }, () =>
      document.createElement("div"),
    );

    const imgTag = document.createElement("img");

    game.updateGoblins(goblins, imgTag);

    const goblinWithImage = goblins.find((goblin) => goblin.contains(imgTag));
    expect(goblinWithImage).not.toBeNull();
  });
});

describe("startGame", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
      `;
  });

  it("should start the game and append goblin images", async () => {
    jest.useFakeTimers();
    const game = new Game();
    game.startGame();

    // Прожимаем 1 секунду
    jest.advanceTimersByTime(1000);

    // Проверяем, что хотя бы один элемент img был добавлен
    const goblins = document.querySelectorAll(".game-field");
    let hasGoblin = Array.from(goblins).some(
      (goblin) => goblin.querySelector(".goblin") !== null,
    );

    expect(hasGoblin).toBe(true);

    jest.useRealTimers();
  });
});

describe("restart Game", () => {
  it("should restart game and reset scale", async () => {
    new UserScale();
    const game = new Game();

    setTimeout(() => {
      const wins = document.querySelector(".wins");
      wins.textContent = 10;
      const losses = document.querySelector(".losses");
      losses.textContent = 10;

      game.restartGame();

      expect(document.querySelector(".wins").textContent).toBe("0");
      expect(document.querySelector(".losses").textContent).toBe("0");
    }, 100);
  });
});
