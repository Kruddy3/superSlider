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
    var gtDisplayAmount = displayAmount -1;
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
      if (isOverflow) {
        // when right button is pressed
        $(that).children("ul").children("li").show()
        if (isNext) {
          for (var i = 0; i < displayAmount; i++) {
            var firstPlace = $(that).children("ul").children("li")[0];
            $(that).children("ul").children("li")[0].remove();
            $(that).children("ul").append(firstPlace)
          }
        }else {
          for (var i = 0; i < displayAmount; i++) {
            var lastPlace = $(that).children("ul").children("li").last();
            $(that).children("ul").children("li").last().remove();
            $(that).children("ul").prepend(lastPlace)
          }
        }
        $(that).children("ul").children("li:gt(" + gtDisplayAmount + ")").hide();
      }
      else {
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
        if (currentSet + displayAmount > totalElements  && isOverflow) {
            remainder = currentSet + displayAmount - totalElements -1;
            $(that).children("ul").children("li:lt("+ currentSet + "):gt("+ remainder + ")").hide()
        } else {
          $(that).children("ul").children("li:lt("+ currentSet + ")").hide()
          $(that).children("ul").children("li:gt("+ holder + ")").hide()
        }
      }
    }
    function onLoad(displayAmount){
      displayFix = options.display-1
      $(that).children("ul").children("li:gt("+ displayFix + ")").hide()
    }
  })
}

$(".slider").superSlider({
  display:5,
  overflow:false,
});
