$(document).ready(function() {
  // alert("document is ready!");
  applyHeight();
  $('.menu-toggle').click(function(e) {
    $('.menu').toggleClass('open');
    e.preventDefault();
  });
  $(window).on('resize', function() {
    applyHeight();
  });
}); // End document ready

// size samples to equal heights

/* At 1138px wide, the samples are displayed in three rows and 300px wide. JS needs to calculate height when it is 1138
or higher. The samples are 100% wide (and do not need their height set) at 1137px and below. */

// function to determine the tallest element
function equalHeight(block) {
    // Set tallest height to 0
    var tallest = 0;
    // Iterate over each block
    block.each(function() {
      // Creates variable and stores height for current element
      var thisHeight = $(this).height();
      // If current element's height is greater than 0 (or the tallest), then it becomes the tallest
      if (thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    // Sets all block heights to the height of the tallest element
    block.height(tallest);
  }
  
  // function to apply equal heights
function applyHeight() {
  // If the sample is 300px wide run equal height function
  if ($(".sample").css("width") == "300px") {
    equalHeight($(".sample"));
    // If the sample is not 300px wide, set height to auto
  } else {
    $(".sample").css("height", "auto");
  }
}