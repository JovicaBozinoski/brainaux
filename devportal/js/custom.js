"use strict";
$(document).ready(function () {

    $("select").niceSelect();

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })

    /*Mesonary active*/


    var $grid = $('.iso-grid-wrap');
    $grid.packery({
        // options
        itemSelector: '.isotope-item',
        // gutter: 15,
        resize: true
    });
    $grid.imagesLoaded().progress(function () {
        $grid.packery('layout');
    });


    var $gridMas = $('.iso-mas-grid-wrap');
    $gridMas.packery({
        // options
        itemSelector: '.isotope-mas-item',
        // gutter: 15,
        resize: true
    });
    $gridMas.imagesLoaded().progress(function () {
        $gridMas.packery('layout');
    });


    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#isotope-filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // bind filter button click
    $('#isotope-mas-filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $gridMas.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.isotope-nav').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Counter Up Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function () {
        setTimeout(function () {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function () {
            $("#loading").remove();
        }, 2000);
    });


    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     var target = this.hash;
    //     var $target = $(target);
    //     var topOffset = 90; // Offset from the top

    //     $('html, body').animate({
    //         'scrollTop': $target.offset().top - topOffset
    //     }, 1000, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });


});