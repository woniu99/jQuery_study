// 1.得到父元素
$(function() {

    $("div.dcell").parent().each(function(index,elem) {
        console.log("Elememt:" + elem.tagName + " " + elem.id);
    });

});