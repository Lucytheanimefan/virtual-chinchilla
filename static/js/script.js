var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

c.width = 800;
c.height = 600;

base_image = new Image();
base_image.src = '/static/img/chin.png';

localStorage.setItem("food", 0);
localStorage.setItem("play", 0);

var maxFood = getRandomInt(1, 70);
var maxPlay = getRandomInt(1, 70);

console.log(maxFood + "," + maxPlay)

base_image.onload = function() {
    ctx.drawImage(base_image, 0, 0, 800, 600);
}

/*----------food-------------*/
var add,
    charset,
    emoji,
    left,
    width;

charSet = new Array('banana', 'bento', 'birthday_cake', 'bread', 'burrito', 'cake', 'candy', 'cheese', 'cherries', 'chocolate', 'cookie', 'corn', 'curry', 'dango', 'doughnut', 'egg', 'eggplant', 'fish_cake', 'flan', 'fried_shrimp', 'fries', 'grapes', 'green_apple', 'hamburger', 'honey_pot', 'hot_dog', 'ice_cream', 'icecream', 'lemon', 'lollipop', 'meat_on_bone', 'melon', 'oden', 'orange', 'peach', 'pear', 'pepper', 'pineapple', 'pizza', 'popcorn', 'poultry_leg', 'ramen', 'red_apple', 'rice_ball', 'rice_cracker', 'rice', 'shaved_ice', 'spaghetti', 'stew', 'strawberry', 'sushi', 'sweet_potato', 'taco', 'tomato', 'watermelon');

width = $(window).width()/2;


alert("Click me");

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#myCanvas").click(function(e) {
    var x = Math.floor((e.pageX - $("#myCanvas").offset().left));
    var y = Math.floor((e.pageY - $("#myCanvas").offset().top));
    var p = ctx.getImageData(x, y, 1, 1).data;
    if (p[0] < 120 && p[1] < 90 && p[2] < 70 && p[3] == 255) {
        touchedChin();
    }
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

});


function touchedChin() {
    console.log("Clicked chin")
    $(".talk-bubble").remove();
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
        $(".chin_row").prepend('<div class="talk-bubble tri-right round btm-left">' +
            '<div class="talktext">' +
            '<p>' + a[0].content + '</p></div></div>');
    });


}

function feed() {
    var currentFood = parseInt(localStorage.getItem("food"));
    console.log("currentFood: " + currentFood);
    if (currentFood > maxFood) {
        $(".chin_row").empty();
          $(".chin_row").append('<div class="test">You OVERFED chin and chin died.</div><svg xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <filter id="squiggly-0"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/> <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/> </filter> <filter id="squiggly-1"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/> </filter> <filter id="squiggly-2"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="6"/> </filter> <filter id="squiggly-3"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/> </filter> <filter id="squiggly-4"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="6"/> </filter> </defs> </svg>')
    } else {
        left = Math.floor(Math.random() * width);
        emoji = charSet[Math.floor(Math.random() * charSet.length)];
        add = '<img class="emoji" style="left: ' + left + 'px;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/168840/' + emoji + '.svg"/>';
        $(add).appendTo('.container').animate({
            top: $(window).height()
        }, 1600, function() {
            $(this).remove();
        });

        currentFood = currentFood + 1;
        localStorage.setItem("food", currentFood);
    }

}

function play() {
    var currentPlay = parseInt(localStorage.getItem("play"));
    console.log("currentPlay: " + currentPlay);
    if (currentPlay > maxPlay) {
        $(".chin_row").empty();
        $(".chin_row").append('<div class="test">You OVERPLAYED chin and chin died from too much energy exertion.</div><svg xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <filter id="squiggly-0"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/> <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/> </filter> <filter id="squiggly-1"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/> </filter> <filter id="squiggly-2"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="6"/> </filter> <filter id="squiggly-3"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/> </filter> <filter id="squiggly-4"> <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="6"/> </filter> </defs> </svg>')
        //$(".chin_row").append("<h1>You OVERPLAYED chin and chin died from too much energy exertion.</h1>");
    } else {
        $(".canvas").remove()
        var num = getRandomInt(3, 5);
        $(".chin_row").append('<div class="canvas canvas'+num+'"> <div class="spinner'+num+'"></div></div>')
        currentPlay = currentPlay + 1;
        localStorage.setItem("play", currentPlay);
    }

}

function findPos(obj) {
    var curleft = 0,
        curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}



