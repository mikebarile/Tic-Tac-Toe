class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $li = $("li");
    $li.click(function() {

    });

    $("li").on("click", event => {
    const $square = $(event.currentTarget);
    this.makeMove($square);
    this.game.playMove($square.data("pos"));
    if (this.game.isOver() && this.game.winner()) {
        console.log(this.game.winner());
        window.alert(`${this.game.winner()} won!`);
      } else if (this.game.isOver()) {
        window.alert("you both make me sad");
      }
    });
  }

  makeMove($square) {
    if (this.game.currentPlayer === 'x') {
      $square.addClass("x");
    } else if (this.game.currentPlayer === 'o') {
      $square.addClass("o");
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
