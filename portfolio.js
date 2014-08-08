$(document).ready(function() {
    // alert("document is ready!");
    if ($(".sample").css("width") == "300px") {
        equalHeight($(".sample"));
    }
    $('.menu-toggle').click(function(e) {
        $('.menu').toggleClass('open');
        e.preventDefault();
    });
});

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