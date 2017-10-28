$(function () {
    'use strict';
    $(".paragraf").each(function (index, element) {
        if (index != 1) {
            $(this).css("background-color", "green");
        }

        console.log("Element: " + element, index);

    })
});
