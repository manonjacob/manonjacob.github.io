
$(window).on('load', function () {
    // Inhalte anzeigen wenn geladen
    $('body').on('dragstart', function (event) { event.preventDefault(); });
    $("#load").fadeToggle(0);
    $("#front").css({ visibility: 'visible' });
    $("#images").css({ visibility: 'visible' });
    $("#buttonleft").css({ visibility: 'visible' });
    $("#buttonright").css({ visibility: 'visible' });
    setTimeout(function () {
        $('#imagescontainer').css({ visibility: 'visible' });
    }, 0);
});

$(window).on('load resize', function () {
    // Anpassen der Breite von #images -> zentriert
    var width = 0;
    $('#images figure').filter(function () { return $(this).css('display') !== 'none'; }).each(function () {
        width += $(this).outerWidth(true) + 4;
        $('#images').css('width', width + 38 + 'px');
    });
    // buttonright bleibt bei Fenstergröße kleiner body stehen
    if ($(window).width() < 960) {                 // an Breite von body anpassen
        $("#buttonright").css({ left: '905px' });
    } else {
        $("#buttonright").css({ left: 'auto' });
    };
});

$(document).ready(function () {
    // Anpassen der Breite von #images -> zentriert (IE)
    var width = 0;
    $('#images figure').filter(function () { return $(this).css('display') !== 'none'; }).each(function () {
        width += $(this).outerWidth(true) + 4;
        $('#images').css('width', width + 38 + 'px');

    });
    // buttonright bleibt bei Fenstergröße kleiner body stehen
    if ($(window).width() < 960) {                 // an Breite von body anpassen
        $("#buttonright").css({ left: '905px' });
    } else {
        $("#buttonright").css({ left: 'auto' });
    };
});

$(window).on('load resize', function () {
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'showImageNumberLabel': false,
        'resizeDuration': 400,
        'imageFadeDuration': 400,
        'fadeDuration': 800,
    });
});