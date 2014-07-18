$(function() {

NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

function Cell() {
  this.el = el;
  this.note = 'A'
  this.octave = 4;
  this.time = 0;
  this.selected = false;
  this.on = false;
}

function PianoRoll() { 
  var model;
  
  var makeModel = function() {
    model = [];

    _(10).times(function(i) {
      model[i] = [];

      _(10).times(function(j) {
        var cell = new Cell();
        cell.note = NOTES[i];

        model[i][j] = cell;
      });
    });
  };

  var renderPianoRoll = function() {
    _.each(_.range(10), function(j) {
      var $row = $("<div>");
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
                $cell.addClass('highlighted');
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
