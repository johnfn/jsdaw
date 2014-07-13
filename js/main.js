$(function() {

var renderPianoRoll = function() {
  for (var j = 0; j < 10; j++) {
    var $row = $("<div>");

    _.each(_.range(10), function(i) { 
      var $cell = $("<div>", { "class": "cell" })
        .appendTo($row)
        .on('mouseover', function(e) {
          $cell.addClass("highlighted");
        })
        .on('mouseout', function(e) {
          $cell.removeClass("highlighted");
        });
    });

    $("#roll").append($row);
  }
};

renderPianoRoll();

});
