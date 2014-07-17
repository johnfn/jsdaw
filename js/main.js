$(function() {

NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

function Cell(el) {
  this.el = el;
  this.note = 'A'
  this.octave = 4;
  this.time = 0;
  this.selected = false;
}

function PianoRoll() { 
  var renderPianoRoll = function() {
    var result = [];

    _.each(_.range(10), function(j) {
      var $row = $("<div>");
      result[j] = [];

      var selectionStart = [];
      var isSelecting = false;

      _.each(_.range(10), function(i) { 
        var $cell = $("<div>", { "class": "cell" })
          .appendTo($row)
          .on('mouseover', function(e) {
            $cell.addClass("highlighted");

            if (isSelecting) {
              var start = Math.min(selectionStart[0], i);
              var end = Math.max(selectionStart[0], i);

              for (var k = start; k <= end; k++) {
                result[j][k].addClass('highlighted');
              }
            }
          })
          .on('mouseout', function(e) {
            $cell.removeClass("highlighted");
          })
          .on('mousedown', function(e) {
            isSelecting = true;
            selectionStart = [i, j];
          })
          .on('mouseup', function(e) {
            isSelecting = false;

            for (var k = start; k <= end; k++) {
              result[j][k].selected = true;
            }
          });

        if (i == 0) {
          $cell.html(NOTES[j]);
        } else {
          $cell.html("&nbsp;"); // why is this necessary?
        }

        var data = new Cell($cell);

        result[j].push(data);
      });

      $("#roll").append($row);
    });

  };

  renderPianoRoll();
}

function main() { 
  var pr = new PianoRoll();
}

main();

});
