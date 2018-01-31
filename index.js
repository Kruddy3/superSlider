$(function() {
// questionable name
var childHolder = [];
  $.fn.superSlider= function(){
    // actually grab the items and add them to an array then make them into the slideshow
    for (var i = 0; i < $( "#slider" ).find("img").length; i++) {
      childHolder.push($( "#slider" ).find("img")[i].currentSrc)
    }

    this.css("color", "red")
  }
  console.log(childHolder)


  $("#slider").superSlider()
});
