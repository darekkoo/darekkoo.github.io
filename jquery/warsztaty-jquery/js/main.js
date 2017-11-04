'use strict';

$(document).ready(function () {
    
    //Zmienne
    var slideShow = $(".slide-show");
    var slideCount = $(".single-slide").length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    //Szerokosc kontenera .slide-show
    slideShow.css("width", (slideCount * 100) + "%");
    
    //Nadaj kazdemu slajdowi szerokosc i lewy margines
    slideShow.find(".single-slide").each(function(index){
        console.log("działa");
        $(this).css({"width" : slideWidth + "%", "margin-left" : index * slideWidth + "%"});
    });
    
    //Funkcja slide
    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            return;
        }
        var slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
        
        var marginLeft = (newSlideIndex * (-100)) + "%";
        
        slideCaption.hide();
        
        slideShow.animate({"margin-left" : marginLeft}, 1000, function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        })
    };
    
    //Obsluga nawigacji slidera
     $(".prev-slide").click(function(){
        slide(slideIndex - 1);
    });
    
     $(".next-slide").click(function(){
        slide(slideIndex + 1);
    });
        
});
