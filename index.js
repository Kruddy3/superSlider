



$.fn.superSlider= function(opts){
  const options = {
    display: opts.display || 5,
    isOverflow: opts.overflow || false,
    listContainer: opts.listContainer || "ul",
  }


  $(this).each(function() {
    var totalElements = $(this).children("ul").children("li").length
    var currentSet = 0;
    var len = $(this).children(options.listContainer).length;
    var that = this;
    var displayAmount = options.display;
    var isOverflow = options.isOverflow;
    onLoad()

    $(this).css("border", "1px solid red");

    $(this).children("button:first").click(function() {

      rotateSet(false);
    })

    $(this).children("button:last").click(function() {
      rotateSet(true);
    })


    function rotateSet(isNext) {
      // adding the display amount will get you the new starting position
      // $(that).children("ul").children("li").css("background-color","red")
      $(that).children("ul").children("li").show()

      if (isNext) {
        if (currentSet + displayAmount >= totalElements && isOverflow == false) {
          $(this).children("button:last").prop("disabled", "disabled");
        }else {
          currentSet = currentSet + displayAmount
          if (currentSet >= totalElements) {
            currentSet = currentSet-totalElements
          }
        }
      }else {
        if (currentSet - displayAmount < 0 && isOverflow == false) {
          $(this).children("button:first").prop("disabled", "disabled");
        } else {
          currentSet = currentSet - displayAmount
          if (currentSet < 0) {
            currentSet = totalElements+currentSet
          }
        }

      }
      holder = currentSet+ displayAmount-1;
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log("holder", holder);
      console.log("current pos ", currentSet);
      console.log("Amount shown ", displayAmount);
      console.log("Total elements ", totalElements);

      // if currentSet + displayAmount is larger than the total elements there will be wrapping
      if (currentSet + displayAmount > totalElements  && isOverflow) {
        console.log("WRAPPING SHOULD OCCUR");
          // if there is overflow and the current pos isnt exactly overflowing
          console.log("Warpping but currentPos doesnt");
          remainder = currentSet + displayAmount - totalElements -1;
          $(that).children("ul").children("li:lt("+ currentSet + "):gt("+ remainder + ")").hide()
          console.log(remainder);
      } else {
        console.log("NORMAL CASE NO WRAPPING");
        $(that).children("ul").children("li:lt("+ currentSet + ")").hide()
        $(that).children("ul").children("li:gt("+ holder + ")").hide()
      }
      }

    function onLoad(displayAmount){
      displayFix = options.display-1
      $(that).children("ul").children("li:gt("+ displayFix + ")").hide()
    }
    //on-load
      //display only required amount

  })
}

$(".slider").superSlider({
  display:4,
  // overflow:true,
});





// var childHolder = [];
// var currentIterator = 0;
//
// $(function() {
// // questionable name
//
//
//   $.fn.superSlider= function(){
//     // actually grab the items and add them to an array then make them into the slideshow
//     for (var i = 0; i < $( "#slider" ).find("img").length; i++) {
//       childHolder.push($( "#slider" ).find("img")[i].currentSrc)
//     }
//     $( "#slider" ).find(".column").remove()
//     this.css("background-color", "red")
//   }
//   $("#slider").superSlider()
//   console.log(childHolder[currentIterator]);
//
//
//   // $.fn.sliderSelect= function(){
//       $( "#slider" ).append( "<div class='column'> <img src = '" + childHolder[0] + "' ></div>" );
//
//   // }
//
// });
