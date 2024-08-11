export class UserScale {
  constructor() {
    this.createScaleTable = this.createScaleTable.bind(this);
    document.addEventListener("DOMContentLoaded", () =>
      this.createScaleTable(),
    );
  }

  createScaleTable = () => {
    const title = document.querySelector(".title");
    const score = document.createElement("div");
    score.classList.add("score");

    const wins = document.createElement("div");
    const winsTitle = document.createElement("span");
    const winsScore = document.createElement("span");
    winsTitle.innerText = "Побед: ";
    winsScore.innerText = 0;
    winsScore.classList.add("wins");

    const losses = document.createElement("div");

    const lossesTitle = document.createElement("span");
    const lossesScore = document.createElement("span");
    lossesTitle.innerText = "Поражений: ";
    lossesScore.innerText = "0 ";
    lossesScore.classList.add("losses");

    wins.appendChild(winsTitle);
    wins.appendChild(winsScore);

    losses.appendChild(lossesTitle);
    losses.appendChild(lossesScore);

    score.appendChild(wins);
    score.appendChild(losses);
    title.parentNode.insertBefore(score, title.nextSibling);
  };
}
