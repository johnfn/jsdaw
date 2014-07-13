$(function() {

var renderPianoRoll = function() {
  for (var j = 0; j < 10; j++) {
    var $row = $("<div>");

    for (var i = 0; i < 10; i++) {
      var $cell = $("<div>", { "class": "cell" });
      $row.append($cell);
    }

    $("#roll").append($row);
  }
};

renderPianoRoll();

});
