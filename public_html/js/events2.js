/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 *
 * pagecreate
 * pageinit
 * pagebeforechange
 * pagebeforecreate
 */
var glblEventIndex = 0;

var logEventOutput = function(index, text){
    console.log(index+': '+text);
};

$(document).on("vclick", "#toucher", function(){logEventOutput(glblEventIndex++, "vclick");});
$(document).on("click", "#toucher", function(){logEventOutput(glblEventIndex++, "click");});
$(document).on("tap", "#toucher", function(){logEventOutput(glblEventIndex++, "tap");});
$(document).on("swipeleft", "#toucher", function(){logEventOutput(glblEventIndex++, "swipeleft");});
$(document).on("swiperight", "#toucher", function(){logEventOutput(glblEventIndex++, "swiperight");});
$(document).on("swipe", "#toucher", function(){logEventOutput(glblEventIndex++, "swipe");});
$(document).on("taphold", "#toucher", function(){logEventOutput(glblEventIndex++, "taphold");});
//$(document).on("vmousedown", "#toucher", function(){logEventOutput(glblEventIndex++, "vmousedown");});
//$(document).on("mousedown", "#toucher", function(){logEventOutput(glblEventIndex++, "mousedown");});
//$(document).on("vmouseup", "#toucher", function(){logEventOutput(glblEventIndex++, "vmouseup");});
//$(document).on("mouseup", "#toucher", function(){logEventOutput(glblEventIndex++, "mouseup");});
//$(document).on("vmousemove", "#toucher", function(){logEventOutput(glblEventIndex++, "vmousemove");});
//$(document).on("mousemove", "#toucher", function(){logEventOutput(glblEventIndex++, "mousemove");});
//$(document).on("vmouseover", "#toucher", function(){logEventOutput(glblEventIndex++, "vmouseover");});
//$(document).on("mouseover", "#toucher", function(){logEventOutput(glblEventIndex++, "mouseover");});

$(document).on("pagebeforechange", function(){logEventOutput(glblEventIndex++, "pagebeforechange - pageEvents2");});
$(document).on("pagebeforecreate", "#pageEvents2", function(){logEventOutput(glblEventIndex++, "pagebeforecreate - pageEvents2");});
$(document).on("pagebeforehide", "#startPage", function(){logEventOutput(glblEventIndex++, "pagebeforehide - startPage");});
$(document).on("pagebeforeload", function(){logEventOutput(glblEventIndex++, "pagebeforeload - startPage");});
$(document).on("pagechange", function(){logEventOutput(glblEventIndex++, "pagechange - pageEvents2");});
$(document).on("pagechangefailed", function(){logEventOutput(glblEventIndex++, "pagechangefailed - pageEvents2");});
$(document).on("pagecreate", "#pageEvents2", function(){logEventOutput(glblEventIndex++, "pagecreate - pageEvents2 ");});
$(document).on("pagehide", "#startPage", function(){logEventOutput(glblEventIndex++, "pagehide - startPage");});
$(document).on("pageinit", "#pageEvents2", function(){logEventOutput(glblEventIndex++, "pageinit - pageEvents2");});
$(document).on("pageload", function(){logEventOutput(glblEventIndex++, "pageload");});
$(document).on("pageloadfailed", function(){logEventOutput(glblEventIndex++, "pageloadfailed");});
$(document).on("pageremove", function(){logEventOutput(glblEventIndex++, "pageremove");});
$(document).on("pageshow", "#pageEvents2", function(){logEventOutput(glblEventIndex++, "pageshow - pageEvents2");});


$(document).on("click", "#evtChangeBtn", function(){
    $.mobile.changePage("./page_events_1.html", {showLoadMsg:false});
});

$(document).on("click", "#evtChangeSameBtn", function(){
    $.mobile.changePage("./page_events_2.html", {
        allowSamePageTransition: true,
        transition:"flip",
        reverse:true
    });
});

$(document).on("click", "#evtChangeBtnErr", function(){
    $.mobile.changePage("./page_events_22.html");
});

$(document).on("click", "#evtLoadBtn", function(){
    $.mobile.loadPage("./page_events_1.html");
});

$(document).on("click", "#evtLoadBtnErr", function(){
    $.mobile.loadPage("./page_events_22.html");
});