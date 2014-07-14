$(function() {

NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

function Cell(el) {
  this.el = el;
  this.note = 'A'
  this.octave = 4;
  this.time = 0;
}

function PianoRoll() { 
  var renderPianoRoll = function() {
    var result = [];

    for (var j = 0; j < 10; j++) {
      var $row = $("<div>");
      result[j] = [];

      _.each(_.range(10), function(i) { 
        var $cell = $("<div>", { "class": "cell" })
          .appendTo($row)
          .on('mouseover', function(e) {
            $cell.addClass("highlighted");
          })
          .on('mouseout', function(e) {
            $cell.removeClass("highlighted");
          });

        if (i == 0) {
          $cell.html(NOTES[j]);
        } else {
          $cell.html("&nbsp;"); // why is this necessary?
        }

        var data = new Cell($cell);
      });

      $("#roll").append($row);
    }
  };

  renderPianoRoll();
}

function main() { 
  var pr = new PianoRoll();
}

main();

});
