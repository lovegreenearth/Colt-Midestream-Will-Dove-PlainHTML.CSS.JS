$(document).ready(function () {
    // Don't cycle carousel to next when it isn't visible
    $("#myCarousel").carousel("nextWhenVisible");

    // Cycles through the carousel items
    $("#startSlide").click(function () {
        $("#myCarousel").carousel("cycle");
    });

    // Stops the carousel
    $("#pauseSlide").click(function () {
        $("#myCarousel").carousel("pause");
    });

    // Cycles to the previous item
    $("#prevSlide").click(function () {
        $("#myCarousel").carousel("prev");
    });

    // Cycles to the next item
    $("#nextSlide").click(function () {
        $("#myCarousel").carousel("next");
    });

    // Cycles the carousel to first slide
    $("#slideOne").click(function () {
        $("#myCarousel").carousel(0);
    });

    // Cycles the carousel to second slide
    $("#slideTwo").click(function () {
        $("#myCarousel").carousel(1);
    });

    // Cycles the carousel to third slide
    $("#slideThree").click(function () {
        $("#myCarousel").carousel(2);
    });
});