(function(){
  var coolDiv = $('.cool');

  coolDiv.on('touchmove', function(e) {
    e.preventDefault();
    if (event.targetTouches.length == 1) {
      var touch = event.targetTouches[0];
      // Place element where the finger is
      coolDiv.css("left", touch.pageX + "px");
      coolDiv.css("top", touch.pageY + "px");
      coolDiv.text("X: " + Math.round(touch.pageX) + " Y: " + Math.round(touch.pageY));
    }
  })
})();
