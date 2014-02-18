/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 *
 * pagecreate
 * pageinit
 * pagebeforechange
 * pagebeforecreate
 */

var insertButton = function(btnID, btnText){
    $("#evtInsert").append('<a id="'+btnID+'" data-role="button">'+btnText+'</a>')
};

$(document).on("pagecreate", "#pageEvents1", function(){
//    alert("pagecreate");
    $("#evtbtn01").html("pagecreate");
    insertButton("evtInsBtn01","new Pagecreate Button");
});
$(document).on("pageinit", "#pageEvents1", function(){
//    alert("pageinit");
    $("#evtbtn02").html("pageinit");
    insertButton("evtInsBtn02","new Pageinit Button");
});
$(document).on("pagebeforecreate", "#pageEvents1", function(){
//    alert("pagebeforecreate");
    $("#evtbtn03").html("pagebeforecreate");
    insertButton("evtInsBtn02","new Pagebeforecreate Button");
});
