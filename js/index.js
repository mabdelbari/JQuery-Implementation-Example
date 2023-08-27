// Scrolling

$('.navbar .nav-link').click(function () {
    var sectionHrefClicked = $(this).attr('data-my-href');
    var topPosition = $(sectionHrefClicked).offset().top;
    $("html, body").animate({ scrollTop: topPosition }, 500);
})

// Submenu Toggle

$('#home .menu-icon').click(function () {
    $(this).animate({ left: "270px" });
    $('.navbar').animate({ left: 0 });
})

$('.navbar .close-icon').click(() => {
    $('#home .menu-icon').animate({ left: "20px" })
    $('.navbar').animate({ left: "-250px" });
});

// Collapsing items

$('#collapsing div h3').click((e) => {
    console.log($(e.target).next().css('display'));

    if ($(e.target).next().css('display') == 'block') {
        $(e.target).next().slideUp();
    } else {
        $(e.target).next().slideDown();
        $('#collapsing div p').not($(e.target).next()).slideUp();
    }
});

// eventCount


(function () {
    setInterval(() => {
        let eventCountDownDate = new Date("2023-9-30").getTime();
        let nowDate = new Date().getTime();


        let difference = (eventCountDownDate - nowDate) / 1000; // time left in secs
        let days = Math.floor(difference / (3600 * 24)) // days left
        let hours = Math.floor((difference - (days * 3600 * 24)) / 3600); // hours left
        let mins = Math.floor((difference - (days * 3600 * 24) - (hours * 3600)) / 60); // mins left
        let secs = Math.floor((difference - (days * 3600 * 24) - (hours * 3600) - (mins * 60))); // secs left

        $('#days').html(`${days} d`);
        $('#hours').html(`${hours} h`);
        $('#mins').html(`${mins} m`);
        $('#secs').html(`${secs} s`);
    }, 1000)
})();

// chars left

$('#contactTextArea').keydown((e) => {
    setTimeout(() => {
        // console.log($(e.target).val().length);
        var numberOfChars = $(e.target).val().length;
        var charsRemaining = 100 - numberOfChars;
        if (charsRemaining > 0) {
            $('#charsLeft').html(`${charsRemaining}`)
        } else {
            $('#charsLeft').html(`your available character finished`)
        }
    }, 50)
})

