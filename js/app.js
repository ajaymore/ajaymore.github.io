var app = {};
/*
 * Data generation
 */
app.ratings = [],
        app.transientRating = [0, 0, 0, 0, 0],
        app.getRandomRating = function() {
            var rating = {
                "PH": Math.floor(Math.random() * 5) + 1,
                "HB": Math.floor(Math.random() * 5) + 1,
                "AR": Math.floor(Math.random() * 5) + 1,
                "BL": Math.floor(Math.random() * 5) + 1,
                "GK": Math.floor(Math.random() * 5) + 1,
            };
            return rating;
        };
/*
 * Opacity table for overlay
 */
app.opacityTable = [1, 0.9558, 0.9079, 0.8569, 0.8036, 0.7487, 0.6928, 0.6367,
    0.5810, 0.5266, 0.474, 0.4239, 0.3772, 0.3344, 0.2962, 0.2634, 0.2367, 0.2168, 0.2043, 0.2];
/*
 * Draw regular polygon for given angle and radius
 */
app.drawPolygon = function(context, polyAngle, radius) {
    context.moveTo(radius, 0);
    for (var n = 0; n < 5; n++) {
        context.lineTo(radius * Math.cos(polyAngle * n), radius * Math.sin(polyAngle * n));
    }
    context.closePath();
};
/*
 * Draw ratings on given regular polygon provided with rating array
 */
app.drawRatings = function(context, ratingsArr, radius, polyAngle, fillStyle, radIncr, opacityVal) {
    context.globalAlpha = opacityVal;
    context.beginPath();
    for (var n = 0; n < ratingsArr.length; n++) {
        var calculatedRad = radius + (ratingsArr[n] * radIncr);
        context.lineTo(calculatedRad * Math.cos(polyAngle * n), calculatedRad * Math.sin(polyAngle * n));
    }
    context.closePath();
    context.fillStyle = fillStyle;
    context.fill();
};
// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};
// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};
//interaction polygon
app.getMousePos = function(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};
/*
 * Creating a 5 side regular polygon
 */
app.createPoly = function() {
    var canvas = document.getElementById("canvas"),
            context = canvas.getContext('2d'),
            tempCanvas = document.getElementById('temp-canvas'),
            tempContext = tempCanvas.getContext('2d'),
            polygonSides = 5,
            polyAngle = (Math.PI * 2) / polygonSides,
            radius = 10,
            radiusIncr = 30,
            colorOverlay = "#2ECC71",
//            colorOverlay = "#FF8800",
            colorStroke = "#E8E5DF";

    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(-Math.PI / 2);
    tempContext.translate(canvas.width / 2, canvas.height / 2);
    tempContext.rotate(-Math.PI / 2);

    //concentric polygons
    for (var n = 0; n < 6; n++) {
        app.drawPolygon(context, polyAngle, radius + (n * radiusIncr));
    }
    context.strokeStyle = colorStroke;
    context.stroke();

    //draw spider lines
    context.beginPath();
    spiderRadius = radius + (polygonSides * radiusIncr);
    for (var n = 0; n < polygonSides; n++) {
        context.moveTo(0, 0);
        context.lineTo(spiderRadius * Math.cos(polyAngle * n),
                spiderRadius * Math.sin(polyAngle * n));
    }
    context.strokeStyle = colorStroke;
    context.stroke();

    //draw summary
    var opacityVal;
    if (app.ratings.length < 20) {
        opacityVal = app.opacityTable[app.ratings.length];
    } else {
        opacityVal = app.opacityTable[19];
    }
    for (var n = 0; n < app.ratings.length; n++) {
        var r = app.ratings[n];
        var ratingsArr = [r.PH, r.HB, r.AR, r.BL, r.GK];
        app.drawRatings(tempContext, ratingsArr, 10, polyAngle, colorOverlay, radiusIncr, opacityVal);
        // drawRatings(tempContext, ratingsArr, 10, polyAngle, "#33B5E5", radiusIncr);
        tempContext.blendOnto(context, 'multiply');
        tempContext.clearRect(-tempCanvas.width / 2, -tempCanvas.height / 2, tempCanvas.width, tempCanvas.height);
    }
    app.addCanvasListener(canvas, context, radius, radiusIncr, colorOverlay, colorStroke,
            polyAngle, polygonSides);
    $("input[data-slider='true']")
            .on("slider:changed", function(event, ui) {
                var transientRating = [
                    $('#slider-ph').val(),
                    $('#slider-hb').val(),
                    $('#slider-ar').val(),
                    $('#slider-bl').val(),
                    $('#slider-gk').val(),
                ];
                app.reDraw(canvas, context, polygonSides, polyAngle, radius, radiusIncr, colorStroke,
                        transientRating, colorOverlay);
            });
};
app.isMouseDown = false;
$('body').mousedown(function() {
    app.isMouseDown = true;
}).mouseup(function() {
    app.isMouseDown = false;
});
app.addCanvasListener = function(canvas, context, radius, radiusIncr,
        colorOverlay, colorStroke, polyAngle, polygonSides) {
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = app.getMousePos(canvas, evt);
        var posX = mousePos.x - canvas.width / 2;
        var posY = mousePos.y - canvas.height / 2;
        var rad = Math.atan(posY / posX);
        var moveRadius = Math.sqrt(posX * posX + posY * posY);
        var newRatingVal = Math.ceil((moveRadius - radius) / radiusIncr);
        if (newRatingVal > 5 || !app.isMouseDown) {
            return;
        }
        if (posX > 0 && posY < 0) {
            rad = 0 - rad;
            var moveMentAngle = Math.degrees(rad);
            if (moveMentAngle > 47) {
                app.transientRating[0] = newRatingVal;
            } else {
                app.transientRating[1] = newRatingVal;
            }
        } else if (posX < 0 && posY < 0) {
            rad = Math.PI / 2 + (Math.PI / 2 - rad);
            var moveMentAngle = Math.degrees(rad);
            if (moveMentAngle < 124) {
                app.transientRating[0] = newRatingVal;
            } else {
                app.transientRating[4] = newRatingVal;
            }
        } else if (posX < 0 && posY > 0) {
            rad = Math.PI - rad;
            var moveMentAngle = Math.degrees(rad);
            if (moveMentAngle < 194) {
                app.transientRating[4] = newRatingVal;
            } else {
                app.transientRating[3] = newRatingVal;
            }
        } else if (posX > 0 && posY > 0) {
            rad = 2 * Math.PI - rad;
            var moveMentAngle = Math.degrees(rad);
            if (moveMentAngle < 337) {
                app.transientRating[2] = newRatingVal;
            } else {
                app.transientRating[1] = newRatingVal;
            }
        }
        $('#slider-ph').simpleSlider("setValue", app.transientRating[0]);
        $('#slider-hb').simpleSlider("setValue", app.transientRating[1]);
        $('#slider-ar').simpleSlider("setValue", app.transientRating[2]);
        $('#slider-bl').simpleSlider("setValue", app.transientRating[3]);
        $('#slider-gk').simpleSlider("setValue", app.transientRating[4]);
        app.reDraw(canvas, context, polygonSides, polyAngle, radius, radiusIncr, colorStroke,
                app.transientRating, colorOverlay);
    }, false);
}
app.reDraw = function(canvas, context, polygonSides, polyAngle, radius, radiusIncr, colorStroke,
        rating, colorOverlay) {
    context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    for (var n = 0; n < 6; n++) {
        app.drawPolygon(context, polyAngle, radius + (n * radiusIncr));
    }
    context.strokeStyle = colorStroke;
    context.stroke();

    context.beginPath();
    spiderRadius = radius + (polygonSides * radiusIncr);
    for (var n = 0; n < polygonSides; n++) {
        context.moveTo(0, 0);
        context.lineTo(spiderRadius * Math.cos(polyAngle * n),
                spiderRadius * Math.sin(polyAngle * n));
    }
    context.strokeStyle = colorStroke;
    context.stroke();
    app.drawRatings(context, rating, 10, polyAngle, colorOverlay,
            radiusIncr, app.opacityTable[0]);
}
app.drawShape = function(canvas, r) {
    var context = canvas.getContext('2d');
    var polygonSides = 5;
    var polyAngle = (Math.PI * 2) / polygonSides;
    var radius = 5;
    var radiusIncr = 10;
    var colorOverlay = "#2ECC71"; //"#FF8800"
    var colorStroke = "#E8E5DF";

    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(-Math.PI / 2);

    app.drawPolygon(context, polyAngle, radius + (polygonSides * radiusIncr));
    context.strokeStyle = colorStroke;
    context.stroke();

    var ratingsArr = [r.PH, r.HB, r.AR, r.BL, r.GK];
    app.drawRatings(context, ratingsArr, polygonSides, polyAngle, colorOverlay, radiusIncr);
};
app.createIndividualShapes = function() {
    for (var n = 0; n < app.ratings.length; n++) {
        var canvas = $('<canvas/>');
        canvas.attr({
            id: 'canvas-' + n,
            height: 150,
            width: 150
        });
        $('<li/>', {class: 'indv-r-canvas'}).append(canvas).appendTo('.indv-r-ctnr');
        var canvasElm = document.getElementById('canvas-' + n);
        app.drawShape(canvasElm, app.ratings[n]);
    }
};
app.initpage = function() {
    var slideWidth = $('.slider-grp').eq(0).width();
    $('.slider').width(slideWidth - 30);
    console.log('app initialized..');
    for (var n = 0; n < 16; n++) {
        var rating = app.getRandomRating();
        app.ratings.push(rating);
    }
    app.createPoly();
    app.createIndividualShapes();
};
$(document).ready(app.initpage);
$('.dropdown-menu li').on('click', function(a, b, c) {
    event.preventDefault();
    console.log($(this).index());
    $('.dropdown-toggle').html($(this).text() + '<span class="caret"></span>');
});
$('.checkbox').on('click', function() {
    $this = $(this).children('i');
    if ($this.hasClass('fa-check-square-o')) {
        $this.removeClass('fa-check-square-o').addClass('fa-square-o');
    } else {
        $this.removeClass('fa-square-o').addClass('fa-check-square-o');
    }
});
$('.nav-left li').on('click', function() {
    $('.pure-menu-selected').removeClass('pure-menu-selected');
    $(this).addClass('pure-menu-selected');
    var clicked = $(this).children('a').attr('href');
    $(clicked).hide();
    $(clicked).slideToggle();
});
$('.pure-menu-heading').on('click', function() {
    $('.header').hide();
    $('.header').slideToggle();
});
app.offsetArray = [];
$.each($('.anchor'), function() {
    app.offsetArray.push($(this).offset().top);
});
var lastScroll = 0;
$(window).scroll(function(event) {
    //Sets the current scroll position
    var st = $(this).scrollTop();
    //Determines up-or-down scrolling
    console.log(app.offsetArray);
    console.log(st);
    if (st > lastScroll) {
        var n = 0;
        for (n = 0; n < app.offsetArray.length; n++) {
            if (app.offsetArray[n] > st) {
                console.log(n);
                break;
            }
        }
    }
    else {
        //Replace this with your function call for upward-scrolling
        var n = 0;
        for (n = app.offsetArray.length - 1; n >= 0; n--) {
            if (st > app.offsetArray[n]) {
                console.log(n);
                break;
            }
        }
    }
    //Updates scroll position
    lastScroll = st;
});