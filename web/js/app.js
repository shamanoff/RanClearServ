
/*var pics = [
    "../images/controller.png",
    "../images/cherries.png",
    "../images/cards.png",
    "../images/bombs.png",
    "../images/bomb.png",
    "../images/board-game.png",
    "../images/ball.png",
    "../images/ammo.png"
];*/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = mm+'.'+dd+'.'+yyyy;
// document.write(today);


var ImageRandom = "";
var num;
var name;


//---------------------------------------------------
/*$.ajaxSetup({
    async: false
});
var  mObj =[];
    $.getJSON("../../images.json", function(json) {
        mObj=JSON.parse(JSON.stringify(json));
    //console.log(json);


});
console.log(mObj.length);*/
$.ajaxSetup({
    async: false
});
var  mObj =[];
var ajax = $.getJSON("images.json");
ajax.done( function( json ){mObj=JSON.parse(JSON.stringify(json));});
console.log(mObj);

//------------------------------------
/*var noEm = [];
for(var i = 0; i<mObj.length; i++) {
    if(mObj[i] === ""){
        i++;
    }else {noEm[i] = mObj[i]; i++;}
}
console.log(noEm);*/

//-----------------------------------------
function myF() {
    num = Math.floor(Math.random() * mObj.length);

    if(mObj[num] !==""){ImageRandom = mObj[num];}else {myF()}



    document.getElementById("pic").style.backgroundImage = 'url(' +ImageRandom+ ')';
    /*name=document.getElementById('name').value;
    document.getElementById("title").innerHTML = name+ "'s New UserPic!";
    console.log(name);
*/


}
var dateBy = document.createElement('p');
dateBy.id = "para";
dateBy.innerHTML =  "Today - "+ today;
document.getElementById('title').appendChild(dateBy);
//--------------------------------------------------------------

function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
}

/*
$.getJSON( "../../images.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
        "class": "images-list",
        html: items.join( "" )
    }).appendTo( ".hiddenPics" );
});*/

//console.log(items);







